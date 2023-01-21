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
import CloseFriend from "./CloseFriend";
import { Users } from "./Data";
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
            {Users.map((item) => (
              <CloseFriend
                profilePicture={item.profilePicture}
                username={item.username}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
