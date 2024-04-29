import { Button, Container, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar fixed="top" bg="primary" data-bs-theme="dark">
                <Button href="/" variant="light" className="mx-2">Accueil</Button>
                <Container className="w-100">
                    <Navbar.Brand className="mx-auto">Hopital</Navbar.Brand>
                </Container>
                <Button href="/form/null" variant="light" className="mx-2">Créer</Button>
            </Navbar>
            <br />
        </>
    );
};

export default Header;