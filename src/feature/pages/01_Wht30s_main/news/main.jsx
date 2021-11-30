import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import SectionTitle from "../components/sectionTitle";
import BtnButton from "./../components/btn";
News.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "100px 0",
  },
  btn: {
    "&>button": {
      border: "solid 3px #020001",
      padding: "8px 25px",
    },
    justifyContent: "center",
  },
  news_obj: {
    "&>img": {
      width: "auto",
    },
    justifyContent: "flex-end",
    flexDirection: "column-reverse",
    alignItems: "flex-end",
    position: "absolute",
    top: "5%",
    right: "10%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  obj2: {
    margin: "10px",
  },
  w_20: {
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: "20%",
    position: "relative",
  },
  branName: {
    fontSize: "30px",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "5px 0",
  },
  issue: {
    fontSize: "55px",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "5px 0",
    lineHeight: "57px",
  },
  box: {
    backgroundColor: "#111",
  },
  img: {
    width: "auto",
  },
  img_obj: {
    position: "absolute",
    right: "-4%",
    bottom: "-16%",
    width: "36%",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img_obj4: {
    position: "absolute",
    left: "4%",
    top: "-4%",
    width: "25%",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img_obj5: {
    position: "absolute",
    right: "-8%",
    bottom: "-11%",
    width: "30%",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imgH: {
    height: "86%",
    [theme.breakpoints.down("sm")]: {
      height: "88%",
    },
  },
}));
function News(props) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, "bg-news")}>
      <Box>
        <Box className={clsx(classes.news_obj, "flex")}>
          <img
            className={classes.obj2}
            src="`../../img/news-object-02.png"
            alt=""
          />
          <img src="`../../img/news-object-03_2.png" alt="" />
        </Box>
        <SectionTitle
          title={"Happened’s issue"}
          description={
            "모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
          }
        />
        <Box className={clsx("flex", classes.btn)}>
          <BtnButton text={"see more"} />
        </Box>
      </Box>
      <Box style={{ border: "3px solid #111", marginTop: "50px" }}>
        <Grid container>
          <Grid
            item
            className={clsx(
              "bg-news-brand",
              classes.w_20,
              "flex",
              "flex-column",
              "flex-center"
            )}
          >
            <Typography
              className={clsx(
                "font-montserrat-extraBold",
                "black-text-brand",
                classes.issue
              )}
            >
              whpn issue
            </Typography>

            <img
              className={classes.img}
              src="`../../img/news-img-01.png"
              alt=""
            />
            <img
              className={clsx(classes.img, classes.img_obj)}
              src="`../../img/news-object-03.png"
              alt=""
            />
          </Grid>
          <Grid item className={classes.w_20}>
            <Box className={classes.box}>
              <Typography
                className={clsx(
                  "font-montserrat-extraBold",
                  "white",
                  classes.branName
                )}
              >
                b brand
              </Typography>
            </Box>
            <img
              className={classes.imgH}
              src="`../../img/news-img-04.png"
              alt=""
            />
            <img
              className={clsx(classes.img, classes.img_obj4)}
              src="`../../img/news-object-04.png"
              alt=""
            />
          </Grid>
          <Grid item className={classes.w_20}>
            <Box className={classes.box}>
              <Typography
                className={clsx(
                  "font-montserrat-extraBold",
                  "white",
                  classes.branName
                )}
              >
                c brand
              </Typography>
            </Box>
            <img
              className={classes.imgH}
              src="`../../img/news-img-03.png"
              alt=""
            />
          </Grid>
          <Grid item className={classes.w_20}>
            <Box className={classes.box}>
              <Typography
                className={clsx(
                  "font-montserrat-extraBold",
                  "white",
                  "bg-news-brand",
                  classes.branName
                )}
              >
                d brand
              </Typography>
            </Box>
            <img
              className={classes.imgH}
              src="`../../img/news-img-04.png"
              alt=""
            />
            <img
              className={clsx(classes.img, classes.img_obj5)}
              src="`../../img/news-object-05.png"
              alt=""
            />
          </Grid>
          <Grid item className={classes.w_20}>
            <Box className={classes.box}>
              <Typography
                className={clsx(
                  "font-montserrat-extraBold",
                  "white",
                  classes.branName
                )}
              >
                e brand
              </Typography>
            </Box>
            <img
              className={classes.imgH}
              src="`../../img/news-img-05.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default News;
