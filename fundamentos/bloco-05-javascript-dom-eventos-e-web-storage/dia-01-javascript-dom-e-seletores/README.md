# DIA - 01

## Course

`document.getElementsByClassName()`.

Selecionar todos os elementos que tem uma classe. 
> **Ponto de atenção**,  mesmo que a classe tenha apenas 1 ocorrencia naquela classe, ela vai vir no formato de lista e tera que ser tratada como uma lista.


`document.getElementsByTagName()`. 
Quando quisermos alterar **proriedades** ou **buscar** o conteudo de tudo que tiver uma mesma `<tag>`.
  - se eu quiser pegar todos os **textos** de um paragrafo `<p>`.
  - se eu quiser pegar todos elementos *HTML* que estão dentro de todas as `<div>`.


## Exercicios

Funções de manipulação do DOM.

1. A seguir, você verá um trecho de código HTML e CSS .

2. Crie um arquivo HTML dentro do diretório trybe/exercises/javascript-dom-eventos-e-web-storage/dia-01 e copie o código a seguir.

3. Leia as instruções que estão dentro de um comentário na tag `<script>` .

4. Não se esqueça de fazer um commit a cada exercício!

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.1</title>
    
    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header> 
      <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
    </header>    
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
    </script>
  </body>
</html>
```