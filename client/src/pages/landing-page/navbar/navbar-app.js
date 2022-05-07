import React, {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {IconContext} from "react-icons";
import {MobileIcon, NavApp, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu} from "./navbar.style";
import {FaTimes} from "react-icons/fa";
import {CgMenuRight} from "react-icons/cg";
import {data} from "../../../data/navbar-data";


const NavbarApp = () => {
const [show, setShow] = useState(false)

let history = useHistory()
let location = useLocation()

const handleClick = () => {
    setShow(!show)
}

const scrollTo = (id) => {
    const element = document.getElementById(id)

    element.scrollIntoView({
        behavior: 'smooth',
    })
}

const closeMobileMenu = (to, id) => {
    if (id && location.pathname === '/') {
        scrollTo(id)
    }

    history.push(to)
    setShow(false)
}

return (
    <IconContext.Provider value={{ color: 'black' }}>
        <NavApp>
            <NavbarContainer>
                <NavLogo to="/">
                    emotional
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {show ? <FaTimes /> : <CgMenuRight />}
                </MobileIcon>
                <NavMenu show={show}>
                    {data.map((el, index) => (
                        <NavItem key={index}>
                            <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                                {el.text}
                            </NavLinks>
                        </NavItem>
                    ))}
                </NavMenu>
            </NavbarContainer>
        </NavApp>
    </IconContext.Provider>
)
}

export default NavbarApp
