# PARA FIXAR

## Objetos

### Exericicos

1. Crie um objeto **player** contendo as variáveis listadas abaixo.

```
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```

2. Acesse as chaves **name** , **lastName** e **age** e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

```
[2006, 2007, 2008, 2009, 2010, 2018]
```

4. Acesse a chave **bestInTheWorld** e faça um `console.log` no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

5. Acesse a chave **medals** e faça um `console.log` no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

## For/in
Um exemplo é a iteração nas chaves de um objeto:
```
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}
```
O resultado do código acima é:
```
type Fiat
model 500
color white
```

### Exercicios

1. Usando o objeto abaixo, utilize For/in e imprima no console a mensagem **'Olá xxxxx'** para cada nome, substituindo o **xxxxx** pelo nome em questão.

```
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
```

2. Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```

## Funções

Que tal praticar um pouco?
Pegue cada um dos exercícios da **primeira parte**(*TEM QUE ADICIONAR UM LINK PARA O DIA 4.1 NO GITHUB*) das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:
O programa...
```
// Adição
let a = 5;
let b = 2;

a + b;
```
... se transforma em:
```
function sum(a, b) {
  return a + b;
}
```
Após **refatorar** o seu código , verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.

> **Refatoração** - Processo de alterar um programa para melhorar sua estrutura interna sem alterar o seu funcionamento. Essas melhorias podem ser de performance ou para facilitar trabalhos futuros neste código, por exemplo.