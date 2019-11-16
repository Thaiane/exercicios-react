import ReactDom from 'react-dom'
import React from 'react'
import ComponenteClasse from './components/ComponenteClasse'


const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <ComponenteClasse msg="Oi" />
    </div>
    , elemento)