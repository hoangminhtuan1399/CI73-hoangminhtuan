import './style.css';
import { ChartItem } from '../ChartItem';

export const ChartContainer = () => {
    return (
        <div className="chart__container">
            <ChartItem label="Jan" />
            <ChartItem label="Feb" />
            <ChartItem label="Mar" />
            <ChartItem label="Apr" />
            <ChartItem label="May" />
            <ChartItem label="Jun" />
            <ChartItem label="Jul" />
            <ChartItem label="Aug" />
            <ChartItem label="Sep" />
            <ChartItem label="Oct" />
            <ChartItem label="Nov" />
            <ChartItem label="Dec" />
        </div>
    )
}