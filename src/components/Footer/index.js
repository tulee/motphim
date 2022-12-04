import { useState } from "react";

import "./style.css";
import footers from "../../data/footer";

function Footer() {
  const [footerHeading, setFooterHeading] = useState(
    "Bạn có câu hỏi? Liên hệ với chúng tôi."
  );
  return (
    <div className="footer-container">
      <a
        className="footer-heading"
        href="https://help.netflix.com/vi/contactus"
      >
        {footerHeading}
      </a>
      <br></br>
      <div className="item-container">
        {footers.map((item) => {
          return (
            <div className="item" key={item.id}>
              <a className="item" href={item.link}>
                {item.question}
              </a>
            </div>
          );
        })}
      </div>
      <div className="btn-container-footer">
        <select className="language-selector-footer">
          <option value="VN">Tiếng Việt </option>
          <option value="EN">English</option>
        </select>
      </div>
      <br></br>
    </div>
  );
}
export default Footer;
