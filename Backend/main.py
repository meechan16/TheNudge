from auth import get_calendar_service
from calendar_utils import get_events, find_free_slots, create_event
from nlp_parser import parse_task_input
from scheduler import pick_slot_for_task
from datetime import datetime, timedelta, timezone

def main():
    goal_input = "Finish resume before Friday night (1.5h)"
    duration_minutes = 90  # Extract manually or via regex

    # Parse deadline
    deadline = parse_task_input(goal_input)
    print("Parsed deadline:", deadline)

    # Auth and get free slots
    service = get_calendar_service()
    now = datetime.now(timezone.utc)
    future = now + timedelta(days=7)

    events = get_events(service, now, future)
    free_slots = find_free_slots(events, now, future, min_duration_minutes=30)

    print("Available free slots (1h+):")
    for slot in free_slots:
        print(f"{slot[0]}  →  {slot[1]}")

    # Pick a time slot
    slot = pick_slot_for_task(free_slots, deadline, duration_minutes, prefer_latest=True)

    if slot:
        start, end = slot
        print(f"Suggested slot for '{goal_input}':")
        print(f"{start} → {end}")

        # Optionally create the event
        confirm = input("📅 Create event? (y/n): ").strip().lower()
        if confirm == "y":
            link = create_event(service, goal_input, start, end)
            print(f"Event created: {link}")
    else:
        print("No suitable slot found before the deadline.")

if __name__ == "__main__":
    main()
