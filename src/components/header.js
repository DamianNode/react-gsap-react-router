import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" exact activeStyle={{fontWeight: 700, color: "#1985A1"}}>
                Home
            </NavLink>
            <NavLink to="/about" exact activeStyle={{fontWeight: 700, color: "#1985A1"}}>
                About
            </NavLink>
        </div>
    )
}

export default Header;