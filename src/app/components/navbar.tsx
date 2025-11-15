import { Navbar } from "react-bootstrap"






ction Navbar() {
    return (
        <Navbar>
        <Navbar.Brand href="#home">MyApp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
        </Navbar.Collapse>
    )
}