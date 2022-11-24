import { useContext } from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext/TodoContext";
import "./Modal.css";

export function Modal({ children }) {
  const { setOpenModal } = useContext(TodoContext);
  return ReactDOM.createPortal(
    <div className="modal">
      <span onClick={() => setOpenModal(false)}>X</span>
      {children}
    </div>,
    document.getElementById("modal")
  );
}
