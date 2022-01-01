
import React, { useState } from 'react';
import './SendMoney.css';
import PeopleList from './PeopleList'

function SendMoney() {
  const [isActive, setActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedFile, setSelectedFile] = useState("https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg");
  const [personData, setPersonData] = useState([])

  // after the submit button is clicked, this function is called, which adds the firstname, lastname, and pfp to an array, which is then 
  // sent to the PeopleList class
  const addPerson = () => {
    setPersonData((previousState) => [...previousState, { firstName: firstName, lastName: lastName, img: selectedFile }])
    console.log(personData)
    console.log("hi")
  }
  // saves the submitted file and converts it to a url
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className="sendmoney">
      <div className="sendmoneynav">
        <h4 className="sendmoneytitle">Send money to</h4>
        {/** form that pops up if someone were to be payed, doesn't have actual functionality yet, but it takes in a name and a file, for the first/last name and their profile picture */}
        <form className='submitform' onSubmit={(e) => { setActive(false); e.preventDefault(); setActive(false) }} hidden={!isActive}>
          <div className='nameinputs'>
            <input className="nameinput" type="text" placeholder="Firstname" hidden={!isActive} onChange={(e) => { setFirstName(e.target.value); console.log(firstName) }} />
            <input className="nameinput" type="text" placeholder="Lastname" hidden={!isActive} onChange={(e) => { setLastName(e.target.value); console.log(lastName) }} />
          </div>
          <label className='label' hidden={!isActive} for="profileinput">Select Profile Picture</label>
          <input type="file" className="fileinput" hidden={true} id="profileinput" onChange={(e) => onImageChange(e)}></input>
          <input type="submit" value="Add" className="addbutton" hidden={!isActive} onClick={(e) => { addPerson(); e.preventDefault(); setActive(!isActive) }}></input>
        </form>
        <button className="plus" onClick={() => { setActive(!isActive) }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png" alt="" className="plussign" /></button>
      </div>
      <div className="people">
        {/** location for the people modules with their data also takes in the array of people objects */}
        <PeopleList personData={personData} />
      </div>
    </div >

  )
}

export default SendMoney;