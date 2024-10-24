import React from "react"; 
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import './footer.css'; 

const Footer = () => {
  const icons = [
    <BsTwitter key="twitter" />, // Adding a unique key prop for each icon
    <BsInstagram key="instagram" />,
    <BsFacebook key="facebook" />,
    <FaSnapchatGhost key="snapchat" />,
  ];

  return (
    <div className="footer">
      <div className="footer-social">
        {icons.map((icon) => (
          <div key={icon.key} className="footer-icon">
            {icon}
          </div>
        ))}
      </div>
      <div className="footer-copyright">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;