import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
    return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            </Nav>
            <Button style={{position: "relative", cursor: "pointer", width: "4rem", height: "4rem"}} className="rounded-circle" variant="outline-primary">
                <FaShoppingCart style={{fontSize: "1.25rem"}}/>
                <div 
                    className="rounded-circle d-flex justify-content-center align-items-center bg-danger text-white p-3"
                    style={{position: "absolute", bottom: 0, right: 0, width: "1.25rem", height: "1.25rem", transform: "translate(25%, 25%)"}}
                >
                    10
                </div>
            </Button>
        </Container>
    </Navbar>
    )
}

export default NavBar;