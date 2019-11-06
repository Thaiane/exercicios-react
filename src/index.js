import ReactDom from 'react-dom'
import React from 'react'
import Familia from './components/Familia'
import Membro from './components/Membro'


const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <Familia />
    </div>
    , elemento)