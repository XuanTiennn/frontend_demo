import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Box } from "@material-ui/core";
import BoxItem from "../components/boxItem";
import { makeStyles } from "@material-ui/styles";
import BtnButton from "../components/btn";
import clsx from "clsx";
Products.propTypes = {};
const useStyles = makeStyles((theme) => ({ 
  root: {
    padding: "40px 0",
  },
  w_20: {
    width: "20%",
    margin: "15px 0",
  },
  btn: {
    "&>button": {
      border: "solid 3px #020001",
      padding:'8px 25px'
    },
    justifyContent: "center",
  },
}));
function Products(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={1}>
          {[
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} className={classes.w_20}>
              <BoxItem
                url={`../../../../img/img-${item}.png`}
                onListPr={true}
              />
            </Grid>
          ))}
        </Grid>
        <Grid className={clsx(classes.btn, "black-btn", "flex")}>
          <BtnButton text={"see more"} />
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
