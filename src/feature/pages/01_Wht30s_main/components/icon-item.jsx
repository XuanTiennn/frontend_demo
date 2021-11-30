import React from "react";
import PropTypes from "prop-types";

Iconitem.propTypes = {};

function Iconitem({ url = "", alt = "" }) {
  return (
    <a href="#">
      {" "}
      <img style={{ width: "30px", height: "30px" }} src={url} alt={alt} />
    </a>
  );
}

export default Iconitem; 
