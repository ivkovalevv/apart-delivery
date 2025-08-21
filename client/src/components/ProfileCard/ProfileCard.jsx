import React, { useState, useContext, useEffect } from "react";
import "./profilecard.css";
import { observer } from "mobx-react-lite";
import EditSVG from "../../components/SVG/EditSVG";
import ConfirmSVG from "../SVG/ConfirmSVG";
import NameInput from "../UI/NameInput/NameInput";
import PhoneInput from "../UI/PhoneInput/PhoneInput";
import { Context } from "../../index";
import { update } from "../../http/userAPI";
import Loader from "../../components/UI/Loader/Loader";
import { check } from "../../http/userAPI";

const ProfileCard = observer(() => {
  const { user } = useContext(Context);
  const [isEditable, setIsEditable] = useState(false);

  const [profileName, setProfileName] = useState(user.user.userName || "Гость");
  const [profileTel, setProfileTel] = useState(
    user.user.userTel || "+7 9999999999"
  );
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhoneValue, setIsValidPhoneValue] = useState(true);
  const [isCorrectPhoneValue, setIsCorrectPhoneValue] = useState(true);
  const [userImage, setUserImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const [imageLoaded, setImageLoaded] = useState(false);

  let image = new Image();
  image.onload = function () {
    setImageLoaded(true);
  };

  image.src = process.env.REACT_APP_API_URL + user.user.image;

  function handleFiles(file) {
    if (!file || !(file instanceof Blob)) {
      return null;
    }

    let img = document.createElement("img");
    img.file = file;

    let reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
        setImagePreview(e.target.result);
      };
    })(img);
    reader.readAsDataURL(file);
    return img;
  }

  useEffect(() => {
    handleFiles(userImage);
  }, [userImage]);

  const compressImage = async (file, maxWidth = 800, quality = 0.7) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          // Изменяем размер, если нужно
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              resolve(
                new File([blob], file.name, {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                })
              );
            },
            "image/jpeg",
            quality
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const updateUser = async (id, userName, userTel, userImage) => {
    let compressedImage;
    if (userImage) {
      compressedImage = await compressImage(userImage);
    } else {
      compressedImage = userImage;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("userName", userName);
    formData.append("userTel", userTel);
    formData.append("image", compressedImage);
    try {
      let data;
      data = await update(formData);
      user.setUser(data);
      setIsEditable(false);
      setUserImage(null);
    } catch (e) {
      const errorMessage =
        e.response?.data?.message ||
        e.response?.data?.error ||
        e.message ||
        "Произошла ошибка при загрузке";
      alert(errorMessage);
    }
  };

  const checkValidity = (e) => {
    e.preventDefault();
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
      updateUser(user.user.id, profileName, profileTel, userImage);
    }
  };

  return (
    <div className="profile-card">
      {isEditable ? (
        <form className="profile-card-wrapper">
          <div
            class="custom-file-upload"
            style={
              imagePreview
                ? {
                    backgroundImage: `url(${imagePreview})`,
                  }
                : {
                    backgroundImage: `url(${
                      process.env.REACT_APP_API_URL + user.user.image
                    })`,
                  }
            }
          >
            <label for="file" id="file-label">
              <p className="file-label-text">
                {userImage ? (
                  userImage.name
                ) : (
                  <p className="file-label-text">
                    Выбрать
                    <br /> фото
                  </p>
                )}
              </p>
            </label>
            <input
              type="file"
              id="file"
              className="photo-input"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => {
                setUserImage(e.target.files[0]);
              }}
            />
          </div>
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
            <button
              className="profile-card-edit-button"
              onClick={(e) => {
                checkValidity(e);
              }}
            >
              <ConfirmSVG />
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-card-wrapper">
          {imageLoaded ? (
            <img
              src={process.env.REACT_APP_API_URL + user.user.image}
              alt="Аватар"
              className="profile-card-avatar"
            />
          ) : (
            <img
              src={"./assets/img/default-avatar.png"}
              alt="Аватар"
              className="profile-card-avatar"
            />
          )}
          <div className="profile-card-info">
            <h4 className="profile-card-name">{profileName}</h4>
            <p className="profile-card-tel">{profileTel}</p>
          </div>
          <button
            className="profile-card-edit-button"
            onClick={() => {
              setIsEditable(true);
            }}
          >
            <EditSVG />
          </button>
        </div>
      )}
    </div>
  );
});

export default ProfileCard;
