import {Form, Row, Col, Button, Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import db from "../database/firebase";
import {useHistory} from "react-router-dom";

export default function IntentionForm() {
    const [disabledButton, setDisabledButton] = useState(true);
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [message, setMessage] = useState("");

    const today = new Date();
    const timeStamp = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    const [width, setWidth] = useState(window.innerWidth);

    let history = useHistory();

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function submit(e) {
        e.preventDefault();

        db.collection("prayers").add({
            sender: sender,
            receiver: receiver,
            message: message,
            timeStamp: timeStamp
        }).then(() => {
            console.log("Added a prayer!")});

        setDisabledButton(true);
        setSender("");
        setReceiver("");
        setMessage("");

        history.push('/appreciation');
    }

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
        padding: 10,
        width: "50%",
        borderRadius: 10,
        margin: 'auto',
    } : {
        background: "white",
        padding: 10,
        margin: "20px"
    };
    document.title = "VCSA Intention Forms"

    const boards = ["Cha Kiệt", "Hưng", "Khoa Navy", "Cát Tường", "Bảo Ngọc", "Tường Vy",
        "Huy Cường", "Quang Vy", "Tuấn Duy", "Duy An", "Thảo Hiền",
        "Tuấn Kiệt", "Minh Nhật", "Xuân Hà", "Cát Linh", "Xuân Quang"];

    return (
        <div style={{ backgroundColor: 'plum', paddingTop: 10 }}>
            <Form className="align-items-center" onSubmit={submit} style={formStyle}>
                <Card className="mb-3" style={paragraphStyle}>
                    <Card.Body style={{ marginHeight: 10 }}>
                        <Card.Title style={{fontWeight: "bolder", fontSize: 20}}>Hello hai Cha and Boards, </Card.Title>
                        <Card.Text style={paragraphStyle}> <p style={{ margin: 10 }}>
                            - This is the form to fill in your prayer requests which we are going to share at the beginning prayer of our meetings. <br/>
                            - Prayers will be collected from the previous meeting (SAT 12:01 AM) to the following FRI by 11:59 PM.<br/>
                            - Spiritual Coordinator is in charge of gathering and sending prayers to the assigned Boards doing prayer of that week meeting.<br/>
                            - Boards who are assigned to do prayer might come up with your own techniques to share these intentions.<br/>
                            - Please fill this form sincerely since we are going to pray to God these intentions.<br/>
                        </p>
                            <p> Contact Spiritual Coordinator to have assist with inquiries.</p>
                        </Card.Text>
                        <Form.Check type="checkbox"
                                    style={{fontWeight: "bold"}}
                                    label="I agree!"
                                    onChange={event => {setDisabledButton(event.target.checked && message!=="");}}
                                    required/>
                    </Card.Body>
                </Card>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label style={ labelStyle }>Sender</Form.Label>
                        <Form.Control as="select" style={paragraphStyle} onChange={event => setSender(event.target.value)} value={sender}>
                            <option>Please drop down to select your name</option>
                            {
                                boards.map((board) => (
                                    <option value={board}>{board}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label style={ labelStyle }>Receiver</Form.Label>
                        <Form.Control type="text" placeholder="Optional" name="receiver" onChange={event => {setReceiver(event.target.value);}} style={paragraphStyle} value={receiver}/>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label style={ labelStyle }>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" onChange={event => {setMessage(event.target.value);}} style={paragraphStyle} value={message} required/>
                </Form.Group>

                <div align="center">
                    <Button type="submit" size={"lg"} style={buttonStyle} disabled={disabledButton}>Submit</Button>
                </div>
            </Form>
        </div>
    );
}