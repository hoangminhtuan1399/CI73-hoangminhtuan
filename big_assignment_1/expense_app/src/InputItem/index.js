import './style.css';
import { RadiusBorder } from '../RadiusBorder';

export const InputItem = (props) => {
    return (
        <div className="input__item">
            <div className="label">
                <label for={props.label} id={props.label}>
                    {props.label}
                </label>
            </div>
                <div className="input">
                    <input type={props.type} id={props.label} placeholder={props.placeholder} required/>
                </div>
        </div>
    )
}