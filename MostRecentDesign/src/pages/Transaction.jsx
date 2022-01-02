import React, { useState } from 'react';
import LeftBar from '../Components/LeftBar/LeftBar';
import './Dashboard.css'
import TransactionList from '../Components/TransactionList/TransactionList';
import '../Components/TransactionList/TransactionList.css'

function Transaction() {
    const [userInput, setInput] = useState()
    const [transList, setList] = useState(<TransactionList />)

    const keyHandler = (e) => {
        if (e.key == 'Enter') {
            setList(<TransactionList userInput={userInput} />)
        }
    }
    return (
        <div className="Pages">
            <LeftBar />
            <div className="midcolumn2">
                {/** div to give a width within the middle column */}
                <div className="widthNotCentered">
                    {/** search bar */}
                    <div className="search">
                        <input onKeyPress={(e) => keyHandler(e)} className="input1" type="text" placeholder="Search" onChange={(e) => { setInput(e.target.value); setList(<TransactionList userInput={e.target.value.toLowerCase()} />) }} />
                        <button className="magnify" onClick={() => { setList(<TransactionList userInput={userInput} />) }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="" className="glass" /></button>
                    </div>
                    <h2 className='title1'>Recent Transactions</h2>
                    {transList}

                </div>
            </div>



        </div>
    )
}

export default Transaction