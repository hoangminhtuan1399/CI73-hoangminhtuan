import './style.css';
import { RadiusBorder } from '../RadiusBorder';
import { YearFilter } from '../YearFilter';
import { ChartContainer } from '../ChartContainer';
import { ExpenseList} from '../ExpenseList';
import { useState } from 'react';

export const Main = ({expenseList}) => {
    console.log(expenseList);
    const yearList = [];
        
    for (let i = 0; i < expenseList.length; i ++) {
        if (!yearList.includes(parseInt(expenseList[i].time.getFullYear()))) {
            yearList.push(parseInt(expenseList[i].time.getFullYear()));
        }
    }
    
    yearList.sort((a, b) => {return a-b})

    const [expenseListFilter, setExpenseListFilter] = useState(
        expenseList.filter((item) => {
            return item.time.getFullYear() === yearList[0];
        })
    )
    
    const listFilter = (expenseList, filter) => {
        setExpenseListFilter(() => {
            return expenseList.filter((item) => {
                return item.time.getFullYear() === parseInt(filter);
            })
        })
    }

    return (
        <div id="main">
            <YearFilter expenseList={expenseList} yearList={yearList} listFilter={listFilter}/>
            <RadiusBorder border_color="transparent">
                <ChartContainer />
            </RadiusBorder>
            <RadiusBorder border_color="transparent">
                <ExpenseList expenseList={expenseList} expenseListFilter={expenseListFilter} />
            </RadiusBorder>
        </div>
    )
}