import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";
const Model5 = () => {
  const [IsOpen5, setIsOpen5] = useState(false);
  return (
    <div>
      {" "}
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen5(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With congratulations and two button
      </Buttons>
      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          textcenter: true,
          onCancel: () => setIsOpen5(false),
          isOpen: IsOpen5,
          close: () => setIsOpen5(false),
          // btnleft: true,
          // heart: true,
          imagedown: true,
          celebration: true,
          image: true,
          secondarybtn: "secondarybtn",
        }}
      />
    </div>
  );
};

export default Model5;
