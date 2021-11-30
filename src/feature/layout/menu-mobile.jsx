import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";
MenuMobile.propTypes = {};
const useStyles = makeStyles((theme) => ({
  menu_mb: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    color: "white",
    position: "relative",
    display: "none",
  },
  menu: {
    position: "absolute",
    top: "10px",
    right: "0",
    maxHeight: "0",
  },
  list: {
    backgroundColor: "white",
    color: "black",
    maxHeight: "0",
    padding: "10px",
    borderRadius: "5px",
  },
  item: {
    textTransform: "uppercase",
    padding: "5px 0",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  link: { 
    textTransform: "uppercase",
    padding: "5px 0",
    color: "black",
    fontSize: "14px",
    "&:hover": {
      color: "grey",
      cursor: "pointer",
    },
  },
  show: {
    maxHeight: "100%",
    transition: ".3s",
  },
  hidden: {
    maxHeight: "0",
    overflow: "hidden",
    padding: "0",
    transition: ".1s",
  },
}));
function MenuMobile(props) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  return (
    <div className={classes.menu_mb}>
      <div onClick={() => setShow(!show)}>
        <svg
          className={classes.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>

      <div className={clsx(classes.menu)}>
        <ul
          className={clsx(classes.list, show ? classes.show : classes.hidden)}
        >
          {[
            "introduction",
            "solution",
            "rate plan",
            "login",
            "apply for free",
          ].map((item) => (
            <li className={classes.item} key={item}>
              <a className={classes.link} href="#">
                {" "}
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;
