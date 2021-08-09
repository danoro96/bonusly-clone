import React from "react";

import "./redeem.scss";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";

export default function Redeem({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">
              {post?.desc}
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <img className="postImg" src={post.link} alt="" />
        </div>
      </div>
    </div>
  );
}