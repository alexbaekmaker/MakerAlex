import React, { useState } from 'react';
import './SettingsButton.css'

function SettingsButton() {
    const [isSettingsClicked, setSettingsClicked] = useState(false)
    const [isNotisClicked, setNotisClicked] = useState(false)
    const [notisChecked, setNotisChecked] = useState(false)


    return (
        <div className="rightnav">
            {/** notifications and settings buttons when one is clicked, it closes out the other*/}
            <form className="settingstab" hidden={!isSettingsClicked}>{/** for a real app these options would probably be links */}<option className="optionSettings">Account</option><option className="optionSettings">Orders</option></form>
            <button className="settings" onClick={() => { setSettingsClicked(!isSettingsClicked); setNotisClicked(false) }}><img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" alt="" className="gear" /></button>
            <form className="notistab" hidden={!isNotisClicked}><option className="optionSettings">Notifications</option></form>
            <button className={!notisChecked ? "notifications" : "notificationsX"} onClick={() => { setNotisClicked(!isNotisClicked); setNotisChecked(true); setSettingsClicked(false) }}><img src="https://img.icons8.com/ios/452/appointment-reminders--v1.png" alt="" className="noti" /> </button>
            <form hidden={!isNotisClicked}></form>
        </div>
    )
}

export default SettingsButton;