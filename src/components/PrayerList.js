import React, {useEffect, useState} from "react";
import {Col, Figure, ListGroup} from "react-bootstrap";
import db from "../database/firebase";

export default function PrayerList() {
    const [prayers, setPrayers] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('load', () => {
        fetchData();
    });
    function fetchData() {
        db.collection("prayers").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                const data = element.data();
                const date = new Date(data.timeStamp);
                const today = new Date();
                if ((today - date) / (1000 * 3600 * 24) < 7) setPrayers(arr => [...arr ,
                    ((data.receiver === "") ? "" : ("Gửi đến " + data.receiver + ": "))
                    + data.message]);
            });
        });
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const img = new Image();
    img.src = "images/list.jpg";
    img.width *= .1;
    img.height *= .1;
    console.log(img.src + " " + img.width + " " + img.height);

    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "purple",
        color: "white",
        padding: 10,
        borderRadius: 20
    };
    const paragraphStyle = {
        fontFamily: "Lora",
        fontSize: 15,
        fontWeight: "bold"
    };
    const divCover = {
        backgroundColor: "plum",
        padding: 10,
        width: (width > 800) ? "50%" : "100%",
        margin: "auto"
    };

    document.title = "VCSA Intentions"

    return (
        <div className="justify-content-md-center" style={divCover}>
            <Col >
                <div style={{ width: "50%", margin: "auto" }}>
                    <Figure.Image src={img.src}/>
                </div>
                <h1 style={labelStyle}>Lời cầu nguyện tuần này:</h1>
                <ListGroup> {
                    prayers.map((prayer) => (
                        <ListGroup.Item style={paragraphStyle}>{prayer}</ListGroup.Item>
                    ))
                }
                </ListGroup>
            </Col>
        </div>
    );
};