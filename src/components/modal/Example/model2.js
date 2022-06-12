import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model2 = () => {
  const [IsOpen1, setIsOpen1] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen1(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With no heart and Rightside button
      </Buttons>
      <Modal
        {...{
          title: "Title Here",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onOkay: "abc",
          onCancelButton: "Cancel",
          onOkayButton: "Save",
          onCancel: () => setIsOpen1(false),
          isOpen: IsOpen1,
          close: () => setIsOpen1(false),
          btnleft: true,
          left: true,
          celebration: true,
        }}
      />
    </div>
  );
};

export default Model2;
