import React from 'react'

export default props =>
  <div>
    <button
      onClick={() => props.notificarSaida('Shopping')}>
      Vou sair
    </button>
  </div>