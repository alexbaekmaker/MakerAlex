import React, { useState } from 'react';
import './CreditCard.css';

function CreditCard() {
  const [isHidden, setHidden] = useState(true)
  return (
    <div className="creditcard">
      {/** divided into three main sections, top middle bottom */}
      <div className="navcard">
        {/** navcard is the top section of the credit card */}
        <p className="cardtext">Account balance</p>
        <div className="rightnavcard">
          {/** rightnavcard is so I can split the left and right half evenly with space-between */}
          <p className="cardtext">{!isHidden ? "Credit" : "Debit"}</p>
          <label className="switch">
            {/** the ovular button that flips from blue to grey */}
            <input type="checkbox" />
            <span className="slider round" onClick={() => setHidden(!isHidden)}></span>
          </label>
        </div>
      </div>
      <div className="maincard">
        {/** main section */}
        <h1 className="creditbalance">{!isHidden ? "$2,200" : "$1,899"}</h1>
      </div>
      <div className="botcard">
        {/** bottom section */}
        <div className="botcardleft">
          {/** split with the right side so I could space them evenly with space-between */}
          <h4 className="asterisk">****</h4>
          <h4 className="creditnumber">{!isHidden ? "4532" : "1234"}</h4>
        </div>

        <img src={!isHidden ? "https://cdn.iconscout.com/icon/free/png-512/mastercard-1527460-1298290.png" : "https://www.shareicon.net/data/256x256/2015/08/22/89115_card_512x512.png"} alt="" className="mastercard" />

      </div>
    </div>
  )
}

export default CreditCard;