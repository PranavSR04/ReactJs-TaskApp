import React, { useContext, useState } from 'react'
import { Button, Dropdown, Nav, NavItem, NavbarBrand } from 'react-bootstrap'
import styles from './NavBar.module.css'
import {Theme} from '../ThemeContext/ThemeContext'
import { Auth } from '../AuthContext/AuthContext'

const NavBar = () => {
const {mail,logout}= useContext(Auth)
const {theme,changeTheme}=useContext(Theme);
  return (
    <div >
    <Nav className={`${styles.nav} ${styles.light} ${theme?`${styles.light}`:`${styles.dark}`}`}>
    <NavbarBrand>ToDo List</NavbarBrand>
    <NavItem>{mail}</NavItem>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
        <Button className={styles.btn}  onClick={changeTheme}>Change Theme</Button>
        </Dropdown.Item>
        <Dropdown.Item>
        <Button className={styles.btn}  onClick={logout}>Logout</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
    </Nav>
   
    </div>
  )
}

export default NavBar
