import React, { useState } from "react";
import Avatar from "../../Avatar";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { GLOBALTYPES } from "../../../redux/actions/globalTypes";
import { deletePost } from "../../../redux/actions/postAction";
import { BASE_URL } from "../../../utils/config";

function CardFooter({ post }) {
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
    <div className="card_header font-poppins">
      <div className="flex">
        <div className="card_name ml-[5px]">
          <small className="text-gray-500">
            {moment(post.createdAt).fromNow()}
          </small>
        </div>
      </div>

      <div className="relative" onClick={() => setShow(!show)}>
        <span className=" cursor-pointer" id="moreLink">
          menu
        </span>

        {show ? (
          <div className="absolute z-40 bg-white border border-gray-200 right-0 w-[150px] p-[10px] rounded-[3px]">
            <div
              className="flex text-[15px] items-center font-normal  mb-[15px]"
              onClick={handleEditPost}
            >
              <h2>Edit post</h2>
            </div>
            <div
              className="flex text-[15px] items-center font-normal  mb-[15px]"
              onClick={handleDeletePost}
            >
              <h2>Remove post</h2>
            </div>

            <div
              className="flex text-[15px] items-center font-normal "
              onClick={handleCopyLink}
            >
              <h2>Copy Link</h2>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CardFooter;
