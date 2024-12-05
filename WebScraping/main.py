import requests
from bs4 import BeautifulSoup
import json

def parse_hh(keywords, cities):
    base_url = "https://spb.hh.ru/search/vacancy?text={}&area={}"
    results = []
    for city in cities:
        for keyword in keywords:
            url = base_url.format(keyword, city)
            response = requests.get(url)
            soup = BeautifulSoup(response.content, 'html.parser')

            vacancies = soup.find_all('div', class_='vacancy-serp-item__row')
            for vacancy in vacancies:
                title = vacancy.find('a', class_='bloko-link').text.strip()
                company = vacancy.find('a', class_='bloko-link bloko-link_secondary').text.strip()
                salary = vacancy.find('span', class_='bloko-header-section-2 bloko-header-section-2_lite').text.strip()
                link = vacancy.find('a', class_='bloko-link')['href']
                description = vacancy.find('div', class_='vacancy-serp-item__description').text.strip()

                if any(keyword in description for keyword in keywords):
                    results.append({
                        'title': title,
                        'company': company,
                        'salary': salary,
                        'link': link,
                        'city': city
                    })

    with open('vacancies.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=4, ensure_ascii=False)

if __name__ == '__main__':
    keywords = ['Python']
    cities = ['113', '2']  # Москва и Санкт-Петербург соответственно
    parse_hh(keywords, cities)