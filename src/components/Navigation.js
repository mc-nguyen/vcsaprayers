import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

export default function Navigation() {
    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 15,
        textAlign: "center",
        padding: 0,
    };
    return (
        <Navbar bg="success" variant="dark" style={labelStyle}>
            <Container>
                <Navbar.Brand href="/">Intention Form</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/intentions">Prayer List</Nav.Link>
                    <Nav.Link href="/popular-prayers">Prayers</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}