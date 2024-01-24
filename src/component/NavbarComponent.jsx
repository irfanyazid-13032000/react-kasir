import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }
  
  
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/cashier">Kasir Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link onClick={logout}>logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;