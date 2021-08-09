import React from 'react'

import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
    return (
      <>
        <div className="subHomeContainer">
            <Feed/>
            <Rightbar/>
        </div>
      </>
    )
  }