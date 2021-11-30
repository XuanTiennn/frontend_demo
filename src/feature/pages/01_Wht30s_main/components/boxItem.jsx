import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Link, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
BoxItem.propTypes = {};
const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
  product: {
    position: "relative",
  },
  title: {
    fontSize: "18px",
  },
  number: {
    marginLeft: "10px",
  },
  bestProduct: {
    border: "solid 3px #020001",
    width: "80%",
    position: "absolute",
    bottom: "-36px",
    left: "10%",
    padding: "5px",
  },
  text: {
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  icongo: {
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
  },
  rank: { 
    position: "absolute",
    top: "-47px",
    left: "-1px",
  },
}));
function BoxItem({ url, onBestPr, urlIcon, onListPr }) {
  const classes = useStyles();
  return (
    <Box className={classes.product}>
      <Box className={classes.imgs}>
        <Link href="#">
          <img className={classes.img} src={`${url}`} alt="img of product" />
        </Link>
      </Box>
      {onListPr ? (
        <Box className={clsx(classes.product_desciption)}>
          <Box className={classes.title}>
            <a
              className={clsx("font-montserrat-semibold", "black-title")}
              href="#"
            >
              [what happen] How to create{" "}
            </a>
          </Box>
          <Box className={clsx("flex", "flex-between", classes.price)}>
            <Typography
              className={clsx(
                classes.price,
                "black-title",
                "font-montserrat-regular"
              )}
            >
              2,500 won
            </Typography>
            <Button className={classes.btnHeart}>
              <img
                className={classes.img}
                src="../../img/hearticon.png"
                alt="heart icon"
              />
              <Typography className={classes.number}>236</Typography>
            </Button>
          </Box>{" "}
        </Box>
      ) : (
        <Box
          className={clsx(
            classes.bestProduct,
            "bg-white",
            "flex",
            "flex-between"
          )}
        >
          <Typography
            className={clsx("font-montserrat-extraBold", classes.text)}
          >
            How to create mobile-optimized
          </Typography>
          <a href="#">
            <img
              className={classes.icongo}
              src="../../img/go-icon.png"
              alt=""
            />
          </a>
        </Box>
      )}
      {onBestPr ? (
        <Box className={classes.rank}>
          <img src={urlIcon} alt="aaaaaaaaaaf" />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default BoxItem;
