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
db.bios.find({}).limit(2).skip(5)

// Exercicio 07 
// docker cp books.json 01871965c939:/tmp/books.json  
// docker exec 01871965c939 mongoimport -d sample -c books --file /tmp/books.json
db.books.countDocuments({})

// Exercicio 08 

// Exercicio 09 

// Exercicio 10 
