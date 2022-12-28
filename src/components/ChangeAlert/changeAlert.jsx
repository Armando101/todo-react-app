import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { withStorageListener } from "./withStorageListener";

const changeAlert = ({ toggleShow, show }) => {
  if (show) {
    return (
      <>
        <Modal>
          <h4>Hubo cambios</h4>
          <CreateTodoButton
            text={"Reload"}
            bgColor={"contrast2"}
            callback={() => {
              toggleShow(true);
            }}
          ></CreateTodoButton>
        </Modal>
      </>
    );
  }
  return null;
};

const ChangeAlertWithStorageListener = withStorageListener(changeAlert);

export { ChangeAlertWithStorageListener };
