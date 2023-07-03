import { useContext } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "../contextApi/Store";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbars = ({ brandName }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="bg-info">
        <LinkContainer to="/">
          <Navbar.Brand>
            <strong> {brandName}</strong>
          </Navbar.Brand>
        </LinkContainer>
        <Link to="/About">About</Link>

        <Nav>
          <Link to="/cart" className="nav-link">
            <FaShoppingCart className="text-warning" />
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
