import './style.css';

export const Button = (props) => {
    const buttonColor = {
        backgroundColor: `${props.bg_color}`,
        color: `${props.text_color}`,
    }
    return (
        <button onClick={props.handleClick} className="button" style={buttonColor} id={props.id}> 
            <span>{props.content}</span>
        </button>
    )
}