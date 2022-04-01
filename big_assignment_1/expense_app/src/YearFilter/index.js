import './style.css';
import { RadiusBorder } from '../RadiusBorder';


export const YearFilter = (props) => {
    return (
        <div className="filter__container">
            <span className="filter__by">Filter by year</span>
            <select className="filter__select-list">
                <option className="filter__select-item" value={props.value}>{props.value}</option>
                <option className="filter__select-item" value={props.value}>{props.value}</option>
            </select>
        </div>
    )
}