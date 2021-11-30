import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Hidden, Typography, makeStyles } from "@material-ui/core";
import SectionTitle from "../components/sectionTitle";
import clsx from "clsx";
import BtnButton from "../components/btn";
BranStory.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0",
  },
  obj: {
    position: "absolute",
  },
  obj01: {
    top: "-171px",
    right: "-19px",
    zIndex: "1",
    width: "183px",
    height: "208px",
  },
  obj02: {
    top: "-100%",
    left: "-40%",
    zIndex: "1",
    width: "147px",
    height: "134px",
  },
  obj03: {
    top: "-90%",
    left: "-7%",
    zIndex: "1",
    width: "148px",
    height: "165px",
  },
  obj4: {
    bottom: "30%",
    right: "-20%",
    zIndex: "1",
    height: "100%",
  },
  obj5: {
    bottom: "5%",
    right: "-8%",
    zIndex: "1",
    width: "112%",
  },
  obj6: {
    bottom: "5%",
    left: "0",
    zIndex: "1",
    width: "61%",
    height: "78%",
  },
  obj7: {
    bottom: "8%",
    right: "-10%",
    zIndex: "1",
    width: "50%",
    height: "60%",
  },
  box_wrap: {
    position: "relative",
    zIndex: "2",
  },
  btn: {
    "&>button": {
      border: "solid 3px #020001",
      padding: "8px 25px",
      [theme.breakpoints.down("md")]: {
        color: "white",
        border: "solid 3px #fff",
      },
    },

    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: { padding: "0 50px" },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "13%",
      right: "3%",
      maxWidth: "45%",
    },
  },
  text_title: {
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      color: "white",
    },
    [theme.breakpoints.down("sm")]: { fontSize: "18px" },
  },
  text_description: {
    fontSize: "16px",
    margin: "15px 0",
    [theme.breakpoints.down("md")]: {
      color: "white",
    },
    [theme.breakpoints.down("sm")]: { fontSize: "14px" },

  },
}));
function BranStory(props) {
  const classes = useStyles();
  return (
    <Box className={clsx("bg-branstory", classes.root)}>
      <SectionTitle
        title={"Brand Story"} 
        description={
          "모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
        }
      />
      <Grid container>
        <Grid mdDown item lg={2} className={classes.box_wrap}>
          <Hidden mdDown>
            <img
              className={clsx(classes.obj01, classes.obj)}
              src={`../../img/object-01.png`}
              alt="img left"
            />
            <Grid container>
              <img
                className={clsx(classes.obj6, classes.obj)}
                src={`../../img/object-06.png`}
                alt="img left"
              />

              <img
                className={clsx(classes.obj7, classes.obj)}
                src={`../../img/object-07.png`}
                alt="img left"
              />
            </Grid>
          </Hidden>
        </Grid>
        <Grid item lg={8} className={classes.box_wrap}>
          <Box className="bran-center">
            <Hidden smDown>
              <img src="../../img/window.png " alt="img center" />
            </Hidden>
            <Box className={clsx(classes.text)}>
              <Typography
                className={clsx(
                  "font-montserrat-extraBold",
                  "black-btn",
                  classes.text_title
                )}
              >
                What Happened’s Brand story
              </Typography>
              <Typography
                className={clsx(
                  "font-notoSans-light",
                  "black-btn",
                  classes.text_description
                )}
              >
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </Typography>
              <Box className={classes.btn}>
                <BtnButton text={"see more"} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} className={classes.box_wrap}>
          <Hidden mdDown>
            <img
              className={clsx(classes.obj02, classes.obj)}
              src={`../../img/object-02.png`}
              alt="img right"
            />
            <img
              className={clsx(classes.obj03, classes.obj)}
              src={`../../img/object-03.png`}
              alt="img right"
            />{" "}
            <Grid container>
              <img
                className={clsx(classes.obj4, classes.obj)}
                src={`../../img/object-04.png`}
                alt="img right"
              />
              <img
                className={clsx(classes.obj5, classes.obj)}
                src={`../../img/object-05.png`}
                alt="img right"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BranStory;
