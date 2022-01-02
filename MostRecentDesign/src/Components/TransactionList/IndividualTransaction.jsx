import React from 'react'
import './TransactionList.css'

function IndividualTransaction({ expense, otherParty, changeInMoney, date }) {
    // each individual transaction. Gets exported to the transactionlist
    return (
        <div className='transactionModule'>
            <div className='profileIcon'><p className='initial'>{otherParty.charAt(0).toUpperCase()}</p></div>
            <div className='paidsection'>{changeInMoney < 0 ? "You" : otherParty} paid {changeInMoney < 0 ? otherParty : "you"}</div>
            <p className={changeInMoney < 0 ? "red" : "green"}> {changeInMoney < 0 ? "-" : "+"}${Math.abs(changeInMoney)}</p>
            <div className='expense'>{expense}</div>
            <div className='date'>{date}</div>

        </div >
    )
}

export default IndividualTransaction