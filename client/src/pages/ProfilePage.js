import React, { useState } from 'react'
import ProfilePageCSS from "../css/ProfilePage.module.css";
import { ProfileNav } from '../components/ProfileNav';
import { MyDetails } from '../components/myDetails/MyDetails';
import { MyAddressBook } from '../components/myAddressBook/MyAddressBook';
import { MyOrders } from '../components/myOrders/MyOrders';
import { MyProfileSettings } from '../components/profileSettings/MyProfileSettings';

export const ProfilePage = () => {
  const [choice, setChoice] = useState("My details");
  const handleChoice = (newChoice) => {
    setChoice(newChoice);
  };

  const renderProfileComponent = (newChoice) => {
    switch(newChoice) {
      case "My details":
        return <MyDetails/>;
      case "My address book":
        return <MyAddressBook/>
      case "My orders":
        return <MyOrders/>
      case "My profile settings":
        return <MyProfileSettings/>
    }
  }
  
  return (
    <div id={ProfilePageCSS.profilePage}>
        <h1>My Account</h1>
        <div id={ProfilePageCSS.profileContainer}>
            <ProfileNav
              handleChoice = {handleChoice}
            />
            {renderProfileComponent(choice)}
        </div>
    </div>
  )
}
