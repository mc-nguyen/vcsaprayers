import {Button, Figure, Modal} from "react-bootstrap";
import React from "react";

export default function Appreciation(props) {
    const labelStyle = {
        fontSize: 50,
        textAlign: "center",
        fontFamily: "Lobster",
        color: "white",
        margin: "auto"
    };

    const paragraphStyle = {
        fontFamily: "Lora",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    };
    document.title = "Thank you for your prayers"

    return (
        <Modal show={props.messageBox} onHide={props.showBox} size="lg">
            <Modal.Header style={{backgroundColor: "purple", padding: 0}}>
                <Modal.Title style={labelStyle}>Cảm ơn!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Figure.Image src={'../images/thank.jpg'}/>
                <p style={paragraphStyle}>Cảm ơn lời cầu nguyện của bạn hôm nay.<br/>
                    Hy vọng lời cầu nguyện sẽ thành hiện thực.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.showBox}>Trở lại</Button>
            </Modal.Footer>
        </Modal>
    );
};