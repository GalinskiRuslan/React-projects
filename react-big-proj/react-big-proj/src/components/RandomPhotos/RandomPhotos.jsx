import React, { useState } from "react";
import { unspashAPI } from "../../services/unspashSerice";
import st from "./style.module.css";
import { NavLink } from "react-router-dom";

const RandomPhotos = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const { data: randomPhoto } = unspashAPI.useFeachRandomPhotoQuery(12);
  const { data: searchPhoto } = unspashAPI.useFeachSearchPhotoQuery(
    "bob",
    searchPage
  );
  console.log(searchPhoto);

  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <div className={st.container}>
        {randomPhoto?.map((photo) => (
          <NavLink to={`/unspashApi/${photo.id}`} key={photo.id}>
            <div className={st.photo}>
              <img className={st.img} src={photo.urls.regular} alt="img" />
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default RandomPhotos;
