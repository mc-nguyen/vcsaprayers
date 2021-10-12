import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import BoardRecord from "./BoardRecord";
import db from "./firebase";

export default function Admin() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

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
        fontFamily: "Lora",
        fontSize: 14
    };
    const formStyle = (width > 1040) ? {
        background: "white",
        padding: 30,
        borderRadius: 30,
        width: "50%",
        margin: "10px auto",
    } : {
        background: "white",
        margin: 10,
        padding: 30,
        borderRadius: 30,
    };

    function fetchData() {
        db.collection("prayers").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                const data = element.data();
                const today = Date.now();
                if ((today - data.timeStamp) / (1000 * 3600 * 24) < 7)
                    setSent(sent.set(data.board, true));
                console.log(sent);
            });
        });
    }

    function checkLogIn() {
        console.log("working");
        setEmail("");
        setPassword("");

        if (email === "vcsa1998@gmail.com" && password === "1998") setShow(false);
        else setError(true);
    }

    const [sent, setSent] = useState(new Map([
        ["Hưng", false],
        ["Khoa Navy", false],
        ["Cát Tường", false],
        ["Bảo Ngọc", false],
        ["Tường Vy", false],
        ["Huy Cường", false],
        ["Quang Vy", false],
        ["Tuấn Duy", false],
        ["Duy An", false],
        ["Thảo Hiền", false],
        ["Tuấn Kiệt", false],
        ["Minh Nhật", false],
        ["Xuân Hà", false],
        ["Cát Linh", false],
        ["Xuân Quang", false]
    ]));

    window.addEventListener('load', () => {
        fetchData();
    });

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
            {!show && <BoardRecord style={{
                paragraphStyle: paragraphStyle,
                labelStyle: labelStyle
            }} width={width} sent={sent}/>
            }
        </div>
    );
};