import React from 'react'
import IndividualTransaction from './IndividualTransaction'

function TransactionList({ userInput }) {
    const transactions = [
        { expense: "Christmas gift", changeInMoney: -99.99, otherParty: "Seong Gi-Hun", date: "12/25/21" },
        { expense: "tournament winnings", changeInMoney: 1000, otherParty: "HGHS Esports", date: "12/1/21" },
        { expense: "lost a bet", changeInMoney: -100, otherParty: "Abed Nadir", date: "5/20/21" },
        { expense: "food", changeInMoney: -12, otherParty: "Norman Osborn", date: "5/6/21" }
    ]
    var searchResult = transactions.filter((transaction) => transaction.otherParty.toLowerCase().includes(userInput)
        || transaction.expense.toLowerCase().includes(userInput)
        || transaction.date.includes(userInput))
    if (searchResult.length == 0 && userInput == null) {
        searchResult = transactions
    }
    return (
        searchResult.map((transaction) => <IndividualTransaction date={transaction.date} expense={transaction.expense} changeInMoney={transaction.changeInMoney} otherParty={transaction.otherParty} />)
    )
}

export default TransactionList