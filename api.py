from flask import Flask, request, jsonify
from auth import get_calendar_service
from calendar_utils import get_events, find_free_slots, create_event
from nlp_parser import parse_task_input
from scheduler import pick_slot_for_task

from datetime import datetime, timedelta, timezone
import re

app = Flask(__name__)

def extract_duration_minutes(text):
    match = re.search(r'\(([\d.]+)h\)', text)
    return int(float(match.group(1)) * 60) if match else 60

def clean_task_text(text):
    return re.sub(r'\([\d.]+h\)', '', text).strip()

@app.route("/schedule", methods=["POST"])
def schedule():
    data = request.get_json()
    task = data.get("task")

    if not task:
        return jsonify({"status": "error", "message": "Task is required"}), 400

    try:
        duration_minutes = extract_duration_minutes(task)
        clean_task = clean_task_text(task)
        deadline = parse_task_input(clean_task)

        service = get_calendar_service()
        now = datetime.now(timezone.utc)
        future = now + timedelta(days=7)

        events = get_events(service, now, future)
        free_slots = find_free_slots(events, now, future, min_duration_minutes=30)

        slot = pick_slot_for_task(free_slots, deadline, duration_minutes, prefer_latest=True)

        if not slot:
            return jsonify({"status": "error", "message": "No suitable time slot found"}), 404

        start, end = slot
        event_link = create_event(service, clean_task, start, end)

        return jsonify({
            "status": "success",
            "start": start.isoformat(),
            "end": end.isoformat(),
            "calendar_link": event_link
        })

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
