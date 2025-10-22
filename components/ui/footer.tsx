import React from "react";
import "../../index.css";
import "../../typography.css";
import { IMAGES, ICONS } from "../../figma-assets";
import FacebookIcon from "../../icon/FacebookIcon";
import TwitterIcon from "../../icon/TwitterIcon";
import InstagramIcon from "../../icon/InstagramIcon";
import Linkedin from "../../icon/Linkedin";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center w-full">
        {/* Main Footer Content */}
        <div className="bg-components-footer-background-surface w-full py-[55px] px-400 md:px-[80px]">
          <div className="flex flex-col md:flex-row items-start justify-between max-w-[1464px] w-full mx-auto gap-600 md:gap-0">
            {/* Logo and Social Links */}
            <div className="flex flex-col gap-[20px] items-start footer-column">
              <div className="h-[24px] w-[96.297px] overflow-hidden">
                <img
                  src={ICONS.logoSvg}
                  alt="Boifiok Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="w-full h-full bg-components-footer-text-navitems opacity-80 hidden"></div>
              </div>
              <div className="flex flex-col gap-[27px] items-start w-[187.562px]">
                <div className="flex gap-[9px] items-center w-full">
                  <div className="w-[40px] h-[40px] bg-gray-100 rounded-[20px] flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors">
                    <FacebookIcon />
                  </div>
                  <div className="w-[40px] h-[40px] bg-gray-100 rounded-[20px] flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors">
                    <TwitterIcon />
                  </div>
                  <div className="w-[40px] h-[40px] bg-gray-100 rounded-[20px] flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors">
                    <InstagramIcon />
                  </div>
                  <div className="w-[40px] h-[40px] bg-gray-100 rounded-[20px] flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors">
                    <Linkedin />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-600 flex-1">
              {/* Company Info */}
              <div className="flex flex-col gap-[20px] items-start w-full md:w-[101.69px]">
                <p className="typography-body-xsmall-md text-components-footer-text-label uppercase">
                  Company
                </p>
                <div className="flex flex-col gap-[16px] items-start w-full">
                  <p className="typography-body-small text-components-footer-text-navitems">
                    About Us
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Blog
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    FAQs
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col gap-[20px] items-start w-full md:w-[108.411px]">
                <p className="typography-body-xsmall-md text-components-footer-text-label uppercase">
                  Quick Links
                </p>
                <div className="flex flex-col gap-[16px] items-start w-full">
                  <p className="typography-body-small text-components-footer-text-navitems">
                    How to Buy
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Become a Seller
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-col gap-[20px] items-start w-full md:w-[131.026px]">
                <p className="typography-body-xsmall-md text-components-footer-text-label uppercase">
                  Categories
                </p>
                <div className="flex flex-col gap-[16px] items-start w-full">
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Grains
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Tubers
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Baking Items
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Fresh Foods
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Beverage
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Sea Food
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Livestock
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    Fruits
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-[20px] items-start w-full md:w-[275.73px]">
                <div className="flex flex-col gap-[20px] items-start w-full">
                  <p className="typography-body-xsmall-md text-components-footer-text-label uppercase">
                    contact us
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    help@boifiok.ng
                  </p>
                  <p className="typography-body-small text-components-footer-text-navitems">
                    +234 913 557 2245
                  </p>
                  <div className="flex flex-col gap-[4px] items-start w-full">
                    <p className="typography-body-small text-components-footer-text-navitems font-medium w-full">
                      Plot 6, Unit C, Ewet Housing Estate, Uyo Nigeria
                    </p>
                    <div className="typography-body-small text-components-footer-text-navitems">
                      <p className="mb-0">
                        Monday – Friday: 09:00AM – 09:00 PM
                      </p>
                      <p className="mb-0">Saturday: 09:00AM – 07:00PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background */}
        <div
          style={{
            backgroundImage: `url(${IMAGES.footerBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[83px] md:h-[241.143px] w-full relative"
        >
          {/* Decorative footer background pattern from Figma */}
        </div>

        {/* Footer Bottom */}
        <div className="bg-components-footer-background-surface w-full py-[35px] px-400 md:px-[80px]">
          <div className="flex flex-col gap-[10px] items-center max-w-[1464px] w-full mx-auto">
            <div className="flex flex-col md:flex-row h-auto md:h-[28.625px] items-start md:items-center justify-between w-full gap-400 md:gap-0">
              <p className="typography-body-small text-components-footer-text-label">
                2025 Boifiok.ng. All rights reserved.
              </p>
              <div className="flex gap-[4px] items-center">
                <div className="h-[28.625px] w-[136.81px]">
                  <p className="typography-body-small text-components-footer-text-label">
                    Terms & Conditions
                  </p>
                </div>
                <div className="h-[27.75px] w-[125px] flex items-center">
                  <div className="w-[4px] h-[4px] bg-components-footer-text-label rounded-[2px] mx-[10px]"></div>
                  <p className="typography-body-small text-components-footer-text-label">
                    Privacy Notice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
