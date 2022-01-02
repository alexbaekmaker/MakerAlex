import React from 'react';
import './PaymentLimit.css'

function PaymentLimit() {
  return (
    <div className="paymentlimit">
      {/** payment limit title above the bar, seperated into divs for spacing */}
      <div className="limitdesc">
        <p className="limittext">Internet payment limit</p>
        <p className="limittext2"><div className="blue">$ 1,200</div><div className="grey"> / 3,000</div></p>
      </div>
      <div className="bar">
        <div className="greybar">
          {/** grey section of the bar */}
          <div className="bluebar"></div>
          {/** blue section of the bar */}
        </div>
      </div>
    </div>
  )
}

export default PaymentLimit