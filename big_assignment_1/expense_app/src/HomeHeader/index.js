import './style.css';
import { RadiusBorder } from '../RadiusBorder';
import { Button } from '../Button';
export const HomeHeader = ({isShown, handleOpenInput}) => {
    return (
        <RadiusBorder border_color="transparent">
            <div id="header__home">
                <Button handleClick={handleOpenInput} bg_color="#6d217a" text_color="white" content="ADD NEW EXPENSE" id="btn__openInput"></Button> 
            </div>
        </RadiusBorder>
    )
}