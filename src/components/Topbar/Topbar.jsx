import {
  faBell,
  faMessage,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import person from "../../assets/person/1.jpeg";
import style from "./style.module.css";
export default function Topbar() {
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <span className={style.logo}>Social</span>
        </div>
        <div className={style.center}>
          <div className={style.searchBar}>
            <FontAwesomeIcon icon={faSearch} className={style.searchIcon} />
            <input
              placeholder="Search for friend, post or video"
              className={style.searchInput}
            />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.links}>
            <span className={style.link}>HomePage</span>
            <span className={style.link}>Timeline</span>
          </div>
          <div className={style.icons}>
            <div className={style.icon}>
              <FontAwesomeIcon icon={faUser} className={style.awesomeIcon} />
              <span className={style.iconBadge}>1</span>
            </div>
            <div className={style.icon}>
              <FontAwesomeIcon icon={faMessage} className={style.awesomeIcon} />
              <span className={style.iconBadge}>2</span>
            </div>
            <div className={style.icon}>
              <FontAwesomeIcon icon={faBell} className={style.awesomeIcon} />
              <span className={style.iconBadge}>1</span>
            </div>
          </div>
          <img src={person} className={style.topbarImg} alt="user" />
        </div>
      </div>
    </>
  );
}
