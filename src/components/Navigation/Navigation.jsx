import Logo from '../Logo/Logo'
import './Navigation.css'
import Menu from '../Menu/Menu'

const Navigation = () => {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <div className="nav-options">
          <a href='#'>Menu</a>
        </div>
      </nav>
      <Menu></Menu>
    </>

    
  )
}

export default Navigation;