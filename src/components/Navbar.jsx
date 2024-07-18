import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
    <header className="header">
        <nav className="nav__container">
        <NavLink to="/" className="nav__logo">
        AMBA
       </NavLink>
       <div
         className={"nav__menu"}
         id="nav-menu"
        >
            <ul className="nav__list">
            <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/about" className="nav__link">
               About
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/press" className="nav__link">
               Press
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/contact" className="nav__link">
               Contact
             </NavLink>
           </li>
            </ul>
        </div>
        <div className="sidebar">
          <p>Join our community</p>
        </div>
        </nav>
        
    </header>
    );
    };
    
    export default Navbar;