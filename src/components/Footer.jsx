import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import footerCity from "../assets/footerCity.PNG";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pb-8 mt-auto font-jiji">
      {/* Cityscape image */}
      <div className="max-h-full w-full bg-[#ebf2f7] flex justify-center">
        <img src={footerCity} alt="Cityscape" />
      </div>
      <div className="container mx-auto px-4">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left mb-8">
          <div>
            <h3 className="font-bold mb-4">About us</h3>
            <ul className="gap-x-1">
              <NavLink to="/" className="hover:text-blue-900">
                <li>About Jiji</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>We are hiring!</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Terms & Conditions</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Privacy Policy</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Billing Policy</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Candidate Privacy Policy</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Cookie Policy</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Copyright Infringement Policy</li>
              </NavLink>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <NavLink to="/" className="hover:text-blue-900">
                <li>support@jiji.ng</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Safety tips</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Contact Us</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>FAQ</li>
              </NavLink>
            </ul>
          </div>
          <div className="md:col-span-1 flex flex-col items-center">
            <h3 className="font-bold mb-4">Our apps</h3>
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center mb-4"
            >
              <div className="flex items-center justify-center ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="applestore"
                />
              </div>
            </a>
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="googleplay"
                  className="w-35"
                />
              </div>
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-4">Our resources</h3>
            <ul className="space-y-2">
              <NavLink to="/" className="hover:text-blue-900">
                <li>Our blog</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Jiji on FB</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Our Instagram</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Our YouTube</li>
              </NavLink>
              <NavLink to="/" className="hover:text-blue-900">
                <li>Our Twitter</li>
              </NavLink>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hot links</h3>
            <ul className="space-y-2">
              <NavLink to="/" className="hover:text-blue-900">
                <li>Jiji Africa</li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* Flags */}
        <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/kenya.svg"
              alt="kenya"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/uganda.svg"
              alt="uganda"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/tanzania.svg"
              alt="tanzania"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/ghana.svg"
              alt="ghana"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/ethiopia.svg"
              alt="ethiopia"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/senegal.svg"
              alt="senegal"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/civ.svg"
              alt="côte d'ivoire"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/bangladesh.svg"
              alt="bangladesh"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/srilanka.svg"
              alt="sri lanka"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/congo.svg"
              alt="congo"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/repcongo.svg"
              alt="Congo"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="https://assets.jijistatic.net/static/img/footer-anchors/pakistan.svg"
              alt="pakistan"
              className="w-8 h-8 rounded-full border border-white"
            />
          </NavLink>
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-sm mt-4">
          &copy; {new Date().getFullYear()} Jiji.ng
        </div>
      </div>
    </footer>
  );
};

export default Footer;
