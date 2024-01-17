import { Button, Card } from "react-bootstrap";

type StoreItemProps = {
    id: number, 
    name: string,
    price: number,
    imgUrl: string
}

const quantity = 0;

function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" height="250px" src={imgUrl} style={{objectFit: "cover"}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">${price}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (<Button className="w-100">+ Add To Cart</Button>) : null}
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem; 