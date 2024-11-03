import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
// import logo from '../../Assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 d-flex align-items-center">
            {/* <img
              src={logo}
              alt="Company Logo" */}
              {/* className="footer-logo"
            /> */}
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5>About Us</h5>
                <p>
                Welcome to Food Restaurant! We believe that dining is not just about enjoying a meal; it’s an experience that brings people together. Our passion for culinary excellence shines through in every dish we serve, reflecting our commitment to quality and flavor.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Products</a></li>
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Contact Information</h5>
                <p><PhoneOutlined /> +92 3265406507</p>
                <p><MailOutlined /> MuhammadAhmadAli411.web@gmail.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <a href="/" className="social-icon"><FacebookOutlined /></a>
                <a href="/" className="social-icon"><TwitterOutlined /></a>
                <a href="/" className="social-icon"><InstagramOutlined /></a>
                <a href="/" className="social-icon"><LinkedinOutlined /></a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center mt-3">
                <p>
                  &copy; {new Date().getFullYear()} Made by{" "}
                  <a href className="text-success" >AhmadAli</a>.
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
