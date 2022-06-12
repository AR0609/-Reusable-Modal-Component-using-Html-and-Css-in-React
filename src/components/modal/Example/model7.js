import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model7 = () => {
  const [IsOpen6, setIsOpen6] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen6(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With no heart and two button
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onOkay: "abc",
          onCancelButton: "Cancel",
          onOkayButton: "Save",
          onCancel: () => setIsOpen6(false),
          isOpen: IsOpen6,
          close: () => setIsOpen6(false),
          // heart: true,
          // btnleft: true,
        }}
      />
    </div>
  );
};

export default Model7;
