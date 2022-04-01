import './style.css';

export const ExpenseItem = (props) => {
    return (
        <div className="expense__item">
            <div className="expense__item-label">
                <div className="expense__item-time">
                    <span className="expense__item-month">{props.month}</span>
                    <span className="expense__item-year">{props.year}</span>
                    <span className="expense__item-day">{props.day}</span>
                </div>
                <div className="expense__item-name">
                    <span>{props.name}</span>
                </div>
            </div>
            <div className="expense__item-amount">
                <span>$ {props.amount}</span>
            </div>
        </div>
    )
}