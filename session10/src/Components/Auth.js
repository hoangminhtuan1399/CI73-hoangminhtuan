import { NavLink, Outlet } from "react-router-dom";

const Auth = () => {
    const activeLink = (params) => {
        return params.isActive ? "active_link" : "link";
    }
    return (
        <div className="auth__container">
            <h1>Đăng nhập / Đăng ký</h1>
            <hr />
            <div className="auth__wrapper">
                <ul className="auth__linkList">
                    <li><NavLink className={activeLink} to='login'>Đăng nhập</NavLink></li>
                    <li><NavLink className={activeLink} to='register'>Đăng ký</NavLink></li>
                </ul>
                <Outlet />
            </div>
        </div>
    )
}

export default Auth;