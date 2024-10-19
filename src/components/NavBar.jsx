import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    return (
        <Navbar bg="light" expand="lg" sticky="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">My Maps</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active={location.pathname === '/'}>
                            World
                        </Nav.Link>
                        <Nav.Link href="/cn" active={location.pathname === '/cn'}>
                            China
                        </Nav.Link>
                        <Nav.Link href="/us" active={location.pathname === '/us'}>
                            US
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;