import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import heart from "../../assets/heart.png";
import like from "../../assets/like.png";
import person1 from "../../assets/person/1.jpeg";
import post1 from "../../assets/post/1.jpeg";
import style from "./style.module.css";

export default function Post() {
  return (
    <>
      <div className={style.post}>
        <div className={style.wrapper}>
          <div className={style.top}>
            <div className={style.topLeft}>
              <img src={person1} alt="" className={style.profileImg} />
              <span className={style.postUsername}>Safak Kocaglu</span>
              <span className={style.posDate}>5 mins ago</span>
            </div>
            <div className={style.topRight}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>
          <div className={style.center}>
            <span className={style.postText}>It's my first post</span>
            <img src={post1} alt="" className={style.postImg} />
          </div>
          <div className={style.bottom}>
            <div className={style.postBottomLeft}>
              <img className={style.likeIcon} src={heart} alt="" />
              <img className={style.likeIcon} src={like} alt="" />
              <span className={style.postLikeCounter}>32 people like it</span>
            </div>
            <div className={style.postBottomRight}>
              <span className={style.postCommentText}>9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
