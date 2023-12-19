const WriteMessage = (props) => {
    const name = props.name;
    const material = props.material;
    const size = props.size;
    const note = props.note;
    return <h2>{name} ha pedido una caja de {material} de {size} mm. {note}</h2>
}

export default WriteMessage;