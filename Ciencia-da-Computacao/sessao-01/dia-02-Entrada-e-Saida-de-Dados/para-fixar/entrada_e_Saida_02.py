guess = input("Insira valores aqui, separados por espaço: ")
guess_array = guess.split(" ")
sum = 0
for item in guess_array:
    if not item.isdigit():
        print(f"Erro ao somar valores, {item} é um valor inválido")
    else:
        sum += int(item)
print(f"A soma dos valores válidos é: {sum}")
