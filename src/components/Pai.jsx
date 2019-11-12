import React from 'react'
import Filho from './Filho'

export default props => {
  const notificarSaidaParaFilho = lugar => {
    alert(`Liberado para ir ao ${lugar}`)
  }
  return (
    <div>
      <Filho notificarSaida={notificarSaidaParaFilho} />
    </div>
  )
}
