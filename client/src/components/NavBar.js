import React, { useContext } from "react";
import { Context } from "..";
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import { NavLink} from "react-router-dom"
import { SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite"



const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <NavLink to={SHOP_ROUTE} style={{color: "white"}}>Shop Me</NavLink>
          {user.isAuth ?
            <Nav className="ms-auto" style={{color: "white"}}>
                <Button variant={"outline-light"}>Admin</Button>
                <Button variant={"outline-light"}>Login</Button>
          </Nav>
          :
          <Nav className="ms-auto" style={{color: "white"}}>
            <Button variant={"outline-light"}>Auth</Button>
          </Nav>
}
      </Navbar>
    )
})

export default NavBar