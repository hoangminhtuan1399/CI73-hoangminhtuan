import './style.css';
import { InputItem } from '../InputItem';
import { ButtonContainer } from '../ButtonContainer';
import { useState } from 'react';

export const InputContainer = ({handleOpenInput, expenseList, addExpenseList}) => {
    const [formValue, setFormValue] = useState(
        {
            name: '',
            money: 0,
            time: '',
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        addExpenseList(e.target[0].value, e.target[1].value, new Date(e.target[2].value));
        // console.log(expenseList);
        // console.log(typeof(new Date((e.target[2].value))));
    }
    const handleChange = (e) => {
        setFormValue((prev) => {
            return {
                ...prev,
                [e.target.id]: e.target.value,
            }
        }
    )}
    return (
        <div className="input__container">
            <form onSubmit={handleSubmit} action="#">
                <InputItem label="Name" id="name" type="text" placeholder="Enter your name here..." value={formValue.name} handleChange={handleChange}/>
                <InputItem label="Money" id="money" type="number" placeholder="Enter Money here..." value={formValue.money} handleChange={handleChange}/>
                <InputItem label="Time" id="time" type="date" placeholder="" value={formValue.time} handleChange={handleChange}/>
                <ButtonContainer handleOpenInput={handleOpenInput}/>
            </form>
        </div>
    )
}
