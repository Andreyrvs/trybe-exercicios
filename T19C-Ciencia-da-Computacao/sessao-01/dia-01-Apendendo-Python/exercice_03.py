def print_asterisk_block(column):
    for row in range(column):
        print(column * "* ")
    print("\r")


def print_asterisk_pyramid(rows):
    for row in range(1, rows + 1):
        print(row * "* ")
    print("\r")


def print_asterisk_pyramid_inverted(rows):
    for row in range(rows, 0, -1):
        print(row * "* ")
    print("\r")


def print_asterisk_pyramid_full(rows):
    # https://www.programiz.com/python-programming/examples/pyramid-patterns
    k = 0
    for column in range(1, rows + 1):
        for space in range(1, (rows - column) + 1):
            print(end="  ")

        while k != (2 * column - 1):
            print("* ", end="")
            k += 1
        k = 0
        print()


print_asterisk_block(5)
print_asterisk_pyramid(5)
print_asterisk_pyramid_inverted(5)
print_asterisk_pyramid_full(5)
