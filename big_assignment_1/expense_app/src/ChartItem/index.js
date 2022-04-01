import './style.css';

export const ChartItem = (props) => {
    return (
        <div className="chart__item">
            <div className="chart__value">
            </div>
            <div className="chart__label">
                <span>{props.label}</span>
            </div>
        </div>
    )
}