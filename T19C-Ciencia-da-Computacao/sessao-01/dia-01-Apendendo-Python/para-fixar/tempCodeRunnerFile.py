ratings = [6, 8, 5, 9, 10]

new_ratings = []
for rate in ratings:
    new_ratings.append(rate * 10)

print(new_ratings)

new_ratings = [10 * rating for rating in ratings]
print(new_ratings)

