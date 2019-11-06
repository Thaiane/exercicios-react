import ReactDom from 'react-dom'
import React from 'react'
import Familia from './components/Familia'
import Membro from './components/Membro'


const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <Familia sobrenome='Braga'>
            <Membro nome='Thai' />
            <Membro nome='Tom' />
        </Familia>
        <Familia sobrenome='Medeiros'>
            <Membro nome='Bia' />
            <Membro nome='Mauricio' />
        </Familia>
    </div>
    , elemento)