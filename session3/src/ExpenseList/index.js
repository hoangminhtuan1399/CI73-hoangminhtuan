import './style.css';
import { RadiusBorder } from '../RadiusBorder';
import { ExpenseItem } from '../ExpenseItem';

export const ExpenseList = () => {
    return (
        <div className="expense__list">
            <RadiusBorder border_color="transparent">
                <ExpenseItem day={16} month="January" year={2022} name="Some Book" amount={50} />
            </RadiusBorder>
            <RadiusBorder border_color="transparent">
                <ExpenseItem day={22} month="October" year={2022} name="Electricity Bill" amount={75} />
            </RadiusBorder>
            <RadiusBorder border_color="transparent">
                <ExpenseItem day={8} month="May" year={2022} name="New Bike" amount={100} />
            </RadiusBorder>
        </div>
    )
}