import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
Introduct.propTypes = {};

const useStyles = makeStyles((theme) => ({
  introduct_text: {
    padding: "40px 0",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  introduce_title: {
    fontSize: "50px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  introduct_description: {
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
  },
}));
function Introduct(props) {
  const classes = useStyles();
  return (
    <div className="introduct">
      <Container>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div className={classes.introduct_text}>
              <h3
                className={clsx(
                  classes.introduce_title,
                  "font-montserrat-extraBold",
                  "white"
                )}
              >
                What Happened!
              </h3>
              <p
                className={clsx(
                  classes.introduct_description,
                  "font-montserrat-regular",
                  "white"
                )}
              >
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first step to your brand's success. How to create
                mobile-optimized videos in minutes.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Introduct;
