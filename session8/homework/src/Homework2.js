import { useEffect, useState } from "react"

export const Homework_2 = () => {
    const inputStyle = {
        padding: '10px 10px 0px 10px',
        borderRadius: '5px',
        border: '1px solid black',
        width: '100%',
    }
    const divStyle = {
        width: '50%',
        margin: '0 auto',
    }
    const[inputValue, setInputValue] = useState('');
    const[count, setCount] = useState(0);
    var handleChange = (e) => {
        setInputValue(e.target.value);
        setCount(inputValue.trim().split(' ').length);
    }
    // useEffect(() => {
    //     console.log('abc');
    // })
    return (
        <div style={divStyle}>
            <textarea className="textarea" style={inputStyle} onChange={handleChange} placeholder="Enter some text" />
            <span>Word(s): {count}</span>
        </div>
    )
}