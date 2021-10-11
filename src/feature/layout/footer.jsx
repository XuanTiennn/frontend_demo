import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

Footer.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    padding: "0",
  },
}));
function Footer(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Typography class="font-montserrat-semibold">
              what happened
            </Typography>
            <ul className={classes.list}>
              {[
                "[공지] 개인 정보 처리 방침 변경 사전 안내",
                "[공지] 29CM 강남 스토어 영업 종료",
                "[공지] 개인 정보 처리 방침 변경 사전 안내",
                "[공지] iOS 10 이하 버전 지원 중단 안내",
                "[공지] 개인 정보 처리 방침 변경 사전 안내",
              ].map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container>
              <Grid item lg={3}>
                <Typography class="font-montserrat-semibold">
                  about us
                </Typography>
                <ul className={classes.list}>
                  {[" 회사 소개", "인재 채용", "상시 할인 혜택"].map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item lg={3}>
                <Typography class="font-montserrat-semibold">
                  my order
                </Typography>
                <ul className={classes.list}>
                  {[" 회사 소개", "인재 채용", "상시 할인 혜택"].map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item lg={3}>
                <Typography class="font-montserrat-semibold">
                  my account
                </Typography>
                <ul className={classes.list}>
                  {[" 회사 소개", "인재 채용", "상시 할인 혜택"].map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item lg={3}>
                <Typography class="font-montserrat-semibold">help</Typography>
                <ul className={classes.list}>
                  {[" 회사 소개", "인재 채용", "상시 할인 혜택"].map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid className="flex-between" item lg={8}>
            <Typography>
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <a href="#">
              <img
                style={{ width: "30px", height: "30px" }}
                src="../../../img/snsicon-01.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                style={{ width: "30px", height: "30px" }}
                src="../../../img/snsicon-02.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                style={{ width: "30px", height: "30px" }}
                src="../../../img/snsicon-03.png"
                alt=""
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
