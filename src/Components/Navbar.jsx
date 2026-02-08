import { logo } from '../assets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping ,faOutdent,faXmark} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router";
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <section id="header">
        <a href="#"> <img src={logo} alt=""/> </a>
        
        <div>
            <ul id="navBar" className={isOpen ? 'active' : ''} >
              <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
              <li><NavLink to="/shop" className={({isActive}) => isActive ? "active" : ""}>Shop</NavLink></li>
              <li><NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>Blog</NavLink></li>
              <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
              <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
             <li>
               <NavLink
                 id="lg_bag"
                 to="/cart"
                 className={({ isActive }) => (isActive ? "active" : "")}
               >
                 <FontAwesomeIcon icon={faCartShopping} />
               </NavLink>
             </li>
             <a href="#" id="close"><FontAwesomeIcon  onClick={() => setIsOpen(false)} icon={faXmark} /></a>
            </ul>
            
        </div>
        <div id="mobil">
               <NavLink
                 id="bar"
                 to="/cart"
                 className={({ isActive }) => (isActive ? "active" : "")}
               >
                 <FontAwesomeIcon icon={faCartShopping} />
               </NavLink>
                <FontAwesomeIcon
                id="bar"
                icon={faOutdent}
                className="hvr-icon"
                onClick={() => setIsOpen(true)}
              />

        </div>
    </section>
    </>
  )
}

export default Navbar
