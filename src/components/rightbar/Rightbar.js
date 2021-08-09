import React from "react";

import "./Rightbar.scss";

import RightFeed from '../rightFeed/RightFeed'

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <RightFeed />
            </div>
        </div>
    );
}