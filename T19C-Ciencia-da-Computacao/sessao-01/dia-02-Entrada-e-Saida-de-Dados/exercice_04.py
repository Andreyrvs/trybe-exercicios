import json


def read_json():
    with open("books.json") as file:
        content = file.read()
        books = json.loads(content)
        return books


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories
