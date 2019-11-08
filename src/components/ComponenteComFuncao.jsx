import React from 'react'

const aprovados = ['Thai', 'Tom', 'Dani', 'Ruan']

export default props => {
  const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>)
  }

  return (
    <ul>
      {gerarItens(aprovados)}
    </ul>
  )
}