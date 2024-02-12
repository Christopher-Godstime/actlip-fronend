import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import Carousel from "../components/Carousel";
import moment from "moment";
import { getNewsApi } from "../utils/fetchData";
import { POST_TYPES } from "../redux/actions/postAction";
import LoadIcon from "../assets/loading.gif";
import axios from "axios";
import LoadMoreBtn from "../components/LoadMoreBtn";
import news3 from "../assets/news3.webp";
import news4 from "../assets/news4.webp";
import news5 from "../assets/news5.webp";
import news6 from "../assets/news6.webp";

const NewsAndArticles = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await axios.get(
          `http://localhost:5000/api/news?limit=${limit}&page=${page}`
        );
        setData([...data, ...response.data.posts]);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (auth.token) history.push("/login");
  }, [auth.token, history]);

  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);
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
            {formattedDate}
          </h4>
          <div className="text-[30px] md:text-[40px] font-[600]">
            News And Articles
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[20px] gap-x-[40px] mt-[30px]">
          {data.map((post) => (
            <div
              key={post._id}
              className="grid grid-cols-1 md:grid-cols-2 gap-[10px] pb-[20px] border-b-[2px] border-gray-300"
            >
              <Link to={`news-and-articles/${post._id}`}>
                {post.images.length > 0 && (
                  <Carousel images={post.images} id={post._id} />
                )}
              </Link>
              <div className="flex flex-col">
                <h4 className="text-[18px] md:text-[22px] font-[600] leading-[28px] line-clamp-2">
                  {post.head}
                </h4>
                <h4 className="text-gray-800 text-[14px] mt-[10px] line-clamp-4 leading-[22px]">
                  {post.content}
                </h4>
                <h4 className="text-[12px] font-[600] mt-auto pt-[20px]">
                  {moment(post.createdAt).format("dddd, MMMM D, YYYY")}
                </h4>
              </div>
            </div>
          ))}
          <div className="mt-[30px]">
            {load && ( // Display load icon when loading
              <div className="w-[40px] mx-auto">
                <img src={LoadIcon} alt="loading" />
              </div>
            )}
            {page < totalPages && !load && (
              <button
                className="btn btn-dark mx-auto d-block mb-[20px]"
                onClick={handleLoadMore}
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;
