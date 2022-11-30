def name_with_more_characters(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return print(biggest_name)


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
name_with_more_characters(names)
