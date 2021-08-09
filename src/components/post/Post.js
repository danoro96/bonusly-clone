import React from "react";

import "./post.scss";
import { MoreVert } from "@material-ui/icons";

import postPhoto from '../../assets/post/1.jpeg'

import {
  ThumbUp,
  Favorite,
  Comment,
} from "@material-ui/icons";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={postPhoto}
              alt=""
            />
            <span className="postUsername">
              {post.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.gifUrl} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">

            <span className="postPlus"> <Favorite className="postIcon" /> Add on </span>
              
            <span className="postPlus"> <Comment className="postIcon" /> Comment </span>
              
            <span className="postPlus"> <ThumbUp className="postIcon" /> React </span>

          </div>
        </div>

        <div>
          <input className="commentInput" placeholder="Add a comment!" />
        </div>
      </div>
    </div>
  );
}