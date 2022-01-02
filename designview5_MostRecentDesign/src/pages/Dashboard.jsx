import React from 'react'
import './Dashboard.css';
import LeftBar from '../Components/LeftBar/LeftBar';
import CreditCard from '../Components/CreditCard/CreditCard';
import PaymentLimit from '../Components/PaymentLimit/PaymentLimit';
import IncomeSpendings from '../Components/Spendings/IncomeSpendings/IncomeSpendings';
import ExpensesChart from '../Components/ExpensesChart/ExpensesChart';
import SendMoney from '../Components/SendMoney/SendMoney';
import ScheduledPayments from '../Components/ScheduledPayments/ScheduledPayments';
import SettingsButton from '../Components/SettingsButton/SettingsButton';

function Dashboard() {
  // for this project, I divided the card interface into three parts, a left collumn, a middle collumn, and a right collumn. 
  // This is the broadest component, setting up the divs for all the smaller componenets

  return (
    <div className="Pages">
      {/**pages is the whole grey space */}
      <LeftBar />
      {/**LeftBar is the left column */}
      <div className="midcolumn">
        {/** div to give a width within the middle column */}
        <div className="width">
          {/** search bar */}
          <div className="search">
            <input className="input1" type="text" placeholder="Search" />
            <button className="magnify"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="" className="glass" /></button>
          </div>
          {/** from credit card to the income history/spendings history */}
          <div className="dashboard">
            <h1 className="dashy">Dashboard</h1>
            <CreditCard />
            <PaymentLimit />
            <IncomeSpendings />
          </div>
        </div>
      </div>
      {/** right column */}
      <div className="rightcolumn">
        <div className="width2">
          {/** the settings/notifications and the pie chart section */}
          <div className="tophalfright">
            <SettingsButton />
            <ExpensesChart />
          </div>
        </div>
        {/** the send money to and scheduled payments section */}
        <div className="bottomright">
          <SendMoney />
          <ScheduledPayments />
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
