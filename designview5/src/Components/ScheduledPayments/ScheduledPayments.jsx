import React, { useState } from 'react';
import './ScheduledPayments.css';
import CompanyList from './CompanyList';


function ScheduledPayments() {
  const [indexValue, setIndexValue] = useState(0)
  const [companyList, setCompanyList] = useState(<CompanyList indexValue={indexValue} />)

  return (
    <div className="scheduledpayment">
      <div className="schedulednav">
        {/** the top section of the scheduledpayment area */}
        <h4 className="sendmoneytitle2">Scheduled payments</h4>
        {/** the image is the arrow button */}
        <div className="twoButtons">
          {/** two arrow buttons that let you scroll through the list of payments */}
          <button className="plus" onClick={() => { setIndexValue(prevState => prevState - 1); setCompanyList(<CompanyList indexValue={indexValue - 1} />) }}><img src="https://static.thenounproject.com/png/1513337-200.png" style={{ transform: "scaleX(-1)" }} className="arrowbot" alt="" /></button>
          <button className="plus" onClick={() => { setIndexValue(prevState => prevState + 1); setCompanyList(<CompanyList indexValue={indexValue + 1} />) }}><img src="https://static.thenounproject.com/png/1513337-200.png" className="arrowbot" alt="" /></button>
        </div>
      </div>
      <div className="paymentcompanies">
        {/** where all the company modules go */}
        {companyList}
      </div>
    </div>

  )
}
export default ScheduledPayments;