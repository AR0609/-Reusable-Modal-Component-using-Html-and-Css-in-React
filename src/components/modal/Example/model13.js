import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";
const Model13 = () => {
  const [IsOpen12, setIsOpen12] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen12(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With no heart and onebutton and link
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          onCancel: () => setIsOpen12(false),
          isOpen: IsOpen12,
          close: () => setIsOpen12(false),
          // heart: true,
          // btnleft: true,
          textcenter: true,
          linkname: "link",
        }}
      />
    </div>
  );
};

export default Model13;
