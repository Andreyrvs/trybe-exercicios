def smallest_number(array):
    smaller = array[0]
    for number in array:
        if number < smaller:
            smaller = number
    return smaller


def minimum(array):
    return min(array)


array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(smallest_number(array))
print(minimum(array))
