import Button from 'react-bootstrap/Button';

function CarWidget( props ){
    return <div>
        <Button type="button"> <img src={props.imagen} alt = "" height ="30" width="30" /></Button>
    </div>;

}


export default CarWidget;