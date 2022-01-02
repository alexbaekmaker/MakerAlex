import React, { useState } from 'react';
import './ExpensesChart.css'

function ExpensesChart() {
  var month;
  const [expense, setExpense] = useState({
    expense1: "Transport", cost1: 120.20,
    expense2: "OnlineShopping", cost2: 1200.00,
    expense3: "Restaurant", cost3: 250.40,
    key: 1
  })

  const MonthlyInfo = [{
    expense1: "Transport", cost1: 120.20,
    expense2: "OnlineShopping", cost2: 1200.00,
    expense3: "Restaurant", cost3: 250.40,
    key: 1
  },

  {
    expense1: "Subscriptions", cost1: 42.50,
    expense2: "Spikeball", cost2: 29.99,
    expense3: "Seahawks Tickets", cost3: 205.00,
    key: 2
  },
  {
    expense1: "Food", cost1: 300.00,
    expense2: "Christmas", cost2: 10000,
    expense3: "Dog stuff", cost3: 250.22,
  }]
  // finds the ratio of each cost and sets it to a corresponding size of the pie chart which is styled in piechartStyle
  const conicGradient = ("conic-gradient(black " +
    ((expense.cost1 / (expense.cost2 + expense.cost3 + expense.cost1)) * 360) + "deg, " + "yellow " + ((expense.cost1 / (expense.cost2 + expense.cost3 + expense.cost1)) * 360)
    + "deg " + (((expense.cost2 / (expense.cost1 + expense.cost3 + expense.cost2)) * 360) + ((expense.cost1 / (expense.cost2 + expense.cost3)) * 360)) + "deg, " + "blue " +
    (((expense.cost2 / (expense.cost1 + expense.cost3 + expense.cost2)) * 360) + ((expense.cost1 / (expense.cost2 + expense.cost3 + expense.cost1)) * 360)) + "deg " + 360 + "deg)")
  const piechartStyle = {
    width: "150px",
    height: "150px",
    background: conicGradient,
    borderRadius: "50%",
    marginLeft: "20px"
  }

  const getData = (e) => {
    // here i would get the expense data for whatever month it would be from some place, probably the transactions tab, which would
    // be sent into ExpensesChart as props (an array of objects for each month) and then set into the expense value

    setExpense(MonthlyInfo[e.currentTarget.value])
    console.log(conicGradient)
  }
  return (

    <div className="righttop">
      {/** top right section below the settings and notifications icon */}
      <div className="rightnav2">
        {/** split into top and bottom sections for spaceing */}
        <h2 className="expenses">Expenses statistics</h2>
        <select onChange={(e) => { getData(e) }} name="" id="" value={month}>

          <option value={0} >January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
      </div>

      <div className="chart">
        {/** split into left and right sections for spacing */}
        <div className='pil' style={piechartStyle}></div>
        <div className="itemsofchart">
          <ul className="blackdot">
            {/** each unordered list has a blackdot, the type of expense, and the cost */}
            <li className="oneone" ><span><div className="transport">{expense.expense1}</div><div className="transportcost">${expense.cost1}</div></span></li>
          </ul>
          <ul className="yellowdot">
            <li className="twotwo"><span><div className="transport">{expense.expense2}</div><div className="transportcost">${expense.cost2}</div></span></li>
          </ul>
          <ul className="bluedot">
            <li className="threethree"><span><div className="transport">{expense.expense3}</div><div className="transportcost">${expense.cost3}</div></span></li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default ExpensesChart