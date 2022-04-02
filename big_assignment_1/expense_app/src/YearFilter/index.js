import './style.css';

export const YearFilter = ({expenseList}) => {
    const createId = () => { return Math.floor(Math.random()*100000) };
    const yearList = [];
    const yearOption = [];

    expenseList.forEach((item) => {
        yearList.push(item.time.getFullYear());
    })

    yearList.sort((a, b) => {return a-b})

    yearList.forEach((item) => {
        yearOption.push(
            <option key={createId()} className='filter__select-item'>{item}</option>
        )
    })

    // console.log(yearOption)
    
    return (
        <div className="filter__container">
            <span className="filter__by">Filter by year</span>
            <select className="filter__select-list">
                {yearOption}
            </select>
        </div>
    )
}