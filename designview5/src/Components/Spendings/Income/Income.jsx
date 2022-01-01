import React from 'react';
import './Income.css'

function Income() {
    return (
        <div className="bottommain">
            {/** divided into top section with the title, and the list of income history */}
            <h2 className="botmidtitle">Income History</h2>
            <div className="midnav">
                <div className="applenav">
                    {/** each "applenav" class is a group containing the image of the method of income, the name of it, the amount, and an arrow button */}
                    <div className="leftapplenav">
                        <div className="image1"></div>
                        <h4 className="applestore">Stocks</h4>
                    </div>
                    <div className="rightapplenav">
                        <h4 className="applecost"> $100.50</h4>
                        <button className="arrow"></button>
                    </div>
                </div>
                <div className="applenav">
                    <div className="leftapplenav">
                        <div className="image2"></div>
                        <h4 className="applestore">Donations</h4>
                    </div>
                    <div className="rightapplenav">
                        <h4 className="applecost"> $50.00</h4>
                        <button className="arrow"></button>
                    </div>
                </div>
                <div className="applenav">
                    <div className="leftapplenav">
                        <div className="image3"></div>
                        <h4 className="applestore">Lottery</h4>
                    </div>
                    <div className="rightapplenav">
                        <h4 className="applecost"> $100,000.29</h4>
                        <button className="arrow"></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Income;