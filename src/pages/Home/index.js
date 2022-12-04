import React from "react";
import { useState, useContext } from "react";
import {Link} from 'react-router-dom'

// import { I18n } from "i18n-js";
// import translations from "./translations.json";
// // import { I18n } from 'i18n-js';
//   const i18n = new I18n(translations);


import "./style.css";
import Footer from "../../components/Footer";
function Home() {



  const [textBtn, setTextBtn] = useState("Đăng nhập");
  //state heading
  const [titleHeading, setTitleHeading] = useState(
    "Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác."
  );
  const [subTitle, setSubTitle] = useState(
    "Xem ở mọi nơi. Hủy bất kỳ lúc nào."
  );
  const [aboutTitle, setAboutTitle] = useState(
    "Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn."
  );
  const [textEmail, setTextEmail] = useState("Địa chỉ email");
  const [textSubmit, setTextSubmit] = useState("Bắt đầu");

  //state content tv
  const [headingContentTv, setHeadingContentTv] = useState(
    "Thưởng thức trên TV của bạn."
  );
  const [subHeadingContentTv, setSubHeadingContentTv] = useState(
    "Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác."
  );
  //state download content
  const [textDown, setTextDown] = useState(
    "Tải xuống nội dung để xem ngoại tuyến."
  );
  const [subTextDown, setSubTextDown] = useState(
    "Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem."
  );
  const [animationText, setAnimationText] = useState("Cậu bé mất tích");
  const [subAnimationText, setSubAnimationText] =
    useState("Đang tải xuống... ");

  //state watch on device
  const [titleOnDevice, setTitleOnDevice] = useState("Xem ở mọi nơi.");
  const [subTitleOnDevice, setSubTitleOnDevice] = useState(
    "Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV."
  );

  //state value kids
  const [titleKidsValue, setTitleKidsValue] = useState("Tạo hồ sơ cho trẻ em.");
  const [subTitleKidsValue, setSubTitleKidsValue] = useState(
    "Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn."
  );

  //state free phone
  const [titlePhone, setTitlePhone] = useState(
    "Bạn có điện thoại Android? Hãy thử gói dịch vụ miễn phí mới của chúng tôi!"
  );

  const [subTitlePhone, setSubTitlePhone] = useState(
    "Xem các bộ phim và chương trình truyền hình mới được tuyển chọn mà không cần cung cấp thông tin thanh toán!"
  );

  const [textDownApp, setTextDownApp] = useState("Tải ứng dụng");

  //state faq
  const [faqTitle, setFaqTitle] = useState("Câu hỏi thường gặp");

  //footer
  const [footerCountry, setFooterCountry] = useState("Netflix Việt Nam");

  return (
    <div className="intro">
      {/* heading */}
      <div className="heading">
        <div className="header">
          <div className="logo">Netflix</div>
          <div className="btn-container">
            <select 
             className="language-selector">
              <option value="VN">Tiếng Việt </option>
              <option value="EN">English</option>
            </select>
            <Link to='/login'> <button className="sign-in-btn">{textBtn}</button></Link>
           
          </div>
        </div>
        <div className="text-heading">
          <h1 className="title-heading">{titleHeading}</h1>
          <h2 className="sub-title">{subTitle}</h2>
          <div className="form">
            <h3 className="about-title">{aboutTitle}</h3>
            <div>
              {" "}
              <input className="input-email" placeholder={textEmail}></input>
              <button className="btn-submit">{textSubmit}</button>
            </div>
          </div>
        </div>

        <img
          className="img-heading"
          width="100%"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/b059ba59-7ad6-4d88-9d0d-41262a5072ff/VN-en-20221121-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
        <div className="gradient-img"></div>
      </div>

      {/* content tv */}
      <div className="content-tv">
        <div className="content-tv-container">
          <div className="text-content-tv">
            <h1 className="heading-content-tv">{headingContentTv}</h1>
            <h2 className="subheading-content-tv">{subHeadingContentTv}</h2>
          </div>
          <div className="animation-content-tv">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
            <div className="animation-video">
              <video
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                autoPlay
                playsInline
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="download-content">
        <div className="download-cover">
          <img
            className="poster"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          ></img>
          <div className="cover-animation">
            <div className="cover-animation-img">
              <img
                className="small-cover"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              ></img>
            </div>
            <div className="cover-animation-text">
              <div className="text-1">{animationText}</div>
              <div className="text-2">{subAnimationText}</div>
            </div>
            <div className="animation-custom">Animation</div>
          </div>
        </div>
        <div className="cover-title">
          <h1 className="cover-heading">{textDown}</h1>
          <h2 className="cover-subheading">{subTextDown}</h2>
        </div>
      </div>
      <div className="on-device-container">
        <div className="watch-on-device">
          <h1 className="title-on-device">{titleOnDevice}</h1>
          <h2 className="sub-title-on-device">{subTitleOnDevice}</h2>
        </div>
      </div>
      <div className="kids-value">
        <div className="kids-value-container">
          <div className="kids-img-container">
            <img
              className="kids-cover"
              src="https://occ-0-58-2218.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6"
            ></img>
          </div>
          <div className="kids-value-text">
            <h1 className="title-kids-value">{titleKidsValue}</h1>
            <h2 className="sub-title-kids-value">{subTitleKidsValue}</h2>
          </div>
        </div>
      </div>
      <div className="free-phone">
        <div className="free-phone-container">
          <div className="free-phone-text">
            <h1 className="title-free-phone">{titlePhone}</h1>
            <h2 className="sub-title-free-phone">{subTitlePhone}</h2>
            <a
              className="down-free-phone"
              href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient"
            >
              {textDownApp}
            </a>
          </div>
          <div className="free-phone-img">
            <img
              className="free-phone-cover"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"
            ></img>
          </div>
        </div>
      </div>
      <div className="faq">
        <div className="faq-container">
          <div className="faq-title-container">
            <h1>{faqTitle}</h1>
          </div>
          <ul className="faq-list">
            <li className="faq-list-item"></li>
          </ul>
          <div className="form">
            <h3 className="about-title">{aboutTitle}</h3>
            <div>
              {" "}
              <input className="input-email" placeholder={textEmail}></input>
              <button className="btn-submit">{textSubmit}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer></Footer>
        <br></br>
        <div className="footer-country">{footerCountry}</div>
      </div>
    </div>
  );
}
export default Home;
