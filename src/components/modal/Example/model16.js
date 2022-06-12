import Buttons from "../../button component/Button";
import React, { useState } from "react";
import Modal from ".././index";
const Model16 = () => {
  const [IsOpen14, setIsOpen14] = useState(false);

  return (
    <div>
      <Buttons
        {...{
          btnType: "primary",
          onClick: () => setIsOpen14(true),
          style: { marginTop: "20px" },
        }}
      >
        Modal With no heart and no button
      </Buttons>

      <Modal
        {...{
          title: "Do You Want To Continue?",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
          // heart: true,
          isOpen: IsOpen14,
          close: () => setIsOpen14(false),
          // imagedown: true,
          // celebration: true,
          // image: true,
          textcenter: true,
        }}
      />
    </div>
  );
};

export default Model16;
