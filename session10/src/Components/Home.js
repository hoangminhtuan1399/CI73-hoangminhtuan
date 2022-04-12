import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
const Home = () => {
    const userData = useContext(UserContext);
    let userName = userData.isLogIn ? userData.username : 'khách';
    const homeNavigate = useNavigate();
    const handleLogIn = () => {
        homeNavigate("/auth");
    }
    const handleLogOut = () => {
        userData.setUserData({
            username: '',
            password: '',
            isLogIn: false,
        })
        homeNavigate("/auth");
    }
    const activeLink = (params) => {
        return params.isActive ? "active_link" : "link" ;
    }
    return (
        <div>
            <h1>Welcome {userName}</h1>
            {userData.isLogIn && <button onClick={handleLogOut}>Log Out</button> }
            <hr/>
            <br />
            {userData.isLogIn ? 
            <nav>
                <ul className="auth__linkList">
                    <li><NavLink className={activeLink} to='products'>Products</NavLink></li>
                    <li><NavLink className={activeLink} to='invoices'>Invoices</NavLink></li>
                    <li><NavLink className={activeLink} to='cart'>Cart</NavLink></li>
                    <li><NavLink className={activeLink} to='profile'>Profile</NavLink></li>
                    <li><NavLink className={activeLink} to='about'>About</NavLink></li>
                </ul>
                <Outlet />
            </nav> :
            <button onClick={handleLogIn}>Login / Register</button>}
        </div>
    )
}

export default Home;