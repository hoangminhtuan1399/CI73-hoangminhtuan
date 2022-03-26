import './style.css';
import { InputItem } from '../InputItem';
import { ButtonContainer } from '../ButtonContainer';
import { RadiusBorder } from '../RadiusBorder';

export const InputContainer = () => {
    return (
        <div className="input__container">
            <form action="#">
                <InputItem label="Name" type="text" placeholder="Enter your name here..." />
                <InputItem label="Amount" type="number" placeholder="Enter amount here..." />
                <InputItem label="Date" type="date" placeholder="dd/mm/yyyy" />
                <ButtonContainer />
            </form>
        </div>
    )
}
