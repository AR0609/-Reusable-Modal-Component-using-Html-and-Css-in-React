import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";
const Model16 = () => {
  const [IsOpen14, setIsOpen14] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen14(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With field
      </Buttons>

      <Modal
        {...{
          field: "Sales Department",
          fieldlabel: "Edit Depatment",
          onOkay: "abc",
          onCancelButton: "Save",
          onOkayButton: "Cancel",
          onCancel: () => setIsOpen14(false),
          isOpen: IsOpen14,
          close: () => setIsOpen14(false),
          // heart: true,
          // btnleft: true,
        }}
      />
    </div>
  );
};

export default Model16;
