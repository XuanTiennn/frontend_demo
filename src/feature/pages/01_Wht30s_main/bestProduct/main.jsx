import React from "react";
import PropTypes from "prop-types";
import BoxItem from "../components/boxItem";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import SectionTitle from "../components/sectionTitle";
BestProduct.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "70px 0",
    },
  },

  onMobile: {
    [theme.breakpoints.down("sm")]: {
      margin: "50px 0",
    },
  },
}));
function BestProduct(props) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, "best-product")}>
      <Container>
        <Grid container>
          <SectionTitle
            title={"Best Product"}
            description={
              "How to create mobile-optimized videos in minutes. Not a designer,every team makes a lot of videos Can be trimmed. Take the first "
            }
          />
        </Grid>
        <Grid container> 
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={4} lg={4} className={classes.onMobile}>
              <BoxItem
                url={`../../img/best-image-0${item}.png`}
                onBestPr={true}
                urlIcon={`../../img/producticon-0${item}.png`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default BestProduct;
