
import React from "react";
import { NavLink } from "react-router-dom";
import footerCity from "../assets/footerCity.PNG";

const Footer = () => {
  return (
    <footer className="bg-primary items-baseline justify-center text-white  pb-8 mt-auto font-jiji">
      {/* Cityscape image */}
      <div className="w-full bg-[#ebf2f7] flex justify-center">
        <img
          src={footerCity}
          alt="Cityscape"
          className="w-full max-w-screen-xl"
        />
      </div>

      <div className="pl-20 mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-left mb-10 mt-6">
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              {[
                {
                  text: "About Jiji",
                  link: "https://jiji.ng/about.html",
                },
                {
                  text: "We are hiring!",
                  link: "https://jiji.ng/hiring.html",
                },
                {
                  text: "Terms & Conditions",
                  link: "https://jiji.ng/rules.html",
                },
                {
                  text: "Privacy Policy",
                  link: "https://jiji.ng/privacy.html",
                },
                {
                  text: "Billing Policy",
                  link: "https://jiji.ng/billing-policy.html",
                },
                {
                  text: "Candidate Privacy Policy",
                  link: "https://jiji.ng/jiji-pages/candidate-privacy-policy",
                },
                {
                  text: "Cookie Policy",
                  link: "https://jiji.ng/jiji-pages/cookie-policy",
                },
                {
                  text: "Copyright Infringement Policy",
                  link: "https://jiji.ng/jiji-pages/copyright-infringement-policy",
                },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className="hover:text-blue-900 transition"
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                {
                  text: "support@jiji.ng",
                  link: "mailto:support@jiji.ng",
                },
                {
                  text: "Safety tips",
                  link: "https://jiji.ng/safety-tips.html",
                },
                {
                  text: "Contact Us",
                  link: "https://jiji.ng/contacts.html",
                },
                {
                  text: "FAQ",
                  link: "https://jiji.ng/faq",
                },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className="hover:text-blue-900 transition"
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Apps */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Our Apps</h3>
            {/* Apple Store */}
            <a
              href="https://apps.apple.com/us/app/jiji-nigeria/id966165025"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on App Store"
                className="w-30 hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=ng.jiji.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="w-30 hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Our Resources */}
          <div>
            <h3 className="font-bold mb-4">Our Resources</h3>
            <ul className="space-y-2">
              {[
                {
                  text: "Jiji on FB",
                  link: "https://www.facebook.com/Jiji.Nigeria",
                },
                {
                  text: "Our Instagram",
                  link: "https://www.instagram.com/jijinigeria",
                },
                {
                  text: "Our YouTube",
                  link: "https://www.youtube.com/channel/UCvAyphNspDQMFnp7g57jH-g",
                },
                {
                  text: "Our Twitter",
                  link: "https://twitter.com/jijinigeria",
                },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.link.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="hover:text-blue-900 transition"
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Hot Links */}
          <div>
            <h3 className="font-bold mb-4">Hot Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="https://jiji.africa/"
                  className="hover:text-blue-900 transition"
                >
                  Jiji Africa
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Flags Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          {[
            {
              text: "Kenya",
              site: "https://jiji.co.ke/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/kenya.svg",
            },
            {
              text: "Uganda",
              site: "https://jiji.ug/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/uganda.svg",
            },
            {
              text: "Tanzania",
              site: "https://jiji.co.tz/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/tanzania.svg",
            },
            {
              text: "Ghana",
              site: "https://jiji.com.gh/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/ghana.svg",
            },
            {
              text: "Ethiopia",
              site: "https://jiji.com.et/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/ethiopia.svg",
            },
            {
              text: "Senegal",
              site: "https://jiji.sn/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/senegal.svg",
            },
            {
              text: "Côte d'Ivoire",
              site: "https://jiji.co.ci/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/civ.svg",
            },
            {
              text: "Bangladesh",
              site: "https://jiji-bd.com/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/bangladesh.svg",
            },
            {
              text: "Sri Lanka",
              site: "https://jiji.lk/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/srilanka.svg",
            },
            {
              text: "Congo",
              site: "https://jiji.cd/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/congo.svg",
            },
            {
              text: "Rep. of Congo",
              site: "https://jiji.cg/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/repcongo.svg",
            },
            {
              text: "Pakistan",
              site: "https://milay.pk/",
              flag: "https://assets.jijistatic.net/static/img/footer-anchors/pakistan.svg",
            },
          ].map((country, index) => (
            <NavLink
              key={index}
              to={country.site}
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <img
                src={country.flag}
                alt={country.text}
                className="w-8 h-8 rounded-full border border-white hover:scale-105 transition-transform"
              />
            </NavLink>
          ))}
        </div>
        {/* Copyright */}
        <div className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Jiji.ng
        </div>
      </div>
    </footer>
  );
};

export default Footer;
