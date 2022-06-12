import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model8 = () => {
  const [IsOpen7, setIsOpen7] = useState(false);
  return (
    <div>
      {" "}
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen7(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With congratulations and two button
      </Buttons>
      <Modal
        {...{
          title: "Do You Want To Continue?",
          onOkay: "abc",
          onOkayButton: "Cancel",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          textcenter: true,
          onCancel: () => setIsOpen7(false),
          isOpen: IsOpen7,
          close: () => setIsOpen7(false),
          // btnleft: true,
          // heart: true,
          imagedown: true,
          celebration: true,
          image: true,
          // secondarybtn: 'secondarybtn',
        }}
      />
    </div>
  );
};

export default Model8;
