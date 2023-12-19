const FarenToCelsius = (props) => {
    const result = props.degrees - 32 / 1.8;
    return <h2>{props.degrees} grados Faren son {result}</h2>
}

export default FarenToCelsius;