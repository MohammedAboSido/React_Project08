import React from "react";
import style from "./style.module.css";
export default function CloseFriend({ profilePicture, username }) {
  return (
    <>
      <li className={style.friend}>
        <img src={profilePicture} alt="" className={style.friendImg} />
        <span className={style.friendName}>{username}</span>
      </li>
    </>
  );
}
