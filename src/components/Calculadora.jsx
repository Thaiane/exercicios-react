import React, { Component } from 'react'

export default class Calculadora extends Component {
  state = {
    numero: 0
  }

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 })
  }

  menosUm = () => {
    this.setState({ numero: this.state.numero - 1 })
  }
  render() {
    return (
      <div>
        <text>Número: {this.state.numero}</text>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
      </div>
    )
  }
}