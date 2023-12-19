const CelsiusToFaren = (props) => {
    const result = props.degrees * 1.8 + 32;
    return <h2>{props.degrees} grados Celsius son {result} grados Fahrenheit</h2>
}

export default CelsiusToFaren;