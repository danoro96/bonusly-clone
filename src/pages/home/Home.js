import React from 'react'

import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
    return (
        <div className="homeContainer">
            
            <Sidebar />
            
            <div className="subHomeContainer">
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    )
  }