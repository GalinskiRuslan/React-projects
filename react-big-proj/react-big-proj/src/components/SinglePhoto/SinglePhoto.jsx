import React from "react";
import { useParams } from "react-router-dom";
import { unspashAPI } from "../../services/unspashSerice";
import st from "./style.module.css";

export default function SinglePhoto() {
  const { data: unspashPhoto, isLoading } = unspashAPI.useFeachPhotoByIdQuery(
    useParams().id
  );
  console.log(useParams());
  return (
    <>
      {isLoading ? (
        <div className="loaderOverlay">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container">
          <div className={st.mainCont}>
            Author:
            <div className={st.flex}>
              <img
                alt="img"
                className={st.authorPhoto}
                src={unspashPhoto?.user.profile_image.medium}
              />
              <p>{unspashPhoto?.user.name}</p>
            </div>
            <p> instagram username: {unspashPhoto?.user.instagram_username}</p>
            <div className={st.imgContainer}>
              <img
                className="singleimg"
                src={unspashPhoto?.urls.regular}
                alt="Hello!"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
