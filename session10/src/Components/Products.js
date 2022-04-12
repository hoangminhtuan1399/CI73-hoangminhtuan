import { NavLink, Outlet } from "react-router-dom";
const Products = () => {
    const activeLink = (params) => {
        return params.isActive ? "active_link" : "link" ;
    }
    return (
        <div className="products">
            <h2>Product</h2>
            <ul className="auth__linkList">
                <li><NavLink className={activeLink} to='prod1'>Product 1</NavLink></li>
                <li><NavLink className={activeLink} to='prod2'>Product 2</NavLink></li>
                <li><NavLink className={activeLink} to='prod3'>Product 3</NavLink></li>             
            </ul>
            <Outlet />
        </div>
    )
}

export default Products;