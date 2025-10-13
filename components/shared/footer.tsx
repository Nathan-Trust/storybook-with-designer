import svgPaths from "@/assets/svg";
import FacebookIcon from "@/icon/FacebookIcon";
import InstagramIcon from "@/icon/InstagramIcon";
import LinkedInIcon from "@/icon/Linkedin";
import TwitterIcon from "@/icon/TwitterIcon";
import React from "react";

function BoifiokLogo() {
  return (
    <svg
      className="block h-6 w-24"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 97 24"
    >
      <g>
        <path
          d={svgPaths.p2b090940}
          fill="currentColor"
          className="text-brand-default"
          style={{
            fill: "", // handled by Tailwind class
            fillOpacity: "1",
          }}
        />
        <path
          d={svgPaths.pd9d680}
          fill="currentColor"
          className="text-brand-12"
          style={{
            fill: "", // handled by Tailwind class
            fillOpacity: "1",
          }}
        />
        <path
          clipRule="evenodd"
          d={svgPaths.p2a5d4500}
          fill="currentColor"
          className="text-brand-default"
          fillRule="evenodd"
          style={{
            fill: "", // handled by Tailwind class
            fillOpacity: "1",
          }}
        />
      </g>
    </svg>
  );
}

export default function Footer() {
  const companyLinks = ["About Us", "Blog", "FAQs"];
  const quickLinks = ["How to Buy", "Become a Seller"];
  const categories = [
    "Grains",
    "Tubers",
    "Baking Items",
    "Fresh Foods",
    "Beverage",
    "Sea Food",
    "Livestock",
    "Fruits",
  ];

  return (
    <footer className="w-full bg-white">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-8 md:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
            {/* Logo and Social Links */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <BoifiokLogo />
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-surface hover:bg-brand-3 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <div className="text-text-headings hover:text-brand-10">
                    <FacebookIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-surface hover:bg-brand-3 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <div className="text-text-headings hover:text-brand-10">
                    <TwitterIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-surface hover:bg-brand-3 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <div className="text-text-headings hover:text-brand-10">
                    <InstagramIcon />
                  </div>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-surface hover:bg-brand-3 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <div className="text-text-headings hover:text-brand-10">
                    <LinkedInIcon />
                  </div>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-text-body text-xs uppercase mb-5">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-headings text-sm hover:text-brand-10 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-text-body text-xs uppercase mb-5">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-headings text-sm hover:text-brand-10 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-text-body text-xs uppercase mb-5">
                Categories
              </h3>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="text-text-headings text-sm hover:text-brand-10 transition-colors"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-text-body text-xs uppercase mb-5">
                Contact Us
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:help@boifiok.ng"
                  className="text-text-headings text-sm hover:text-brand-10 transition-colors block"
                >
                  help@boifiok.ng
                </a>
                <a
                  href="tel:+2349135572245"
                  className="text-text-headings text-sm hover:text-brand-10 transition-colors block"
                >
                  +234 913 557 2245
                </a>
                <div className="space-y-3">
                  <p className="text-text-headings text-sm">
                    Plot 6, Unit C, Ewet Housing Estate, Uyo Nigeria
                  </p>
                  <div className="text-text-headings text-sm space-y-1">
                    <p>Monday – Friday: 09:00AM – 09:00 PM</p>
                    <p>Saturday: 09:00AM – 07:00PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="w-full h-48 md:h-60 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: "url('/footer/boifiok-footer-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Bottom Footer */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-6 md:py-8 bg-background border-t border-surface-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-body text-sm text-center md:text-left">
              {new Date().getFullYear()} Boifiok.ng. All rights reserved.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a
                href="#"
                className="text-text-body text-sm hover:text-brand-10 transition-colors"
              >
                Terms & Conditions
              </a>
              <div className="w-1 h-1 rounded-full bg-text-body" />
              <a
                href="#"
                className="text-text-body text-sm hover:text-brand-10 transition-colors"
              >
                Privacy Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
