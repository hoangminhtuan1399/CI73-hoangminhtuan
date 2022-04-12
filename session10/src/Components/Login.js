import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
const Login = () => {
    const loginNavigate = useNavigate();
    const userData = useContext(UserContext);
    const [formValue, setFormValue] = useState(
        {
            username: '',
            password: '',
        },
    )
    const handleChange = (e) => {
        setFormValue(
            {
                ...formValue,
                [e.target.id]: e.target.value
            }
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        userData.setUserData(
            {
                username: e.target[0].value,
                password: e.target[1].value,
                isLogIn: true,
            }
        );
        setFormValue(
            {
                username: '',
                password: '',
            }
        );
        loginNavigate("/");
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <div className="input__header">Đăng Nhập</div>
                <div className="input__container">
                   <label htmlFor="username" className="label">Tên đăng nhập </label>
                   <input onChange={handleChange} id="username" className="input" type="text" value={formValue.username} required />
                </div>
                <div className="input__container">
                   <label htmlFor="password" className="label">Mật khẩu </label>
                   <input onChange={handleChange} id="password" className="input" type="password" value={formValue.password}  required />
                </div>
                <div style={{justifyContent: 'space-around'}} className="input__container">
                    <button type="submit">Đăng nhập</button>
                    <span><NavLink to='/auth/register'>Chưa có tài khoản? Đăng ký</NavLink></span>
                </div>                           
            </form>
        </div>
    )
}

export default Login;