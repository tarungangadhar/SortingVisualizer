import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made with ❤️ by &copy;Tarun Gangadhar{" "}
          <a href="https://www.linkedin.com/in/vadaparthi-tarun-gangadhar-bb1b7b189/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>



  );
};

export default Footer;
