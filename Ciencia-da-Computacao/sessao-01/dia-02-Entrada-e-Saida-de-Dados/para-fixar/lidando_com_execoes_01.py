with open("./para-fixar/arquivo.txt") as file:
    recuStudents = []
    for line in file:
        nota = line.split(" ")
        if int(nota[1]) < 6:
            recuStudents.append(nota[0] + "\n")

    file.close()


with open("./para-fixar/recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
    file.close()
