import React from "react";
import preson1 from "../../assets/person/1.jpeg";
import preson2 from "../../assets/person/2.jpeg";
import preson3 from "../../assets/person/3.jpeg";
import preson4 from "../../assets/person/4.jpeg";
import preson5 from "../../assets/person/5.jpeg";
import preson6 from "../../assets/person/6.jpeg";
import style from "./style.module.css";
export default function RightProfileBar() {
  return (
    <>
      <div className={style.rightProfileBar}>
        <div className={style.wrapper}>
          <h4 className={style.rightBarTitle}>User Information</h4>
          <div className={style.rightBarInfo}>
            <div className={style.rightBarInfoItem}>
              <span className={style.rightBarInfoKey}>City:</span>
              <span className={style.rightBarInfoValue}>New York</span>
            </div>
            <div className={style.rightBarInfoItem}>
              <span className={style.rightBarInfoKey}>From:</span>
              <span className={style.rightBarInfoValue}>Madrid</span>
            </div>
            <div className={style.rightBarInfoItem}>
              <span className={style.rightBarInfoKey}>Relationship:</span>
              <span className={style.rightBarInfoValue}>Single</span>
            </div>
          </div>
          <h4 className={style.rightBarTitle}>User friends</h4>
          <div className={style.rightBarFollowings}>
            <div className={style.rightBarFollowing}>
              <img
                className={style.rightBarFollowingImg}
                src={preson1}
                alt=""
              />
              <span className={style.rightBarFollowingName}>John Carter</span>
            </div>
            <div className={style.rightBarFollowing}>
              <img
                className={style.rightBarFollowingImg}
                src={preson2}
                alt=""
              />
              <span className={style.rightBarFollowingName}>John Carter</span>
            </div>
            <div className={style.rightBarFollowing}>
              <img
                className={style.rightBarFollowingImg}
                src={preson3}
                alt=""
              />
              <span className={style.rightBarFollowingName}>John Carter</span>
            </div>
            <div className={style.rightBarFollowing}>
              <img
                className={style.rightBarFollowingImg}
                src={preson4}
                alt=""
              />
              <span className={style.rightBarFollowingName}>John Carter</span>
            </div>
            <div className={style.rightBarFollowing}>
              <img
                className={style.rightBarFollowingImg}
                src={preson5}
                alt=""
              />
              <span className={style.rightBarFollowingName}>John Carter</span>
            </div>
            <div className={style.rightBarFollowing}>
              <img
                className={style.rightBarFollowingImg}
                src={preson6}
                alt=""
              />
              <span className={style.rightBarFollowingName}>John Carter</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
