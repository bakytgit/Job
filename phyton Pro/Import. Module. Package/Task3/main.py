
# main.py
import datetime

def get_current_date():
    """Возвращает текущую дату в формате 'Год-Месяц-День'."""
    now = datetime.datetime.now()
    return now.strftime("%Y-%m-%d")

if __name__ == "__main__":
    current_date = get_current_date()
    print(f"Сегодня: {current_date}")