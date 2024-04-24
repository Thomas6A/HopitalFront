import { Button, Container, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar fixed="top" bg="primary" data-bs-theme="dark">
                <Button href="/" variant="light" className="mx-2 w-50">Accueil</Button>
                <Container className="w-100">
                    <Navbar.Brand className="mx-auto">Hopital</Navbar.Brand>
                </Container>
                <Button variant="light" className="mx-2 w-50">Créer</Button>
            </Navbar>
            <br />
        </>
    );
};

export default Header;