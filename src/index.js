import ReactDom from 'react-dom'
import React from 'react'
import Pai from './components/Pai'


const elemento = document.getElementById('root')

ReactDom.render(
    <div>
        <Pai />
    </div>
    , elemento)