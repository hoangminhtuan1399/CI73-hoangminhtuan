import './style.css';
import '../InputItem/style.css';
import { InputItem } from '../InputItem';
import { ButtonContainer } from '../ButtonContainer';
import { useState } from 'react';
import data from '../Context/DataContext';
import { useContext } from 'react';

export const InputContainer = ({handleOpenInput}) => {
    const Data = useContext(data);
    // console.log(Data);
    const [formValue, setFormValue] = useState(
        {
            name: '',
            money: 0,
            time: '',
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValue(
            {
                name: '',
                money: 0,
                time: '',
            }
        );
        Data.setExpenseList(
            [
                ...Data.expenseList,
                {
                    name: e.target[0].value,
                    money: parseFloat(e.target[1].value),
                    time: new Date(e.target[2].value),
                }
            ]
        )
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
                <div className="input__item">
                    <div className="label">
                        <label htmlFor="time" id="Time">
                            Time
                        </label>
                    </div>
                    <div className="input">
                        <input onChange={handleChange} type='date' id='time' placeholder='' value={formValue.time} min='2010-01-01' max='2030-12-31' required/>
                    </div>
                </div>
                <ButtonContainer handleOpenInput={handleOpenInput}/>
            </form>
        </div>
    )
}
