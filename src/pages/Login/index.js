import { useState } from "react";

import "./style.css";
import Footer from "../../components/Footer";
function Login() {
  //input
  const [userInput, setUserInput] = useState("Email hoặc số điện thoại");
  const [passwordInput, setPasswordInput] = useState("Mật khẩu");
  return (
    <div className="login">
      <div className="heading none">
        <div className="header">
          <div className="logo">Netflix</div>
        </div>
        <img
          className="img-heading fh"
          width="100%"
          cover
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/b059ba59-7ad6-4d88-9d0d-41262a5072ff/VN-en-20221121-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
        <div className="login-content">
          <div className="form-container">
            <div className="form-body">
              <h1>Đăng nhập</h1>
              <div className="login-form">
                <input
                  type="text"
                  className="user-name"
                  placeholder={userInput}
                ></input>
                <br></br>
                <input
                  placeholder={passwordInput}
                  type="password"
                  className="password"
                ></input>
                <br></br>
                <button className="btn-login">Đăng nhập</button>
                <br></br>
                <input className="checkbox" type="checkbox"></input>
                <label className="remember">Ghi nhớ tôi</label>
                <a
                  className="login-click-help"
                  href="https://www.netflix.com/vn/LoginHelp"
                >
                  Bạn cần sự trợ giúp?
                </a>
              </div>
              <div className="login-other">
                <div className="login-signup-now">
                  Bạn mới tham gia Netflix?{" "}
                  <a href="https://www.netflix.com/vn/" className="sign-up">
                    Đăng ký ngay.
                  </a>
                </div>
                <div className="recaptcha-term-of-user">
                  Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không
                  phải là robot.<a>Tìm hiểu thêm.</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gradient-img"></div>
      </div>

    </div>
  );
}
export default Login;
