import { Col, Row } from "react-bootstrap";
import items from "../data/items.json"
import StoreItem from "../components/StoreItem";

function Store() {
    return (
        <>
        <Row md={2} xs={1} className="g-3">
            {items.map((item) => ( 
            <Col key={item.id}>
                <StoreItem id={item.id} imgUrl={item.imgUrl} name={item.name} price={item.price}/>
            </Col>
            ))}
        </Row>
        </>
    )
}

export default Store;