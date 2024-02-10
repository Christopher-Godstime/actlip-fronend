import React, { useState } from "react";
import Avatar from "../../Avatar";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { GLOBALTYPES } from "../../../redux/actions/globalTypes";
import { deletePost } from "../../../redux/actions/postAction";
import { BASE_URL } from "../../../utils/config";

function CardHeader({ post }) {
  const [show, setShow] = useState(false);

  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch((state) => state);

  const history = useHistory();

  const handleEditPost = () => {
    dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } });
  };

  const handleDeletePost = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost({ post, auth, socket }));
      return history.push("/");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${BASE_URL}/login/post/${post._id}`);
  };

  return (
    <div className="relative px-[3%] lg:px-[5%] xl:px-[10%] mb-[20px]">
      <button
        onClick={() => setShow(!show)}
        className="px-[20px] py-[10px] rounded-[8px] bg-primary1 text-white text-[14px] hover:bg-indigo-800 w-full md:w-[200px] mt-[20px] md:mt-[0px]"
      >
        Menu
      </button>

      {show ? (
        <div className="absolute z-40 bg-indigo-100 border border-gray-200 -top-[130px] w-[150px] p-[10px] rounded-[3px] grid grid-cols-1 gap-[20px]">
          <div
            className="flex text-[15px] items-center font-normal cursor-pointer "
            onClick={handleEditPost}
          >
            <span className="material-icons mr-[5px] text-[20px]">create</span>
            <h2>Edit post</h2>
          </div>
          <div
            className="flex text-[15px] items-center font-normal  cursor-pointer"
            onClick={handleDeletePost}
          >
            <span className="material-icons mr-[5px] text-[20px]">
              delete_outline
            </span>
            <h2>Remove post</h2>
          </div>

          <div
            className="flex text-[15px] items-center font-normal cursor-pointer"
            onClick={handleCopyLink}
          >
            <span className="material-icons mr-[5px] text-[20px]">
              content_copy
            </span>
            <h2>Copy Link</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CardHeader;
