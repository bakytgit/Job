import csv
csv.field_size_limit(1000000)
import re

def correct_fio(full_name):
    parts = full_name.split()
    if len(parts) == 2:
        return parts[0], ' '.join(parts[1:]), ''
    elif len(parts) == 3:
        return parts[0], parts[1], parts[2]

def correct_phone(phone):
    pattern = r"(\+7|8)?\s*\(?(\d{3})\)?\s*(\d{3})\-(\d{2})\-(\d{2})(\s*доб\.\s*(\d+))?"
    match = re.match(pattern, phone)
    if match:
        return f"+7({match.group(2)}){match.group(3)}-{match.group(4)}-{match.group(5)}{' доб.'+match.group(7) if match.group(7) else ''}"
    return phone

def process_contacts(contacts_list):
  """
  Processes the list of contacts, handling lines with potentially different field lengths.
  """
  unique_contacts = {}
  for contact in contacts_list[1:]:  # Skip header
    # Check the length of the contact list
    if len(contact) < 7:
      # Handle cases with fewer than 7 fields (assign default values or skip)
      continue
    # Unpack only if there are 7 fields
 #last_name, first_name, surname, organization, position, phone, email = contact


  return list(unique_contacts.values())

# Читаем данные из файла
with open("phonebook_raw.csv", encoding="utf-8") as f:
    rows = csv.reader(f, delimiter=",")
    contacts_list = list(rows)

# Обрабатываем данные
processed_contacts = process_contacts(contacts_list)

# Записываем результат в новый файл
with open("phonebook.csv", "w", newline='', encoding="utf-8") as f:
    datawriter = csv.writer(f, delimiter=',')
    datawriter.writerows(processed_contacts)