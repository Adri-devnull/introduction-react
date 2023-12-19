const TotalPrice = (props) => {
    const price = props.price;
    const iva = price * 21 / 100;
    return <h2>El precio total es: {price + iva}</h2>
}

export default TotalPrice;