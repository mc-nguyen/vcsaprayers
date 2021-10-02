import {Card, Figure} from "react-bootstrap";
import React from "react";

export default function Appreciation() {
    const formStyle = {
        background: "white",
        padding: 10,
        borderRadius: 10,
        width: '40%',
        margin: 'auto'
    };
    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 40,
        textAlign: "center",
        backgroundColor: "purple",
        color: "white",
        padding: 10,
        borderRadius: 20
    };

    const paragraphStyle = {
        fontFamily: "Lora",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    };
    document.title = "Thank you for your prayers"

    return (
        <div style={{ backgroundColor: 'plum', paddingTop: 10 }}>
            <Card style={formStyle}>
                <Figure.Image src={'../images/thank.jpg'}/>
                <Card.Body>
                    <Card.Title style={labelStyle}>Cảm ơn!</Card.Title>
                    <Card.Text style={paragraphStyle}>
                        Cảm ơn lời cầu nguyện của bạn hôm nay.<br/>
                        Hy vọng lời cầu nguyện sẽ thành hiện thực.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};