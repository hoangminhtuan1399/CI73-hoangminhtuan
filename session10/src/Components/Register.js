import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
    const registerNavigate = useNavigate();
    const [formValue, setFormValue] = useState(
        {
            username: '',
            password: '',
        },
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValue({
            username: '',
            password: '',
        })
        alert('Đăng ký thành công!');
        registerNavigate("/auth/login");
    }
    const handleChange = (e) => {
        setFormValue(
            {
                ...formValue,
                [e.target.id]: e.target.value
            }
        )
    }
    return (
        <div className="login">
        <form onSubmit={handleSubmit}>
            <div className="input__header">Đăng Ký</div>
            <div className="input__container">
               <label htmlFor="username" className="label">Tên đăng ký </label>
               <input onChange={handleChange} value={formValue.username} id="username" className="input" type="text" required />
            </div>
            <div className="input__container">
               <label htmlFor="password" className="label">Mật khẩu </label>
               <input onChange={handleChange} value={formValue.password} id="password" className="input" type="password"  required />
            </div>
            <div style={{justifyContent: 'space-around'}} className="input__container">
                <button type="submit">Đăng ký</button>
                <span><NavLink to='/auth/login'>Đã có tài khoản? Đăng nhập</NavLink></span>
            </div>                           
        </form>
    </div>
    )
}

export default Register;