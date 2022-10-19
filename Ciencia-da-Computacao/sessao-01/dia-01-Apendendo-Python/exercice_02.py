def arithmetic_average(list):
    total = 0
    for item in list:
        total += item
    return total // len(list)


list = [1, 2, 4, 6, 8, 887, 77, 2]
print(arithmetic_average(list))
