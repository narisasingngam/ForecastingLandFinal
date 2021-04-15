import React from "react";
import "./styled.css";

const InputHeader = ({
  handleChangeInput,
  handleOnKeyPress,
  handleClickSearchBtn,
}) => {
  return (
    <div class="container-header flex ">
      <div class="d-flex align-self-center">
        <input
          class="header-input"
          placeholder="Insert land id"
          aria-label="default input example"
          onChange={handleChangeInput}
          onKeyPress={handleOnKeyPress}
        ></input>
        <button
          type="button"
          class="button button--info"
          onClick={handleClickSearchBtn}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default InputHeader;
