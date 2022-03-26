import './style.css';
import { RadiusBorder } from '../RadiusBorder';
import { FilterContainer, YearFilter } from '../YearFilter';
import { ChartContainer } from '../ChartContainer';
import { ExpenseList} from '../ExpenseList';

export const Main = () => {
    return (
        <div id="main">
            <FilterContainer value={2022} />
            <RadiusBorder border_color="transparent">
                <ChartContainer />
            </RadiusBorder>
            <RadiusBorder border_color="transparent">
                <ExpenseList />
            </RadiusBorder>
        </div>
    )
}