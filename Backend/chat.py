from auth import get_calendar_service
from calendar_utils import get_events, find_free_slots, create_event
from nlp_parser import parse_task_input
from scheduler import pick_slot_for_task

import re
from datetime import datetime, timedelta, timezone

def extract_duration_minutes(text):
    match = re.search(r'\(([\d.]+)h\)', text)
    if match:
        hours = float(match.group(1))
        return int(hours * 60)
    return 60  # default 1h

def clean_goal_text(text):
    return re.sub(r'\([\d.]+h\)', '', text).strip()

def run_chat():
    print("🤖 Nudge is here. Describe your task like:\n→ 'Finish project before Friday (1.5h)'")
    print("Type 'exit' to quit.\n")

    service = get_calendar_service()
    now = datetime.now(timezone.utc)
    future = now + timedelta(days=7)
    events = get_events(service, now, future)
    free_slots = find_free_slots(events, now, future, min_duration_minutes=30)

    while True:
        user_input = input("📝 Your task: ").strip()
        if user_input.lower() == "exit":
            break

        duration_minutes = extract_duration_minutes(user_input)
        cleaned_input = clean_goal_text(user_input)
        deadline = parse_task_input(cleaned_input)

        print(f"📆 Parsed deadline: {deadline}")
        print(f"⏱ Duration: {duration_minutes} minutes")

        slot = pick_slot_for_task(free_slots, deadline, duration_minutes, prefer_latest=True)

        if slot:
            start, end = slot
            print(f"✅ Task scheduled: {start} → {end}")
            confirm = input("📅 Add to calendar? (y/n): ").strip().lower()
            if confirm == "y":
                link = create_event(service, cleaned_input, start, end)
                print(f"🎉 Event created! View it here:\n{link}")
            else:
                print("🚫 Okay, not added.")
        else:
            print("😕 Couldn't find a suitable slot before the deadline.")

        print("\n---\n")

if __name__ == "__main__":
    run_chat()
