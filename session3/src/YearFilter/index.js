import './style.css';
import { RadiusBorder } from '../RadiusBorder';

export const FilterContainer = (props) => {
    return (
        <div className="filter__container">
            <span className="filter__by">Filter by year</span>
            <RadiusBorder border_color="transparent">
                <select className="filter__select">
                    <option className="filter__select-item" value={props.value}>{props.value}</option>
                </select>
            </RadiusBorder>
        </div>
    )
}