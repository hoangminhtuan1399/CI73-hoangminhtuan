import './style.css';
import { RadiusBorder } from '../RadiusBorder';
import { YearFilter } from '../YearFilter';
import { ChartContainer } from '../ChartContainer';
import { ExpenseList} from '../ExpenseList';
import { useState } from 'react';

export const Main = ({expenseList}) => {
    const [expenseListFilter, setExpenseListFilter] = useState(
        expenseList.filter((item) => {
            return item.time.getFullYear() == expenseList[0].time.getFullYear();
        })
    )
    
    const listFilter = (expenseList, filter) => {
        setExpenseListFilter(() => {
            return expenseList.filter((item) => {
                return item.time.getFullYear() == filter;
            })
        })
    }
    return (
        <div id="main">
            <YearFilter expenseList={expenseList} expenseListFilter={expenseListFilter} listFilter={listFilter}/>
            <RadiusBorder border_color="transparent">
                <ChartContainer />
            </RadiusBorder>
            <RadiusBorder border_color="transparent">
                <ExpenseList expenseList={expenseList} expenseListFilter={expenseListFilter} />
            </RadiusBorder>
        </div>
    )
}