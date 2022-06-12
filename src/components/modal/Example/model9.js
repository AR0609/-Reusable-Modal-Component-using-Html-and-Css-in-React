import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model9 = () => {
  const [IsOpen8, setIsOpen8] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen8(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With heart and onebutton
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          onCancel: () => setIsOpen8(false),
          isOpen: IsOpen8,
          // close: () => setIsOpen8(false),
          heart: true,
          // btnleft: true,
          textcenter: true,
        }}
      />
    </div>
  );
};

export default Model9;
