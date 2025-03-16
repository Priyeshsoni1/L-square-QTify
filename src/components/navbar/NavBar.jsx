import React from 'react'
import Search from '../search/Search'
import Button from '../button/Button'
import "./navbar.css"
import Logo from '../logo/Logo'
const NavBar = () => {
  return (
    <>
      <nav>
        <Logo/>
        <Search placeHolder={"Search a song of your choice"}/>
        <Button children={"Give Feedback"}/>
      </nav>
    </>
  )
}

export default NavBar