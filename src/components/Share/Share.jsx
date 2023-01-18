import {
  faMapMarker,
  faPhotoFilm,
  faSmile,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import person from "../../assets/person/1.jpeg";
import style from "./style.module.css";

export default function Share() {
  return (
    <>
      <div className={style.share}>
        <div className={style.wrapper}>
          <div className={style.top}>
            <img src={person} alt="" className={style.profileImg} />
            <input
              placeholder="What's in your mind ?"
              className={style.shareInput}
            />
          </div>
          <hr className={style.shareHr} />
          <div className={style.bottom}>
            <div className={style.shareOptions}>
              <div className={style.option}>
                <FontAwesomeIcon
                  className={style.shareIcon}
                  icon={faPhotoFilm}
                  color="tomato"
                />
                <span className={style.optionText}>Photo or Video</span>
              </div>
              <div className={style.option}>
                <FontAwesomeIcon
                  className={style.shareIcon}
                  icon={faTag}
                  color="blue"
                />
                <span className={style.optionText}>Tag</span>
              </div>
              <div className={style.option}>
                <FontAwesomeIcon
                  className={style.shareIcon}
                  icon={faMapMarker}
                  color="green"
                />
                <span className={style.optionText}>Location</span>
              </div>
              <div className={style.option}>
                <FontAwesomeIcon
                  className={style.shareIcon}
                  icon={faSmile}
                  color="goldenrod"
                />
                <span className={style.optionText}>Feeling</span>
              </div>
            </div>
            <button className={style.button}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
}
