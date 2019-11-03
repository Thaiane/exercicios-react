import ReactDom from 'react-dom'
import React from 'react'
import PrimeiroComponente from './components/PrimeiroComponente'

const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <PrimeiroComponente />
    </div>
    , elemento)