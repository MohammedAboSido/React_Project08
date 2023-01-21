import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import heart from "../../assets/heart.png";
import likepng from "../../assets/like.png";
import style from "./style.module.css";

export default function Post({
  date,
  profilePicture,
  username,
  desc,
  photo,
  like,
  comment,
}) {
  const [liked, setLiked] = useState(like);
  const [isLike, setisLike] = useState(false);

  const likeHandler = () => {
    isLike ? setLiked((prev) => prev - 1) : setLiked((prev) => prev + 1);
    setisLike((prev) => !prev);
  };

  return (
    <>
      <div className={style.post}>
        <div className={style.wrapper}>
          <div className={style.top}>
            <div className={style.topLeft}>
              <img src={profilePicture} alt="" className={style.profileImg} />
              <span className={style.postUsername}>{username}</span>
              <span className={style.posDate}>{date}</span>
            </div>
            <div className={style.topRight}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>
          <div className={style.center}>
            <span className={style.postText}>{desc}</span>
            <img src={photo} alt="" className={style.postImg} />
          </div>
          <div className={style.bottom}>
            <div className={style.postBottomLeft}>
              <img
                className={style.likeIcon}
                src={heart}
                alt=""
                onClick={likeHandler}
              />
              <img
                className={style.likeIcon}
                src={likepng}
                alt=""
                onClick={likeHandler}
              />
              <span className={style.postLikeCounter}>
                {" "}
                {liked} people like it
              </span>
            </div>
            <div className={style.postBottomRight}>
              <span className={style.postCommentText}>{comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
