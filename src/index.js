import ReactDom from 'react-dom'
import React from 'react'
import Calculadora from './components/Calculadora'


const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <Calculadora numero={0} />
    </div>
    , elemento)