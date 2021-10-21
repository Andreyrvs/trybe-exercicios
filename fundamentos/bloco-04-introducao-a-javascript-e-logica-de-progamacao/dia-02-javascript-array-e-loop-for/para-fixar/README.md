# PARA FIXAR - EXERCICIOS

Exercícicos dispostos após os videos de aula no Course.

## Array's
Na prática, o array é uma estrutura de dados que contém um índice numérico e um elemento, que pode ser de qualquer tipo primitivo de dados, um objeto ou, até mesmo, um outro array. [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
#### Exercício 1

* Obtenha o valor "Serviços" do array **menu** :
```
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ;

console.log(menuServices);
```

#### Exercício 2

* Procure o índice do valor "Portfólio" do array **menu** :

```
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = ;

console.log(indexOfPortfolio); 
```
#### Exercício 3

* Adicione o valor "Contato" no final do array **menu** :
```
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu);
```
---
## For
Embora seja um recurso da linguagem, o uso do operador de incremento ( ++ ) não é recomendado. O maior problema é que, embora seu uso principal esteja na geração de um side effect , esse operador sempre irá retornar algum valor e, pra piorar, as expressões ( ++x ) e ( x++ ), embora sejam facilmente confundidas por usar o mesmo operador e possuir o mesmo side effect, retornam valores diferentes.
Levando isso em consideração, o uso desse operador pode gerar confusão e causar bugs inesperados. Sendo assim, uma vez que o += 1 substitui completamente o ++ , recomenda-se o uso exclusivo de += 1 , e é essa a regra que iremos adotar neste conteúdo daqui pra frente!
#### Exercício 1
- Utilize o **for** para imprimir os elementos da lista **groceryList** com o `console.log()` :

``` 
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
```

---
## For/Of
O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros

#### Exercício 1
- Utilize o **for/of** para imprimir os elementos da lista **names** com o `console.log()` :

```
 let names = ['João', 'Maria', 'Antônio', 'Margarida'];
```
