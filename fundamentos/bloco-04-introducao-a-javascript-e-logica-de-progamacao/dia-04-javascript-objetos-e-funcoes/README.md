# DIA - 4

## Aula ao vivo
1. Objetos:
- Transformar um array em objeto.
- Variavel interna de um objeto é uma **propriedade** ou **atributos**
- **Scopo** - locas de pertencimento
- Objeto é uma variável complexa!?

- Notação de ponto `person.firstName`
- Notação de colchetes `person['firstName']` essa notação aceita String
- Iterando/Iteração - Loop

2. Função:
- Parenteses () da **função** - parametros ou argumentos
    - Dentro dos parentesos (nome, salario) também se comporta como uma função!?
- return - retorna informação ao ser chamada
- Fato de uma função existir não significa que esta sendo **executada**
- Se a função tiver 2 parametros ela espera ser **alimentado** com os 2 paramentros

- `console.log` - mostra um conteudo em alguma tela ex: OUTPUT, navedagor
- Return não é uma saída de dados, ele deixa o dado disponível os dados no Meu código

---
## Parte I - Objetos e For/in
Usando o objeto abaixo, faça os exercícios a seguir:
```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```
### Exercícios

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
    `Bem-vinda, Margarida`
2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
    ```
    {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do     Pato Donald',
      recorrente: 'Sim'
    }
    ```
3. Faça um **for/in** que mostre todas as chaves do objeto. Valor esperado no console:
    ```
    personagem
    origem
    nota
    recorrente
    ```

4. Faça um novo **for/in** , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
    ```
    Margarida
    Pato Donald
    Namorada do personagem principal nos quadrinhos do Pato Donald
    Sim
    ```
5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

    ```
    Margarida e Tio Patinhas
    Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
    Namorada do personagem principal nos quadrinhos do Pato Donald  e O último MacPatinhas
    Ambos recorrentes // Atenção para essa última linha!
    ```

## Parte II - Funções
A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, [clique aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) para acessar a documentação completa. 
**Spoiler-alert** : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.

1. Crie uma função que receba uma `string` e retorne **true** se for um [palíndromo](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo) , ou **false** , se não for.
    - Exemplo de palíndromo: arara .
    - `verificaPalindrome('arara')` ;
    - Retorno esperado: **true**
    - `verificaPalindrome('desenvolvimento')`;
    - Retorno esperado: **false**.

2. Crie uma função que receba um **`array`** de inteiros e retorne o índice do maior valor.
    - Array de teste: `[2, 3, 6, 7, 10, 1]`; .
    - Valor esperado no retorno da função: **4** .

3. Crie uma função que receba um **`array`** de inteiros e retorne o índice do menor valor.
    - Array de teste: `[2, 4, 6, 7, 10, 0, -3]`; .
    - Valor esperado no retorno da função: 6 .

4. Crie uma função que receba um **`array`** de nomes e retorne o nome com a maior quantidade de caracteres.
    - Array de teste: `['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']`; .
    - Valor esperado no retorno da função: Fernanda .

5. Crie uma função que receba um **`array`** de inteiros e retorne o inteiro que mais se repete.
    - Array de teste: `[2, 3, 2, 5, 8, 2, 3]`; .
    - Valor esperado no retorno da função: 2 .

6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
    - Valor de teste: `N = 5` .
    - Valor esperado no retorno da função: 1+2+3+4+5 = **15** .

7. Crie uma função que receba uma **`string word`** e outra **`string ending`** . Verifique se a **`string ending`** é o final da **`string word`** . Considere que a **`string ending`** sempre será menor que a **`string word`** .
    - Valor de teste: **'trybe'** e **'be'**
    - Valor esperado no retorno da função: **true**
    - `verificaFimPalavra('trybe', 'be')` ;
    - Retorno esperado: **true**
    - `verificaFimPalavra('joaofernando', 'fernan')` ;
    - Retorno esperado: **false**
