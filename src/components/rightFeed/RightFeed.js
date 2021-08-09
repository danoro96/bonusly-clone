import React from "react";

import Redeem from "../redeem/Redeem";
import "./rightFeed.scss";
import { Redeemers } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="bonusBoxWrapper">
          <h3 className="h2-color"> You have 1,200 dabs to redeem. </h3>
          <button className="buttonCSS"> Pick a reward </button>
        </div>
        {Redeemers.map((p) => (
          <Redeem key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}