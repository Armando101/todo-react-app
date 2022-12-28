import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { useStorageListener } from "../../hooks/useStorageListener";

export const ChangeAlert = ({ sincronize }) => {
  const [storageChange, toggleShow] = useStorageListener(sincronize);
  if (storageChange) {
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
