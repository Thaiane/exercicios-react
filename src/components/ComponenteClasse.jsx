import React, { Component } from 'react'

export default class ComponenteClasse extends Component {

  render() {
    return (<div>
      {this.props.msg || "Olá Mundo!"}
    </div>
    )
  }
}