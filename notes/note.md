## Anotações

React é uma biblioteca JavaScript criada pelo Facebook para administrar interfaces de usários para aplicações web facilmente.

Para criar aplicação já configurada podemos utilizar `npx create-react-app my-app`

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