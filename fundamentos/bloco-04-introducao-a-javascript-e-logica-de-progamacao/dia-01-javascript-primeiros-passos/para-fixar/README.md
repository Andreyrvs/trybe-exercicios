# Para Fixar 

 Exercicios feitos junto as video aulas do Course 

## Variaveis

**Dica**: *Com o plugin code runner que vimos no vídeo você pode executar o seu código no VS Code com o atalho ctrl + alt + n. Confira mais dicas sobre o VS Code* [aqui](https://app.betrybe.com/course/real-life-engineer/vscode) !

1. Crie uma constante chamada **myName** e atribua a ela o seu nome (Exemplo: Carolina).
2. Crie uma constante chamada **birthCity** e atribua a ela a sua cidade natal.
3. Crie uma variável chamada **birthYear** e atribua a ela o ano em que você nasceu.
4. Utilize o `console.log()` para imprimir as constantes e variáveis que você criou.
5. Altere o valor atribuído à variável **birthYear** para 2030. Faça um `console.log(birthYear)` novamente para ver o que acontece!
6. Altere o valor atribuído à constante **birthCity** . Faça um `console.log(birthCity)` novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

---
## Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível [nesse link](https://www.w3schools.com/js/js_operators.asp) se tiver dúvidas. Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

1. Crie uma costante chamada **base** e uma variável chamada **height** e atribua os seus respectivos valores: 5 e 8.
2. Crie uma constante chamada **area** e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o `console.log()` para imprimir as variáveis e checar os resultados das operações!
3. Crie uma constante chamada **perimeter** e atribua a ela a soma de todos os lados do retângulo.

---
## Condições If e Else

1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

2. mplemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
    - Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
    - Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
    - Se a nota for menor que 60, imprima "Você foi reprovada(o)"

3. Crie uma estrutura condicional utilizando o **if** , **else if** e **else** para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

4. Altere o valor da nota para verificar se as condições que você implementou funcionam;

---
## Operadores lógicos
Na linguagem JavaScript, temos três principais operadores lógicos: && , || e o ! . Podemos nos referir a eles como "AND", "OR" e "NOT", respectivamente.
Essas ferramentas não vão te acompanhar apenas no JavaScript, mas em toda sua carreira. Por isso, é muito importante praticar bastante e ficar bem familiarizado com o conceito de cada um deles.


### Operador AND

1. Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
2. Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
3. Implemente condicionais para que:
    - Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
    - Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
    - Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
    - Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
    - Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
4. Agora imprima a variável message fora das suas condições.

---
### Operador OR

1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
2. Implemente condicionais para que:
    - Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
    - Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".


---
### Switch e Case

1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: **'aprovada'** , **'lista'** ou **'reprovada'** ;
2. Crie uma estrutura condicional com o **switch/case** que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for **'aprovada'** , **'lista'** ou **'reprovada'** . Como **default** , imprima a mensagem de **'não se aplica'** .

---
### Operador NOT

```
  console.log((2 + 2) === 4);
```
Isso aqui deve nos retornar true , não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. Agora, se adicionarmos o operador NOT antes dessa declaração?
```
  console.log(!(2 + 2) === 4);
```
Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔
- Estamos diante de um operador muito poderoso. Ele pode **inverter** o valor booleano de um elemento. 
- Então, sabendo que o resultado original da operação ali em cima é **true** , quando a gente insere o operador **NOT** antes da operação, teremos o valor contrário a nossa resposta final, que é **false** .
- Vale lembrar que o conceito de **truthy** e **falsy** também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:

    - Strings...
    ```
    const squirtle = "melhor pokemon inicial";
      console.log(!squirtle); // false
    ```
    - Números...
    ```
    console.log(!42); // false
    console.log(!0); // true
    // O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
    ```
    - Valores nulos...
    ```
    console.log(!null); // true
    ```
    - Valores indefinidos..
    ```
    console.log(!undefined); // true
    ```