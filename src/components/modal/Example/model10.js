import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";
const Model10 = () => {
  const [IsOpen9, setIsOpen9] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen9(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With no heart and onebutton
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          onCancel: () => setIsOpen9(false),
          isOpen: IsOpen9,
          close: () => setIsOpen9(false),
          // heart: true,
          // btnleft: true,
          textcenter: true,
        }}
      />
    </div>
  );
};

export default Model10;
