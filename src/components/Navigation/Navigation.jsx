import Logo from '../Logo/Logo'
import './Navigation.css'
import Menu from '../Menu/Menu'
import { useState } from 'react'

const Navigation = () => {
  const [menuVisbility, setMenuVisibility] = useState(false);

  const handleClick = () => {
    setMenuVisibility(!menuVisbility);
  }
  

  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <div className="nav-options">
          <a href='#' onClick={handleClick}>Menu</a>
        </div>
      </nav>
      {
        menuVisbility ? <Menu /> : null
      }
    </>

    
  )
}

export default Navigation;