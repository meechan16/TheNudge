from datetime import datetime, timedelta

def pick_slot_for_task(free_slots, deadline, duration_minutes, prefer_latest=False):
    valid_slots = []

    for slot_start, slot_end in free_slots:
        # Normalize everything to UTC (just in case)
        if slot_start.tzinfo is None:
            slot_start = slot_start.replace(tzinfo=deadline.tzinfo)
        if slot_end.tzinfo is None:
            slot_end = slot_end.replace(tzinfo=deadline.tzinfo)

        # Filter slots that end before the deadline and are long enough
        if slot_end <= deadline:
            duration = (slot_end - slot_start).total_seconds() / 60
            if duration >= duration_minutes:
                valid_slots.append((slot_start, slot_start + timedelta(minutes=duration_minutes)))

    if not valid_slots:
        return None

    return valid_slots[-1] if prefer_latest else valid_slots[0]


