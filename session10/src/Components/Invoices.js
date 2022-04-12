import { NavLink, Outlet } from "react-router-dom";

const Invoices = () => {
    const activeLink = (params) => {
        return params.isActive ? "active_link" : "link";
    }
    return (
        <div className="products">
            <h2>Invoices</h2>
            <ul className="auth__linkList">
                <li><NavLink className={activeLink} to='inv1'>Invoice 1</NavLink></li>
                <li><NavLink className={activeLink} to='inv2'>Invoice 2</NavLink></li>
                <li><NavLink className={activeLink} to='inv3'>Invoice 3</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Invoices;