import React from "react";
import {Table} from "react-bootstrap";

export default function BoardRecord(props) {
    const boards = {"Big 5": ["Hưng", "Khoa Navy", "Cát Tường", "Bảo Ngọc", "Tường Vy"],
        "New Boards": ["Huy Cường", "Quang Vy", "Tuấn Duy", "Duy An", "Thảo Hiền"],
        "Trainees": ["Tuấn Kiệt", "Minh Nhật", "Xuân Hà", "Cát Linh", "Xuân Quang"]};

    const groups = ["Big 5", "New Boards", "Trainees"];

    return(
        <Table striped bordered hover style={{ width: props.width > 550 ? "60%" : "100%", margin: "1% auto", textAlign: "center", verticalAlign: "middle"}}>
            <thead style={props.style.labelStyle}>
                <tr align="center">
                    <th colSpan={6} ><h1>Boards' Record</h1></th>
                </tr>
                <tr>
                    <th>Group</th>
                    <th colSpan={5}>Board Names</th>
                </tr>
            </thead>
            <tbody style={props.style.paragraphStyle}>
            {
                groups.map((group, groupIndex) =>
                    <tr key={groupIndex}>
                        <td style={{
                            backgroundColor: "red",
                            color: "white",
                            fontWeight: "bolder"
                        }}>{group}</td>
                        {
                            boards[group].map((board, boardIndex) =>
                                <td key={boardIndex} style={{
                                    backgroundColor: (props.sent.get(board) < 25) ? "yellow" : "green",
                                    color: (props.sent.get(board) < 25) ? "black" : "white"
                                }}>{board}</td>
                            )
                        }
                    </tr>
                )
            }
            </tbody>
        </Table>
    );
};