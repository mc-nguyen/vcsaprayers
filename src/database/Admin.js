import {Alert, Button, Col, Form, ListGroup, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import db from "./firebase";

export default function Admin() {
    const [width, setWidth] = useState(window.innerWidth);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(true);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 20
    };
    const buttonStyle = {
        backgroundImage: "linear-gradient(to right, purple 0%, mediumpurple 51%, purple 100%)",
        border: "none",
        fontFamily: "FleurDeLeah",
        fontWeight: "bold",
        fontSize: 30,
        paddingRight: 20,
        borderRadius: 10,
        width: 300,
    };
    const paragraphStyle = {
        fontFamily: "LibreBaskerville",
        fontSize: 14
    };
    const formStyle = (width > 1040) ? {
        background: "white",
        padding: 30,
        borderRadius: 30,
        width: "50%",
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    } : {
        background: "white",
        margin: 10,
        padding: 30,
        borderRadius: 30,
    };

    function checkLogIn() {
        console.log("working");
        setEmail("");
        setPassword("");

        if (email === "vcsa1998@gmail.com" && password === "1998") setShow(false);
        else setError(true);
    }

    const [sentPrayers, setSentPrayers] = useState([])
    window.addEventListener('load', () => {
        fetchData();
    });
    function fetchData() {
        db.collection("prayers").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                const data = element.data();
                const date = new Date(data.timeStamp);
                const today = new Date();
                if ((today - date) / (1000 * 3600 * 24) < 7 && data.sender !== "") setSentPrayers(arr => [...arr , data.sender]);
            });
        });
    }

    return (
        <div>
            <Alert style={formStyle} show={show} variant="light">
                <Alert.Heading align="center" style={{fontFamily: "Lobster", fontSize: 40, paddingBottom: 10}}>Admin Sign-in</Alert.Heading>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label style={labelStyle} column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control style={paragraphStyle}
                                      type="email"
                                      placeholder="Enter email..."
                                      value={email}
                                      onChange={event => {
                                          setEmail(event.target.value);
                                          setError(false);
                                      }}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label style={labelStyle} column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control style={paragraphStyle}
                                      type="password"
                                      placeholder="Password"
                                      value={password}
                                      onChange={event => {
                                          setPassword(event.target.value);
                                          setError(false);
                                      }}
                        />
                    </Col>
                </Form.Group>

                <Alert variant="danger" show={error}>
                    Email or Password is incorrect!
                </Alert>

                <div align="center">
                    <Button size={"lg"} style={buttonStyle} onClick={checkLogIn}>Log In</Button>
                </div>
            </Alert>
            {!show && <ListGroup style={formStyle}>
                <h1 style={labelStyle}>Danh Sách Đã Gửi Lời Cầu Nguyện</h1>
                {
                sentPrayers.map((prayer) => (
                    <ListGroup.Item style={paragraphStyle}>{prayer}</ListGroup.Item>
                ))
            }
            </ListGroup>}
        </div>
    );
};