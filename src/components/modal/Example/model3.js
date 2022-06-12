import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model3 = () => {
  const [IsOpen2, setIsOpen2] = useState(false);
  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen2(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With primary Button And secondatry button
      </Buttons>
      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          // onOkay: 'abc',
          onCancelButton: "Save",
          // onOkayButton: 'Save',
          onCancel: () => setIsOpen2(false),
          isOpen: IsOpen2,
          // close: () => setIsOpen2(false),
          // btnleft: true,\
          secondarybtn: "Secondary CTA",
          heart: true,
          center: true,
          textcenter: true,
        }}
      />
    </div>
  );
};

export default Model3;
