"use Client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="pb-8">
    <div className="text-center">
      <div className="flex gap-4 ml-36">
        <FaFacebookF className="h-8 w-8 text-white" />
        <FaInstagram className="h-8 w-8 text-white" />
        <IoLogoTwitter className="h-8 w-8 text-white" />
        <IoLogoYoutube className="h-8 w-8 text-white" />
      </div>
      <ul className="footer-links">
        <li className="footer-links-list">
          <a>Audio Description</a>
        </li>
        <li className="footer-links-list">
          <a>Help Center</a>
        </li>
        <li className="footer-links-list">
          <a>Gift Cards</a>
        </li>
        <li className="footer-links-list">
          <a>Media Center</a>
        </li>
        <li className="footer-links-list">
          <a>invester Relations</a>
        </li>
        <li className="footer-links-list">
          <a>Jobs</a>
        </li>
        <li className="footer-links-list">
          <a>Terms of Use</a>
        </li>
        <li className="footer-links-list">
          <a>Privacy</a>
        </li>
        <li className="footer-links-list">
          <a>Legal Notice</a>
        </li>
        <li className="footer-links-list">
          <a>Cookie Preferences </a>
        </li>
        <li className="footer-links-list">
          <a>Corporate Information </a>
        </li>
        <li className="footer-links-list">
          <a>Contact use </a>
        </li>
      </ul>
    </div>
     <button className="service-btn">Service code</button>
     </div>
  );
};
export default Footer;
