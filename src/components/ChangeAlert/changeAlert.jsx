import React from "react";
import { withStorageListener } from "./withStorageListener";

const changeAlert = ({ toggleShow, show }) => {
  if (show) {
    return (
      <div>
        <button
          onClick={() => {
            toggleShow(true);
          }}
        >
          Reload info
        </button>
        <div>Hubo cambios</div>
      </div>
    );
  }
  return null;
};

const ChangeAlertWithStorageListener = withStorageListener(changeAlert);

export { ChangeAlertWithStorageListener };
