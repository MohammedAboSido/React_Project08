import {
  faBookmark,
  faBriefcase,
  faCalendar,
  faFeed,
  faGraduationCap,
  faMessage,
  faPlayCircle,
  faQuestionCircle,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import friend1 from "../../assets/person/2.jpeg";
import friend2 from "../../assets/person/3.jpeg";
import friend3 from "../../assets/person/4.jpeg";
import friend4 from "../../assets/person/5.jpeg";
import style from "./style.module.css";
export default function SideBar() {
  return (
    <>
      <div className={style.sideBar}>
        <div className={style.wrapper}>
          <ul className={style.list}>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faFeed} />
              <span className={style.listItemText}>Feed</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faMessage} />
              <span className={style.listItemText}>Chats</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faPlayCircle} />
              <span className={style.listItemText}>Videos</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faUserGroup} />
              <span className={style.listItemText}>Groups</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faBookmark} />
              <span className={style.listItemText}>Bookmarks</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faQuestionCircle} />
              <span className={style.listItemText}>Questions</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faBriefcase} />
              <span className={style.listItemText}>Jobs</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faCalendar} />
              <span className={style.listItemText}>Events</span>
            </li>
            <li className={style.listItem}>
              <FontAwesomeIcon className={style.icon} icon={faGraduationCap} />
              <span className={style.listItemText}>Courses</span>
            </li>
          </ul>
          <button className={style.button}>Show More</button>
          <hr className={style.sideBarHr} />
          <ul className={style.friendList}>
            <li className={style.friend}>
              <img src={friend1} alt="" className={style.friendImg} />
              <span className={style.friendName}>Jane Doe</span>
            </li>
            <li className={style.friend}>
              <img src={friend2} alt="" className={style.friendImg} />
              <span className={style.friendName}>Jane Doe</span>
            </li>
            <li className={style.friend}>
              <img src={friend3} alt="" className={style.friendImg} />
              <span className={style.friendName}>Jane Doe</span>
            </li>
            <li className={style.friend}>
              <img src={friend4} alt="" className={style.friendImg} />
              <span className={style.friendName}>Jane Doe</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
