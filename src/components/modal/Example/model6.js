import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";
const Model6 = () => {
  const [IsOpen5, setIsOpen5] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen5(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With heart and two button
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onOkay: "abc",
          onCancelButton: "Cancel",
          onOkayButton: "Save",
          onCancel: () => setIsOpen5(false),
          isOpen: IsOpen5,
          // close: () => setIsOpen5(false),
          heart: true,
          // btnleft: true,
        }}
      />
    </div>
  );
};

export default Model6;
