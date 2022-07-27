const estilos = {
  borderWidth: "10px",
  borderColor: "#000000",
  borderStyle: "dashed solid",
  padding: "40px",
  margin: "40px",
  fontSize: "3rem",
};

function ItemListContainer(props) {
  return (
    <div>
      <div style={estilos}>{props.text1}</div>
      <div style={estilos}>{props.text2}</div>
      <div style={estilos}>{props.text3}</div>
    </div>
  );
}

export default ItemListContainer;
