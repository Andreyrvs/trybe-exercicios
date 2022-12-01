guess = input('Digite numeros naturais separados por virgula: ')

formated = guess.split(",")

add = 0
for number in formated:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} é um valor inválido”")
    else:
        add += int(number)


print(f"A soma dos valores válidos é: {add}")
