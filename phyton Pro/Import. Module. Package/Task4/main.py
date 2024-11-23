import requests

response = requests.get('https://api.github.com/users/defunkt')
json_response = response.json()
print(json_response['name'])