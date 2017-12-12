import React, { Component } from 'react'
import BurgerMenu from './burgermenu'
import '../index.css'

// TODO: Make this a functional component

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responsive: false
    }
  }

  handleBurger() {
    this.setState({
      responsive: !this.state.responsive
    })
  }
  render() {
    return (
      <div>
        <ul
          className={`navbar-items ${this.state.responsive
            ? 'responsive'
            : ''}`}
        >
          <li className="menu-item">
            <a>SthlmDEVS</a>
          </li>
          <li className="menu-item">
            <a href="#">OM OSS</a>
          </li>
          <li className="menu-item">
            <a href="#">PROJEKT</a>
          </li>
          <li className="menu-item">
            <a href="#">KONTAKT</a>
          </li>
          <a className="burger-icon" onClick={() => this.handleBurger()}>
            hej
          </a>
        </ul>
      </div>
    )
  }
}
