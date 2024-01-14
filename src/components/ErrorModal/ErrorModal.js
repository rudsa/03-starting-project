import React from "react";

const ErrorModal = (props) => {
  return props === "test1" ? alert(props) : alert(props);
};

export default ErrorModal;
