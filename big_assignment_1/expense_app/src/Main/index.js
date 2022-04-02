import './style.css';
import { RadiusBorder } from '../RadiusBorder';
import { YearFilter } from '../YearFilter';
import { ChartContainer } from '../ChartContainer';
import { ExpenseList} from '../ExpenseList';

export const Main = ({expenseList}) => {
    return (
        <div id="main">
            <YearFilter value={2022} expenseList={expenseList} />
            <RadiusBorder border_color="transparent">
                <ChartContainer />
            </RadiusBorder>
            <RadiusBorder border_color="transparent">
                <ExpenseList />
            </RadiusBorder>
        </div>
    )
}