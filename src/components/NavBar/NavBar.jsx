import { NavLink } from "react-router-dom";
import './NavBar.css';
import Logo from "../Logo";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="container">
        <NavLink to='/' className="nav-btn">Home</NavLink>
        <NavLink to='/contact' className="nav-btn">Contact</NavLink>
        <NavLink to='/product' className="nav-btn">Products</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;