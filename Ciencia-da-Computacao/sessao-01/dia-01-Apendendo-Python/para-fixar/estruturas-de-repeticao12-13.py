# 12 ==========
numero = 5
resultado = 1
count = 1

while count <= numero:
    resultado = resultado * count
    count += 1
print(resultado)

# 13 ==========
ratings = [6, 8, 5, 9, 10]

new_ratings = []
for rate in ratings:
    new_ratings.append(rate * 10)

print(new_ratings)

new_ratings = [10 * rating for rating in ratings]
print(new_ratings)


# 14 ==========
ratings = [6, 8, 5, 9, 10]
for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0:  # se o resto é zero, é divisível
        print(f"{rating} é múltiplo de 3")
