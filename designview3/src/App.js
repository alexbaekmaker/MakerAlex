import React from 'react';
import './App.css';

function App() {
  return (
    <div className="border">
    <div className="App">
      <div className="bigbox">
        <div className="navbarbig">
          <div className="leftnavbarbig">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" className="hamburger"/>
            <h3 className="fintimes">FINTIMES</h3>
          </div>
          <div className="rightnavbarbig">
            <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="" className="magnify"/>
          </div>
        </div>
        <div className="main">
          <h1 className="toptitle">Everything</h1>
          <h1 className="midtitle">about investing plus way more.</h1>
          <div className="mainbot">
          <p className="description">Introducing the first all-in-one tool to help you put your financial assets in the best possible opportunities.</p>
          <button className="signup">SIGN UP</button>
          </div>
        </div>
      </div>

      <div className="smallboxes">
    <div className="topbox">
      <div className="navbartop">
        <div className="leftnavbar">
          <h2 className="team">Team</h2>
        </div>
        <div className="rightnavbar">
          <img src="https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png" alt="" className="person1"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Clinton_Circle.png" alt="" className="person2"/>
        </div>
      </div>
      <div className="maintop">
        <p className="description2">
          CHECK OUR EXPERTS
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_Right_Arrow.png" alt="" className="arrow"/>
      </div>
    </div>

    <div className="middlebox">
      <div className="navbarmid">
        <div className="leftnavbar">
          <h2 className="strategy">Strategy</h2>
        </div>
        <div className="rightnavbar">
          <button className="play"></button>
        </div>
      </div>
      <div className="mainmid">
        <p className="description2">
          INVESTMENT PROCESS
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_Right_Arrow.png" alt="" className="arrow"/>
      </div>
    </div>

    <div className="bottombox">
      <div className="navbarbot">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/1280px-Wired_logo.svg.png" alt="" className="wired"/>
      </div>
      <div className="mainbot2">
        <p className="description2">OUR PARTNERS</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_Right_Arrow.png" alt="" className="arrow"/>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
