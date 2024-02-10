import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logo-t1.png";
const Footer = () => {
  return (
    <div className="pb-[20px] pt-[20px] lg:py-[30px] px-[3%] lg:px-[5%] xl:px-[10%] bg-primary1">
      <div className="mt-[20px] lg:mt-[0px]  w-full lg:w-[50%]">
        <h4 className="text-[12px] md:text-[16px] text-white mb-[10px]">
          Subscribe to Newsletter
        </h4>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white py-[12px] px-[16px] h-[60px] rounded-l-[8px]  w-[70%]  text-[12px] md:text-[16px]"
          />
          <button className="hover:bg-indigo-600  h-[60px] bg-indigo-500 text-white rounded-r-[8px]  w-[30%] flex justify-center items-center">
            <FaArrowRightLong className="text-[30px]" />
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-[20px]">
        <div className="w-[100px] md:w-[120px] lg:hidden block">
          <img src={logo} />
        </div>

        <div className="flex gap-[30px] mt-[10px]">
          <div>
            <FaInstagram className="text-white text-[25px]" />
          </div>
          <div>
            <FaLinkedin className="text-white text-[25px]" />
          </div>
          <div>
            <FaFacebookF className="text-white text-[25px]" />
          </div>
          <div>
            <FaXTwitter className="text-white text-[25px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-[10px]">
        <div className="hidden lg:flex">
          <div className="w-[100px] md:w-[120px] hidden lg:block">
            <img src={logo} />
          </div>
        </div>
        <div className="mt-[20px] lg:mt-[0px]">
          <a href="dashboard.html">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white">
              Home
            </h3>
          </a>
          <a href="locations.html">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              About Us
            </h3>
          </a>
          <a href="report.html">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              Key Initiatives
            </h3>
          </a>
        </div>
        <div className="mt-[20px] lg:mt-[0px]">
          <a href="about.html">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white">
              News and Articles
            </h3>
          </a>
          <a href="careers.html">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              Contact Us
            </h3>
          </a>

          <a href="contact.html">
            <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[20px]">
              Privacy Policy
            </h3>
          </a>
        </div>
        <div className="mt-[30px] lg:mt-[0px]">
          <h3 className="font-[500] text-[12px] md:text-[16px] text-white">
            For more info contact us
          </h3>
          <h3 className="font-[500] text-[12px] md:text-[16px] text-white mt-[5px] border-b-[2px] border-white w-fit">
            info@actlip.org
          </h3>
        </div>
      </div>
      <div className="lg:flex items-end justify-between mt-[40px]">
        <div className="mt-[20px] lg:mt-[0px]">
          <h4 className="font-[500] text-[12px] md:text-[16px] text-white">
            © 2024 actlip. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
