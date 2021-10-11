import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import SectionTitle from "../components/sectionTitle";
import BtnButton from "./../components/btn";
import clsx from "clsx";
Video.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    
  },
  img_obj: {
    width: "auto",
    position: "absolute",
  },
  obj1: {
    top: "320%",
    left: "0",
  },
  obj3: {
    top: "260%",
    left: "-15%",
    zIndex: "-1",
  },
  obj4: {
    top: "0%",
    left: "-88%",
    marginTop: "-10%",
  },
  obj5: {
    top: "0%",
    left: "12%",
  },
  obj6: {
    top: "50%",
    right: "15%",
    zIndex: "3",
  },
  obj7: {
    top: "21%",
    right: "7%",
    zIndex: "2",
  },
  obj8: {
    bottom: "-290%",
    right: "-50%",
    zIndex: "4",
  },
  obj9: {
    top: "21%",
    right: "-41%",
    zIndex: "3",
  },
  video: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
      zIndex: "5",
      position: "absolute",
    },
    position: "unset",
    width: "100%",
  },
  block_center: {
    [theme.breakpoints.up("md")]: {
      padding: "100px 0",
    },
    padding: "0 10px",
  },
  btn: {
    "&>button": {
      border: "solid 3px #020001",
      padding: "8px 25px",
    },
    justifyContent: "center",
  },
  oth:{
    [theme.breakpoints.up('md')]:{
      height:'900px'
    }
  }
}));
function Video(props) {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, "video")}>
      <Hidden mdDown>
        <img
          className={clsx(classes.img_obj, classes.obj5)}
          src="../../img/video-object-05.png"
          alt=""
        />
        <img
          className={clsx(classes.img_obj, classes.obj6)}
          src="../../img/video-object-06.png"
          alt=""
        />
        <img
          className={clsx(classes.img_obj, classes.obj7)}
          src="../../img/video-object-07.png"
          alt=""
        />
      </Hidden>
      <Box>
        <SectionTitle
          className="font-montserrat-extraBold"
          title={"what happened"}
          description={
            "How to create mobile-optimized videos in minutes. Not a designer,every team makes a lot of videos Can be trimmed. Take the first "
          }
        />
        <Box className={clsx("flex", classes.btn)}>
          <BtnButton text={"see more"} />
        </Box>
      </Box>
      <Box className={classes.oth} style={{ marginTop: "50px" }}>
        <Grid container>
          <Grid item lg={3} style={{ position: "relative" }}>
            <Hidden mdDown>
              <img
                className={clsx(classes.img_obj, classes.obj4)}
                src="../../img/video-object-04.png"
                alt=""
              />
            </Hidden>
          </Grid>
          <Grid
            item
            lg={6}
            style={{ position: "relative" }}
            className={classes.block_center}
          >
            <img
              className={clsx(classes.img_obj, classes.video)}
              src="../../img/video.png"
              alt=""
            />

            <Hidden mdDown>
              <img
                className={clsx(classes.img_obj, classes.obj3)}
                src="../../img/video-object-03.png"
                alt=""
              />
            </Hidden>
            <Hidden mdDown>
              <img
                className={clsx(classes.img_obj, classes.obj1)}
                src="../../img/video-object-01.png"
                alt=""
              />
            </Hidden>
          </Grid>
          <Grid item lg={3} style={{ position: "relative" }}>
            <Hidden mdDown>
              <img
                className={clsx(classes.img_obj, classes.obj8)}
                src="../../img/video-object-08.png"
                alt=""
              />

              <img
                className={clsx(classes.img_obj, classes.obj9)}
                src="../../img/video-object-09.png"
                alt=""
              />
            </Hidden>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Video;
