import { useState } from 'react';
import {NavContainer, BgDiv, Burguer}  from './styles';
import Logo from '/images/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //Cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <div>
       <NavContainer>
       <h2><img width={80} src={Logo}></img></h2>
        <div className={`links-left ${clicked ? 'active' : ''}`}>
          <NavLink to="/home">Inicio</NavLink>
          <a onClick={handleClick} href="#h">Categorias</a>
          <a onClick={handleClick} href="#h">Productos</a>
          <a onClick={handleClick} href="#h">Shop</a>
        </div>
        <div className={`links-right ${clicked ? 'active' : ''}`}>
          <NavLink to="/sign-up"><a >Registro</a></NavLink>
          <NavLink to="/login"><a >Inicio Sesion</a></NavLink>
        </div>
        <div className='burguer'>
        <Burguer>
      <div onClick={handleClick} 
            className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
       </NavContainer>
    </div>
  )
}

export { Navbar }