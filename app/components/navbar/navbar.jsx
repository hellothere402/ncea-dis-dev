import React,{useState} from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import './navbar.css'
import {Screen_Shot_2023} from './import';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wr">Physical</a></p>
  <p><a href="#recyclingpos">Auditory</a></p>
  <p><a href="#features">Speech</a></p>
  </>
)


// BEM - Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="recycling__navbar">
      <div className="recycling__navbar-links">
        <div className="recycling__navbar-links_logo">
          <img src={Screen_Shot_2023} alt='logo' />
          </div>
        <div className="recycling__navbar-links_container">
          <Menu />
         </div>
       </div>
      <div className="recycling__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
        </div>
      <div className="recycling__navbar-menu">
       { toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className="recycling__navbar-menu_container scale-up-center">
            <div className="recycling__navbar-menu_container-links">
              <Menu />
            </div>
              <div className="recycling__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div> 
        )}
        </div>
    </div>  
  )
}

export default Navbar