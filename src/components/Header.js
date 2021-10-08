import React, { useState } from "react"
import { Link } from 'gatsby'
// import { ToggleLayer, Arrow, Transition } from "react-laag"
import { Menu, X } from 'react-feather'
import Logo from '../../static/assets/logo.png'
import './Header.scss'

const Header = () => {
  // const [isOpenArrow, setIsOpenArrow] = useState(false);
  // const [isOpenArrowTwo, setIsOpenArrowTwo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper container';

  return (
    <header
      className="header-blog"
    >
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to={"/"}>
              <img src={Logo} alt="logo blog" />
            </Link>
          </div>
        </div>
        <div className="header-right-desk">
          <Link to={"/about"}>Quem somos</Link>
          <Link to={"/trabalhos"}>Trabalhos</Link>
          <Link to={"/clientes"}>Nossos clientes</Link>
          <Link to={"/cinemaetv"}>Cinema e TV</Link>
          <Link to={"/contato"}>Contato</Link>
        </div>
        <div className="header-right-mob">
          <Link to={"/about"}>Quem somos</Link>
          <Link to={"/trabalhos"}>Trabalhos</Link>
          <Link to={"/clientes"}>Nossos clientes</Link>
          <Link to={"/cinemaetv"}>Cinema e TV</Link>
          <Link to={"/contato"}>Contato</Link>
        </div>
        <button
          className="button-blank menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            <X
              color={"#0d518c"}
              className="x"
            />
              :
            <Menu
              color={"#0d518c"}
              className="menu"
            />}
        </button>
      </div>
    </header>
  )
}

export default Header
