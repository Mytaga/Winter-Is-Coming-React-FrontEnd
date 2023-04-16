import { Toast } from "react-bootstrap";

export const ErrorToast = ({
    show,
    close,
    errorMessage,
}) => {
    return (
        <Toast show={show} onClose={close} >
          <Toast.Header className="bg-info">
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Login Error</strong>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      );
};