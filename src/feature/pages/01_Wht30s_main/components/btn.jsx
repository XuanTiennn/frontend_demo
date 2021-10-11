import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

BtnButton.propTypes = {};

function BtnButton({ text, onClick }) {
  return <Button className="font-montserrat-extraBold">{text}</Button>;
}

export default BtnButton;
