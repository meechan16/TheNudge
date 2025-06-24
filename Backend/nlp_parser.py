# nlp_parser.py
import parsedatetime
import datetime


def parse_task_input(user_input):
    cal = parsedatetime.Calendar()
    dt, _ = cal.parseDT(user_input)

    # Force into UTC (timezone-aware)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=datetime.timezone.utc)
    else:
        dt = dt.astimezone(datetime.timezone.utc)

    # Optional fix: if parsed time is in the past, assume next occurrence
    now = datetime.datetime.now(datetime.timezone.utc)
    if dt < now:
        dt += datetime.timedelta(days=1)

    return dt



# Example
if __name__ == "__main__":
    test_input = "Finish resume before Friday night"
    result = parse_task_input(test_input)
    print("Parsed deadline:", result)
