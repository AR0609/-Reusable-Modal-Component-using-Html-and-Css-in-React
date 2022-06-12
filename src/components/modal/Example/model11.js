import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model11 = () => {
  const [IsOpen10, setIsOpen10] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen10(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With congratulations and onebutton
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          onCancel: () => setIsOpen10(false),
          isOpen: IsOpen10,
          close: () => setIsOpen10(false),
          imagedown: true,
          celebration: true,
          image: true,
          textcenter: true,
        }}
      />
    </div>
  );
};

export default Model11;
