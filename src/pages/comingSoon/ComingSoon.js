import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
    return (
        <div className="homeContainer">
            
            <Sidebar />
            
            <div className="subHomeContainer">
              <div className="post">
                <div className="postWrapper">
                  <h1> Coming Soon!</h1>
                </div>
              </div>
            </div>
        </div>
    )
  }