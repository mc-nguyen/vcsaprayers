import "react-toastify/dist/ReactToastify.css";
import {Toast} from "react-bootstrap";

export const ReactNotificationComponent = ({ title, body, show }) => {
    return(
        <Toast bg="warning" show={show} delay={4000} autohide animation style={{
            position: 'fixed',
            top: 20,
            right: 20,
            minWidth: 100,
        }}>
            <Toast.Header closeButton={false} >
                <img
                    src="ms-icon-310x310.png"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
        </Toast>
    );
};