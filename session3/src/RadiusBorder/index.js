export const RadiusBorder = (props) => {
    const borderColor = {
        borderRadius: "10px",
        border: `1px solid ${props.border_color}`,
        overflow: "hidden",
    }
    return (
        <div className="radius__border" style={borderColor}>
            {props.children}
        </div>
    )
}