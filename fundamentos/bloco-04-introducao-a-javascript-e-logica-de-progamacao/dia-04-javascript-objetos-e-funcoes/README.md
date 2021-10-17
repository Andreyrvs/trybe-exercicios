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
