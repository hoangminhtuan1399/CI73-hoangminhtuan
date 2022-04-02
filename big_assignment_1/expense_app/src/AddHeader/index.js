import './style.css';
import { InputContainer } from '../InputContainer';

export const AddHeader = ({handleOpenInput, expenseList, addExpenseList}) => {
    return (
        <div id="header__add">
                <InputContainer handleOpenInput={handleOpenInput} expenseList={expenseList} addExpenseList={addExpenseList}/>
        </div>
    )
}