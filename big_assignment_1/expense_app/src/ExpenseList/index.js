import './style.css';
import { ExpenseItem } from '../ExpenseItem';

export const ExpenseList = ({expenseList, expenseListFilter}) => {
    const createId = () => Math.floor(Math.random()*10000);
    const expenseLi = [];
    expenseListFilter.forEach((item) => {
        expenseLi.push(
            <div className='expenseItem__wrapper' key={createId()}>
                <ExpenseItem day={item.time.getDate()} month={item.time.toLocaleString('en-us', {month: 'short'})} year={item.time.getFullYear()} name={item.name} amount={item.money} />
            </div>           
        )
    });
    return (
        <div className="expense__list">
            {expenseLi}
        </div>
    )
}