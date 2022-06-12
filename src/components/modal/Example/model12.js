import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model12 = () => {
  const [IsOpen11, setIsOpen11] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen11(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With heart and onebutton and link
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          onCancel: () => setIsOpen11(false),
          isOpen: IsOpen11,
          // close: () => setIsOpen8(false),
          heart: true,
          // btnleft: true,
          textcenter: true,
          linkname: "link",
        }}
      />
    </div>
  );
};

export default Model12;
