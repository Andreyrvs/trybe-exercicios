# DIA - 01

## O que vamos aprender?
Na aula de hoje você irá aprender um conceito fundamental para a correta construção das suas aplicações em React . Todo componente React tem, no contexto da interação da aplicação com cada browser, um Lifecycle , ou ciclo de vida de um componente . As fases desse Lifecycle têm, associadas a si, funções através das quais quem programa pode associar comportamentos.
Por exemplo, a função componentDidMount executa logo que um componente acabou de ser montado no DOM. Uma lógica a ser executada nesse exato momento deve ser chamada aí. Vamos ver, na aula de hoje, mais sobre o Lifecycle e os vários momentos com os quais se interage através de funções do próprio React.
Vamos aprender a utilizar os métodos do ciclo de vida do componente para que possamos programar cada coisa no seu devido lugar.

## Você será capaz de:
Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;
Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;
Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado.

## Por que isso é importante?
Imagine que seu componente nem sequer apareceu na tela da pessoa que utiliza sua página e que você já pediu para atualizar algum elemento gráfico contido no componente. Esse elemento gráfico que você tentou acessar ainda não existe, então esse pedido foi um desperdício de tempo e recursos do computador, concorda? Mas qual o problema disso? Se você enquanto pessoa que programa o software não se preocupar com o momento em que cada recurso deve ser utilizado (recursos são finitos) , você provavelmente vai estar utilizando mal esses recursos.
As funções de ciclo de vida do componente vêm para nos dar o controle necessário para utilizar cada recurso no momento certo e para garantir que a assincronicidade do React não prejudique a lógica do que você está tentando executar. Seja para a chamada de uma API , seja para atualização de algum elemento gráfico, é fundamental respeitar o momento em que seu componente se encontra.
# Recursos adicionais (opcional)
- [Video sobre React Lifecycle](https://www.youtube.com/watch?v=m_mtV4YaI8c)
- [Métodos Raramente Usados](https://pt-br.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
- [Métodos do ciclo de vida de componentes ReactJS — Um mergulho profundo!](https://medium.com/creditas-tech/m%C3%A9todos-do-ciclo-de-vida-de-componentes-reactjs-um-mergulho-profundo-332ed7b3b782)
- [Tutorial sobre Lifecycle](https://www.newline.co/fullstack-react/30-days-of-react/day-7/)
- [Filas e pilhas em ES6](https://dev.to/dilantha111/stacks-and-queues-in-js-with-es6-classes-and-array-20kh)
- [Mais informações sobre Lifecycle](https://www.geeksforgeeks.org/reactjs-lifecycle-components/)
- [Visão detalhada de cada método de Ciclo de Vida do React.](https://pt-br.reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)
