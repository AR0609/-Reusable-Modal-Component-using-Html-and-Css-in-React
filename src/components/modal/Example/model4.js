import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model4 = () => {
  const [IsOpen3, setIsOpen3] = useState(false);
  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen3(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With One Button And Secondary button
      </Buttons>
      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          // onOkay: 'abc',
          onCancelButton: "save",
          // onOkayButton: 'Save',
          onCancel: () => setIsOpen3(false),
          isOpen: IsOpen3,
          close: () => setIsOpen3(false),
          // btnleft: true,\
          secondarybtn: "Secondary CTA",
          // heart: true,
          center: true,
          textcenter: true,
        }}
      />
    </div>
  );
};

export default Model4;
