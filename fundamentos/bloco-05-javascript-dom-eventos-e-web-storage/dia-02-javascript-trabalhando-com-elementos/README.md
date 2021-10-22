# DIA - 2

## Aula ao vivo

## Course

Na quinta parte da aula sobre JavaScript, irei aprender adicionar e remover tags de uma página.E mais uma forma de buscar os elementos da página.

O que vou conseguir fazer :
* Adicionar e remover elementos HTML da página via JavaScript ;

* Buscar os elementos da página com a propriedade parentNode .

#### Parte I - Buscando elementos

 A propriedade parentNode acessa o elemento pai do elemento sobre o qual a propriedade é chamada. 

  - parentNode : retorna o nó pai.

  - parentElement : retorna o elemento pai.
  
  - childNodes : retorna um NodeList com todos os nós filhos.

  - children : retorna um HTMLCollection com todos os elementos   - filhos.

  - firstChild : retorna o primeiro nó filho.
  
  - firstElementChild : retorna o primeiro elemento filho.
  - lastChild : retorna o último nó filho.
  - lastElementChild : retorna o último elemento filho.
  - nextSibling : retorna o próximo nó.
  - nextElementSibling : retorna o próximo elemento.
  - previousSibling : retorna o nó anterior.
  - previousElementSibling : retorna o elemento anterior.


## Parte II

## Parte III

## Exericícios
 O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags `<script>` e `</script>` .

1. Adicione a tag `h1` com o texto **Exercício 5.2 - JavaScript DOM** como filho da tag body ;
2. Adicione a tag main com a classe main-content como filho da tag body ;
3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
7. Adicione uma imagem com src configurado para o valor `https://picsum.photos/200` e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

1.Adicione a classe title na tag h1 criada;

2. Adicione a classe description nas 3 tags h3 criadas;

3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.