import React, { useState, useContext } from "react";
import "./profilecard.css"
import { observer } from "mobx-react-lite";
import EditSVG from "../../components/SVG/EditSVG"
import ConfirmSVG from "../SVG/ConfirmSVG";
import NameInput from "../UI/NameInput/NameInput";
import PhoneInput from "../UI/PhoneInput/PhoneInput";
import { Context } from "../../index";

const ProfileCard = observer(() => {
    const { user } = useContext(Context);
    const [isEditable, setIsEditable] = useState(false);

    const [profileName, setProfileName] = useState(user.user.userName || 'Гость');
    const [profileTel, setProfileTel] = useState(user.user.userTel || '+71235467890');
    const [isValidName, setIsValidName] = useState(true);
    const [isValidPhoneValue, setIsValidPhoneValue] = useState(true);
    const [isCorrectPhoneValue, setIsCorrectPhoneValue] = useState(true);

    const checkValidity = () => {
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
            setIsEditable(false);
        }
    };


    return (
        <div className="profile-card">
            <div className="profile-card-wrapper">
                <img src="./assets/img/default-avatar.png" alt="Аватар" className="profile-card-avatar"/>
                <div className="profile-card-info">
                    {isEditable 
                        ? (<NameInput
                            nameValue={profileName}
                            isValidName={isValidName}
                            setIsValidName={setIsValidName}
                            setNameValue={setProfileName}
                        ></NameInput>)
                        : (<h4 className="profile-card-name">{profileName}</h4>)
                    }
                    {isEditable 
                        ? (<PhoneInput
                            phoneValue={profileTel}
                            isValidPhoneValue={isValidPhoneValue}
                            setIsValidPhoneValue={setIsValidPhoneValue}
                            isCorrectPhoneValue={isCorrectPhoneValue}
                            setIsCorrectPhoneValue={setIsCorrectPhoneValue}
                            setPhoneValue={setProfileTel}
                           ></PhoneInput>)
                        : (<p className="profile-card-tel">{profileTel}</p>)
                    }
                </div>
                {isEditable 
                    ? (<button className="profile-card-edit-button" onClick={() => {checkValidity()}}>
                        <ConfirmSVG/>
                      </button>)
                    : (<button className="profile-card-edit-button" onClick={() => {setIsEditable(true)}}>
                        <EditSVG/>
                      </button>)}
            </div>
        </div>
    )
});

export default ProfileCard;