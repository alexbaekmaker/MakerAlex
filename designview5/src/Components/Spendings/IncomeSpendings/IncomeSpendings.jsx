import React, { useState } from 'react';
import './IncomeSpendings.css';
import LatestSpendings from '../LatestSpendings/LatestSpendings';
import Income from '../Income/Income';

function IncomeSpendings() {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(true);
  // two actives for detecting whether income or spendings is selected.

  return (
    <div className="incomespendings">
      <div className="incometabs">
        <div className={isActive ? "incometab" : "incometab2"} onClick={() => { setActive(true); setActive2(false) }} >
          {/** after either income or spendings is selected, the color will change to grey, and the section below will change to income, or spendings module */}
          <div className="leftincome">
            <div className="coolarrowtab">
              <img className="arrow1" src="https://image.flaticon.com/icons/png/512/60/60611.png" alt="" />
            </div>
          </div>
          <div className="rightincome">
            <p className="incometext" >Spendings</p>
            <h3 className="incomecost">$5,700</h3>
          </div>
        </div>
        <div className={isActive2 ? "incometab" : "incometab2"} onClick={() => { setActive2(true); setActive(false) }} >
          {/** after either income or spendings is selected, the color will change to grey, and the section below will change to income, or spendings module */}
          <div className="leftincome">
            <div className="coolarrow2">
              <img className="arrow2" src="https://image.flaticon.com/icons/png/512/60/60611.png" alt="" />
            </div>
          </div>
          <div className="rightincome">
            <p className="incometext">Income</p>
            <h3 className="incomecost">$2,254</h3>
          </div>
        </div>
      </div>
      {isActive ? <LatestSpendings /> : <Income />}
      {/** checks whether income or spendings is selected and shows whichever is selected */}
    </div>

  )
}

export default IncomeSpendings;