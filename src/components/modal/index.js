import React, { Fragment, useEffect, useRef } from "react";
import propTypes from "prop-types";
import "./modal-new.scss";
import Buttons from "../button component/Button";
import heartimg from "./heart.svg";
import closeimg from "./closeimg.svg";
import celebrationimg from "./congragulation.svg";

const modal = ({
  title = "",
  desc = "",
  onOkay = null,
  onCancel = null,
  linkname,
  onCancelButton,
  onOkayButton,
  href,
  isOpen = false,
  left = false,
  textcenter = false,
  heart = false,
  close = null,
  btnleft = false,
  onsecondary = null,
  secondarybtn = "",
  celebration = true,
  imagedown = false,
  image = true,
  field = "",
  fieldonchange = "",
  fieldlabel = "",
}) => {
  const containsBothButton = !!onOkay && !!onCancel;
  const width = containsBothButton ? "two-button" : "one-button";

  return (
    isOpen && (
      <div className="modal">
        <div className="mainmodal">
          <div className="container ">
            {imagedown ? (
              <>
                <div className="image-close">
                  {close && (
                    <img
                      className="class-close"
                      src={closeimg}
                      onClick={close}
                    />
                  )}
                </div>
                <div className="celebration">
                  {image && (
                    <img
                      src={celebration ? celebrationimg : heartimg}
                      style={{ width: "50px" }}
                    />
                  )}
                </div>
              </>
            ) : (
              <div className="image-row">
                <div className={left ? "image-left" : "image-container"}>
                  {heart && <img src={heartimg} style={{ height: "24px" }} />}
                  <div className="image-closer">
                    {close && (
                      <img
                        className="class-close"
                        src={closeimg}
                        onClick={close}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
            <p className={` modal-title ${textcenter ? "titlecenter" : ""} `}>
              {title}
            </p>
            <p className={` modal-desc ${textcenter ? "titlecenter" : ""} `}>
              {desc}
            </p>
            {field && (
              <input
                type="text"
                onChange={fieldonchange}
                placeholder={field}
                label={fieldlabel}
                style={{
                  border: "1px solid lightslategrey",
                  height: "26px",
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            )}
            <div className="button-flex">
              {btnleft && <div className="btn-space"></div>}
              {onOkay && (
                <Buttons className={width} onClick={onOkay} btnType="secondary">
                  {onOkayButton}
                </Buttons>
              )}
              {onCancel && (
                <Buttons className={width} onClick={onCancel} btnType="primary">
                  {onCancelButton}
                </Buttons>
              )}
            </div>
            {linkname && (
              <div className="linktab">
                <a href={href} className="link">
                  {linkname}
                </a>
              </div>
            )}
            {secondarybtn && (
              <Buttons
                className="secondarybtn"
                onClick={onsecondary}
                btnType="secondary"
              >
                {secondarybtn}
              </Buttons>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default modal;
modal.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
  onOkay: propTypes.func,
  onCancel: propTypes.func,
  linkname: propTypes.string,
  onCancelButton: propTypes.string,
  onOkayButton: propTypes.string,
  href: propTypes.string,
  isOpen: propTypes.bool,
  className: propTypes.string,
  afterOpenModal: propTypes.func,
};
