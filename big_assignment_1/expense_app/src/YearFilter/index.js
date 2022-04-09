import { useState } from 'react';
import './style.css';

export const YearFilter = ({expenseList, yearList, listFilter}) => {
    const createId = () => { return Math.floor(Math.random()*100000) };
    const yearOption = [];
    
    const [selectValue, setSelectValue] = useState(yearList[0])
    
    const handleChange = (e) => {
        setSelectValue(e.target.value);
        listFilter(expenseList, e.target.value);
    }

    yearList.forEach((item) => {
        yearOption.push(
            <option key={createId()} className='filter__select-item'>{item}</option>
        )
    })
    
    return (
        <div className="filter__container">
            <span className="filter__by">Filter by year</span>
            <select onChange={handleChange} value={selectValue} className="filter__select-list">
                {yearOption}
            </select>
        </div>
    )
}