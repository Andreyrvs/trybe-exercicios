import json

with open("./para-fixar/pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]
print(pokemons[0]["name"])
