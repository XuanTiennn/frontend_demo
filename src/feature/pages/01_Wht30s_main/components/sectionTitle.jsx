import React from "react";
import PropTypes from "prop-types";
import { Box, Typography ,makeStyles} from "@material-ui/core";

import clsx from "clsx";
SectionTitle.propTypes = {};
const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    padding: "65px 0",
  },
  title: {
    fontSize: "50px",
    textAlign: "center",
    maxWidth: "600px",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  }, 
  description: {
    textAlign: "center",
    fontSize: "20px",
    maxWidth: "600px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));
function SectionTitle({ title, description }) {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.box, "flex")}>
      <Typography
        className={clsx("font-montserrat-bold", "orange-light", classes.title)}
        component="h3"
      >
        {title}
      </Typography>
      <Typography
        className={clsx(
          classes.description,
          "orange-light",
          "font-montserrat-regular"
        )}
        component="p"
      >
        {description}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
