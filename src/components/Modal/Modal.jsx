import ReactDOM from "react-dom";
import "./Modal.css";

export function Modal({ children, setOpenModal }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <span onClick={() => setOpenModal(false)}>X</span>
      {children}
    </div>,
    document.getElementById("modal")
  );
}
