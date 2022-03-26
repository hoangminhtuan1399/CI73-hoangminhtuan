import './style.css';
import { Button } from '../Button';
import { RadiusBorder } from '../RadiusBorder';

export const ButtonContainer = () => {
    return (
        <div className="button__container">
            <Button bg_color="#6d217a" text_color="white" content="ADD" type="submit" id="btn__add"/> 
            <Button bg_color="#d0d0d0" text_color="#7c7c7c" content="CANCEL" id="btn__cancel"/>
        </div>
    )
}