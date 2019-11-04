import ReactDom from 'react-dom'
import React from 'react'
import PrimeiroComponente from './components/PrimeiroComponente'
import { ComponenteA as A, ComponenteB as B } from './components/DoisComponentes'
import { MultiComponentesComDiv, MultiComponentesComFragment, MultiComponentesComJSX } from './components/MultiplosComponentes'
const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <PrimeiroComponente value='Bom dia!' />
        <A value='Oi, sou A' />
        <B value='Oi, aqui é B' />

        <MultiComponentesComDiv />
        <MultiComponentesComFragment />
        <MultiComponentesComJSX />
    </div>
    , elemento)