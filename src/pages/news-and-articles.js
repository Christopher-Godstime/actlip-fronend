import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import news3 from "../assets/news3.webp";
import news4 from "../assets/news4.webp";
import news5 from "../assets/news5.webp";
import news6 from "../assets/news6.webp";

const NewsAndArticles = () => {
  const { auth } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);
  return (
    <div>
      <div className="px-[3%] lg:px-[5%] xl:px-[10%] pt-[30px] md:pt-[50px] pb-[50px] bg-gray-100">
        <div className="flex relative justify-end  w-[100%] md:w-[400px]">
          <input
            className="pr-[14px] pl-[40px] py-[12px] w-full focus:outline-none border-b-2 border-primary focus:border-primary  focus:border-2 rounded-t-[6px] text-gray-900 text-[12px]"
            placeholder="Search news"
          />
          <CiSearch className="absolute top-1/2 left-[14px] transform  -translate-y-1/2" />
        </div>
        <div className="md:flex justify-between mt-[30px] border-double border-b-[3px] border-black pb-[10px]">
          <h4 className="text-[12px] font-[600] font-pirate">
            Tuesday, February 6, 2024
          </h4>
          <div className="text-[30px] md:text-[40px] font-[600]">
            News And Articles
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[20px] gap-x-[40px] mt-[30px]">
          <div className="grid grid-cols-2 gap-[10px] pb-[20px] border-b-[2px] border-gray-300">
            <div>
              <img src={news3} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[22px] font-[600] leading-[25px]">
                A Russian Bank Account May Offer Clues to a North Korean Arms
                Deal
              </h4>
              <h4 className="text-gray-800 text-[14px] mt-[10px] line-clamp-2">
                Moscow may be trying to help Pyongyang access the international
                financial system in exchange for missiles, U.S.-allied
              </h4>
              <h4 className="text-[12px] font-[600] mt-[10px]">
                Tuesday, February 6, 2024
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[10px] pb-[20px] border-b-[2px] border-gray-300">
            <div>
              <img src={news4} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[22px] font-[600] leading-[25px]">
                Discontent and Defiance on the Road to Pakistan’s Election
              </h4>
              <h4 className="text-gray-800 text-[14px] mt-[10px] line-clamp-2">
                The Grand Trunk Road is buzzing with talk of this week’s vote,
                and of the country’s future.
              </h4>
              <h4 className="text-[12px] font-[600] mt-[10px]">
                Tuesday, February 6, 2024
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[10px] pb-[20px] border-b-[2px] border-gray-300">
            <div>
              <img src={news5} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[22px] font-[600] leading-[25px]">
                Discontent and Defiance on the Road to Pakistan’s Election
              </h4>
              <h4 className="text-gray-800 text-[14px] mt-[10px] line-clamp-2">
                The Grand Trunk Road is buzzing with talk of this week’s vote,
                and of the country’s future.
              </h4>
              <h4 className="text-[12px] font-[600] mt-[10px]">
                Monday, February 5, 2024
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[10px] pb-[20px] border-b-[2px] border-gray-300">
            <div>
              <img src={news6} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[22px] font-[600] leading-[25px]">
                Republican-Led House to Vote on Impeaching Mayorkas Over Border
              </h4>
              <h4 className="text-gray-800 text-[14px] mt-[10px]  line-clamp-2">
                With Democrats solidly opposed, Republicans can only lose two of
                their own members in Tuesday’s vote to impeach Alejandro
              </h4>
              <h4 className="text-[12px] font-[600] mt-[10px]">
                Sunday, February 4, 2024
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;
