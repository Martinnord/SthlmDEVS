import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import '../index.css'

// TODO: Make this a functional component

const Navbar = () => {
  return (
    <div className="navbar">
      <a id="menu-title">STHMLdevs</a>
      <a className="menu-item" href="#">
        OM OSS
      </a>
      <a className="menu-item" href="#">
        PROJEKT
      </a>
      <a className="menu-item" href="#">
        KONTAKT
      </a>
    </div>
  )
}

export default Navbar
