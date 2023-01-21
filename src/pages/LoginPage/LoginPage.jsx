import React from "react";
import style from "./style.module.css";
export default function LoginPage() {
  return (
    <>
      <div className={style.login}>
        <div className={style.loginWrapper}>
          <div className={style.loginLeft}>
            <h3 className={style.loginLogo}>Social</h3>
            <span className={style.loginDesc}>
              Connect with friends and the world around you on Social
            </span>
          </div>
          <div className={style.loginRight}>
            <div className={style.loginBox}>
              <input className={style.loginInput} placeholder="Email" />
              <input className={style.loginInput} placeholder="Password" />
              <button className={style.loginButton}>Log In</button>
              <span className={style.loginForgot}>Forgot Password?</span>
              <button className={style.loginRegisterButton}>
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
