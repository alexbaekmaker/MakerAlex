import React from 'react'
import './ScheduledPayments.css'
// each company of the list of Scheduled payments, includes an image, company name, and rate, (these are also the parameters)
function Company({ rate, company, img }) {
  return (
    <div id={company} className="company1">
      <h5 className="rate">${rate}/m</h5>
      <div className="bottomcompany">
        <img src={img} alt="" className="companylogo" />
        <p className="company">{company}</p>
      </div>
    </div>
  )
}

export default Company
