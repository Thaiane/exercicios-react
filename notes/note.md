## Anotações

React é uma biblioteca JavaScript criada pelo Facebook para administrar interfaces de usários para aplicações web facilmente.

### **Create-React-App**

Para criar aplicação já configurada podemos utilizar `npx create-react-app my-app`

### **JSX**

Quando importamos `react`, é permitido utilizar JSX. O JSX  é uma extensão da sintaxe do JavaScript que lembra XML e se parece muito com HTML. Por exemplo:

```
<div>
    <p>Olá Mundo</p>
</div>
 ```

O código JSX acima é transpilado em javascript puro conforme abaixo. Em JSX temos a vantegem de um código com mais legibilidade e manutenabilidade, além de contribuir com a performance já que é transpilado para javascript puro.

```
"use strict";
 
React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "Olá Mundo"
  )
);
```

### **Web Components**

A arquitetura de projetos usando componentes web possibilita encapsular e reutilizar partes do seu sistema e formar uma árvore de componentes que são utilizados pelo DOM na `single page application`. 

### **Multiplos Componentes**

Há três formas de usar múltiplos componentes na mesma estrutura: encapsulando  com uma `div`, encapsulando com o `React.Fragment` ou usando notação do JSX de forma a encapsular com `[]` e separar os componentes com uma vírgula. Exemplos:

```
const MultiComponentesComFragment = props =>
    <React.Fragment>
      <h1>Oi, eu uso Fragment</h1>
      <h2>Olá!</h2>
    </React.Fragment>

const MultiComponentesComDiv = props =>
    <div>
        <h1>Oi, eu uso Div</h1>
        <h2>Olá!</h2>
    </div>

const MultiComponentesComJSX = props => [
    <h1>Oi, eu uso JSX</h1>,
    <h2>Olá!</h2>
]
```

