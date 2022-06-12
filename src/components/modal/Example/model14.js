import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";

const Model14 = () => {
  const [IsOpen13, setIsOpen13] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen13(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With congratulations and onebutton and link
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          onCancelButton: "Save",
          onCancel: () => setIsOpen13(false),
          isOpen: IsOpen13,
          close: () => setIsOpen13(false),
          imagedown: true,
          celebration: true,
          image: true,
          textcenter: true,
          linkname: "link",
        }}
      />
    </div>
  );
};

export default Model14;
