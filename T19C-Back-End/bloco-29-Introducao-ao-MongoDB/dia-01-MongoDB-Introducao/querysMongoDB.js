// Exercicio 01
db.bios.find({_id:8})

// Exercicio 02
db.bios.find({_id:8}, {_id: 1, name: 1})

// Exercicio 03
db.bios.find({_id: 8}, {name: 1, birth: 1})

// Exercicio 04
db.bios.find({"name.first": "John"}).pretty()

// Exercicio 05
db.bios.find({"name.first": "John"}).pretty()

// Exercicio 06