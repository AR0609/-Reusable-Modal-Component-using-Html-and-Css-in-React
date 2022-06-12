import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model1 = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div>
      {" "}
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With heart and Rightside button
      </Buttons>
      <Modal
        {...{
          title: "Title Here",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onOkay: "abc",
          onCancelButton: "Cancel",
          onOkayButton: "Save",
          onCancel: () => setIsOpen(false),
          isOpen: IsOpen,
          close: () => setIsOpen(false),
          btnleft: true,
          heart: true,
          // textcenter: true,

          left: true,
          celebration: true,
        }}
      />
    </div>
  );
};

export default Model1;
