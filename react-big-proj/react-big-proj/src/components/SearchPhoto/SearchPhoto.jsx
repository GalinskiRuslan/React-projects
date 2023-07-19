import React, { useState } from "react";
import { unspashAPI } from "../../services/unspashSerice";
import st from "./style.module.css";
import { NavLink } from "react-router-dom";

export default function SearchPhoto() {
  const [inputValue, setInputValue] = useState("");
  const [searchSub, setSearchSub] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const {
    data: searchPhoto,
    isLoading,
    isFetching,
  } = unspashAPI.useFeachSearchPhotoQuery(
    { query: searchSub, pageSearch: searchPage },
    { skip: searchPage.length < 1 }
  );
  const feachByEnter = (e) => {
    if (e.code === "Enter") {
      setSearchSub(inputValue);
      setInputValue("");
      console.log(isLoading, isFetching);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => feachByEnter(e)}
      />
      <button
        onClick={() => {
          setSearchSub(inputValue);
          setInputValue("");
          console.log(isLoading);
          /*  refetch(); */
        }}
      >
        Найти
      </button>

      {isLoading ? (
        <div className={st.loaderOverlay}>
          <div className={st.loader}></div>
        </div>
      ) : (
        <div className={st.container}>
          {searchPhoto?.results.map((photo) => (
            <NavLink to={`/unspashApi/${photo.id}`} key={photo.id}>
              <div className={st.photo}>
                <img className={st.img} src={photo.urls.regular} alt="img" />
              </div>
            </NavLink>
          ))}
        </div>
      )}
      <button onClick={() => setSearchPage(searchPage + 1)}>nextPage</button>
    </div>
  );
}
