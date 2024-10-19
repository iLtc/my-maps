import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function NavBar() {
    const pathname = useLocation().pathname;

    const isChina = pathname.includes('cn');
    const isUS = pathname.includes('us');
    const isWorld = !isChina && !isUS;

    const isChinese = pathname.includes('zh');
    const isEnglish = !isChinese;

    const worldLink = isEnglish ? '/' : '/zh';
    const chinaLink = isEnglish ? '/cn' : '/zh/cn';
    const usLink = isEnglish ? '/us' : '/zh/us';

    let enLink;
    let zhLink;

    if (isWorld) {
        enLink = '/';
        zhLink = '/zh';
    } else if (isChina) {
        enLink = '/cn';
        zhLink = '/zh/cn';
    } else {
        enLink = '/us';
        zhLink = '/zh/us';
    }

    const brandTitle = isEnglish ? 'My Footprints' : '我的足迹';
    const worldTitle = isEnglish ? 'World' : '世界';
    const chinaTitle = isEnglish ? 'China' : '中国';
    const usTitle = isEnglish ? 'US' : '美国';

    return (
        <Navbar bg="light" expand="lg" sticky="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href={worldLink}>{brandTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={worldLink} active={isWorld}>
                            {worldTitle}
                        </Nav.Link>
                        <Nav.Link href={chinaLink} active={isChina}>
                            {chinaTitle}
                        </Nav.Link>
                        <Nav.Link href={usLink} active={isUS}>
                            {usTitle}
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href={enLink} active={isEnglish}>
                            En
                        </Nav.Link>
                        <Nav.Link href={zhLink} active={isChinese}>
                            中
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;