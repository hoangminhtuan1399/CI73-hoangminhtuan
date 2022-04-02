import './style.css';

export const InputItem = ({label, id, type, placeholder, value, handleChange}) => {
    return (
        <div className="input__item">
            <div className="label">
                <label htmlFor={id} id={label}>
                    {label}
                </label>
            </div>
                <div className="input">
                    <input onChange={handleChange} type={type} id={id} placeholder={placeholder} value={value} required/>
                </div>
        </div>
    )
}