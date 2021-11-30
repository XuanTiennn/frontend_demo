import { Container, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import MenuMobile from "./menu-mobile";
Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "black",
    [theme.breakpoints.down("sm")]: {
     padding:'12px'
    },
  },
  listItem: {
    textTransform: "uppercase",
    padding: "0 30px",
  },
  navigateDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      height: "25px", 
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Container>
        <Grid container className="flex flex-between">
          <Grid item>
            <div className="header-logo">
              <a href="#" className="logo-link">
                <img
                  className={classes.logo}
                  src="../img/logo.png"
                  alt="logo-img"
                />
              </a>
            </div>
          </Grid>
          <Grid item>
            <div className={clsx(classes.navigateDesktop, "header-navigate")}>
              <Grid container>
                <Grid item>
                  <div className="navigate-right">
                    <ul className="flex flex-around navigate-list">
                      {["Introduction", "solution", "Rate plan"].map((item) => (
                        <li
                          className={clsx(
                            classes.listItem,
                            "font-montserrat-regular"
                          )}
                        >
                          {" "}
                          <a className="list-link white" href="#">
                            {item}
                          </a>
                        </li>
                      ))}
                      <li className={clsx(classes.line, "white")}>|</li>
                    </ul>
                  </div>
                </Grid>{" "}
                <Grid item className="flex">
                  <div className="navigate-left">
                    <ul className="flex flex-between navigate-list">
                      {["login", "Apply for free use"].map((item) => (
                        <li
                          className={clsx(
                            classes.listItem,
                            "font-montserrat-regular"
                          )}
                        >
                          <a className="list-link white" href="">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </div>
            <MenuMobile />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
