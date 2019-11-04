import React from 'react'

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

export { MultiComponentesComDiv, MultiComponentesComFragment, MultiComponentesComJSX }