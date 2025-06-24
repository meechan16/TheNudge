from datetime import datetime, timedelta
from auth import get_calendar_service

def get_events(service, start_time, end_time):
    events_result = service.events().list(
        calendarId='primary',
        timeMin=start_time.isoformat(),
        timeMax=end_time.isoformat(),
        singleEvents=True,
        orderBy='startTime'
    ).execute()
    return events_result.get('items', [])


def find_free_slots(events, start_time, end_time, min_duration_minutes=60):
    free_slots = []
    now = start_time

    for event in events:
        event_start = datetime.fromisoformat(event['start']['dateTime'].replace('Z', '+00:00'))
        if (event_start - now).total_seconds() >= min_duration_minutes * 60:
            free_slots.append((now, event_start))
        now = max(now, datetime.fromisoformat(event['end']['dateTime'].replace('Z', '+00:00')))

    # Check for time after last event
    if (end_time - now).total_seconds() >= min_duration_minutes * 60:
        free_slots.append((now, end_time))

    return free_slots


def create_event(service, summary, start_datetime, end_datetime):
    event = {
        'summary': summary,
        'start': {
            'dateTime': start_datetime.isoformat(),
            'timeZone': 'Asia/Kolkata',  # or 'UTC' if you're using UTC everywhere
        },
        'end': {
            'dateTime': end_datetime.isoformat(),
            'timeZone': 'Asia/Kolkata',
        },
    }

    created_event = service.events().insert(calendarId='primary', body=event).execute()
    return created_event.get('htmlLink')


