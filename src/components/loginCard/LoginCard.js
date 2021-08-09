import React from "react";

import "./loginCard.scss";

import { useHistory } from "react-router-dom";

export default function Login() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = '/home'; 
    history.push(path);
  }

  return (
    <div>
      <div className="share">
        <h2 className="shareWrapper"> Login </h2>
        <div className="shareWrapper">
          <div className="shareMiddle">
          <input
              placeholder="Username"
              className="shareInput"
              type="email"
            />

            <input
              placeholder="Password"
              className="shareInput"
              type="password"
            />
          </div>
          <hr className="shareHr"/>
          <div className="shareBottom">
            <button className="shareButton" onClick={routeChange}> Login </button>
          </div>
        </div>
      </div>
    </div>
  );
}
