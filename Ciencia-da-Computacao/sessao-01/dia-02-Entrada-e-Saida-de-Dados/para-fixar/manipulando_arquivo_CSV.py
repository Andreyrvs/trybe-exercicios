import csv

with open("./para-fixar/graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = graduacao_reader

    group_by_departament = {}

    for row in data:
        departament = row[15]
        if departament not in group_by_departament:
            group_by_departament[departament] = 0
        group_by_departament[departament] += 1


with open("./para-fixar/department_report.csv", "w", encoding="utf-8") as file:

    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    writer = csv.DictWriter(file, fieldnames=headers)

    writer.writeheader()

    for department, grades in group_by_departament.items():

        row = {
            "Departamento": department,
            "Total de Cursos": grades,
        }
        writer.writerow(row)
