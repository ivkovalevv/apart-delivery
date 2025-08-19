import React, { useState, useContext } from "react";
import "./profilecard.css"
import { observer } from "mobx-react-lite";
import EditSVG from "../../components/SVG/EditSVG"
import ConfirmSVG from "../SVG/ConfirmSVG";
import NameInput from "../UI/NameInput/NameInput";
import PhoneInput from "../UI/PhoneInput/PhoneInput";
import { Context } from "../../index";
import { update } from "../../http/userAPI";

const ProfileCard = observer(() => {
    const { user } = useContext(Context);
    const [isEditable, setIsEditable] = useState(false);

    const [profileName, setProfileName] = useState(user.user.userName || 'Гость');
    const [profileTel, setProfileTel] = useState(user.user.userTel || '+71235467890');
    const [isValidName, setIsValidName] = useState(true);
    const [isValidPhoneValue, setIsValidPhoneValue] = useState(true);
    const [isCorrectPhoneValue, setIsCorrectPhoneValue] = useState(true);
    const [userImage, setUserImage] = useState(null);

    const updateUser = async (id, userName, userTel, userImage) => {
        try {
          let data;
          data = await update(id, userName.trim(), userTel);
          user.setUser(data);
          setIsEditable(false);
        } catch (e) {
          alert(e.response.data.message);
        }
      };
    

    const checkValidity = () => {
        console.log(userImage)
        if (profileName.trim() === "" || profileName.length <= 2) {
            setIsValidName(false);
        }
        if (profileTel === "") {
            setIsValidPhoneValue(false);
        }
        if (!(profileTel === "") && profileTel.length < 13) {
            setIsCorrectPhoneValue(false);
        }
        if (
            profileName.trim() !== "" &&
            profileName.length > 2 &&
            profileTel !== "" &&
            profileTel.length === 13
        ) {
            updateUser(user.user.id, profileName, profileTel, userImage)
        }
    };


    return (
        <div className="profile-card">
            {isEditable 
            ? (<form className="profile-card-wrapper">
                <input type="file" onChange={(e) => setUserImage(e.target.files[0])}/>
                <div className="profile-card-info">
                    <NameInput
                        nameValue={profileName}
                        isValidName={isValidName}
                        setIsValidName={setIsValidName}
                        setNameValue={setProfileName}
                    ></NameInput>
                    <PhoneInput
                        phoneValue={profileTel}
                        isValidPhoneValue={isValidPhoneValue}
                        setIsValidPhoneValue={setIsValidPhoneValue}
                        isCorrectPhoneValue={isCorrectPhoneValue}
                        setIsCorrectPhoneValue={setIsCorrectPhoneValue}
                        setPhoneValue={setProfileTel}
                    ></PhoneInput>
                    <button className="profile-card-edit-button" onClick={() => {checkValidity()}}>
                        <ConfirmSVG/>
                    </button>
                </div>
               </form>)
            : (
                <div className="profile-card-wrapper">
                    <img src={process.env.REACT_APP_API_URL + user.user.image || "./assets/img/default-avatar.png"} alt="Аватар" className="profile-card-avatar"/>
                    <div className="profile-card-info">
                        <h4 className="profile-card-name">{profileName}</h4>
                        <p className="profile-card-tel">{profileTel}</p>
                    </div>
                    <button className="profile-card-edit-button" onClick={() => {setIsEditable(true)}}>
                        <EditSVG/>
                      </button>
                </div>
            )}
        </div>
    )
});

export default ProfileCard;