import React, { useEffect, useState } from "react";
import st from "./style.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  feachPhotos,
  feachSearchPhotos,
} from "../../store/reducers/actionCreators";

const RandomPhotosWithSlice = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const { photos, isLoading, error } = useSelector(
    (state) => state.unspashSlice
  );
  const dispath = useDispatch();
  useEffect(() => {
    dispath(feachPhotos());
  }, []);

  console.log(photos);
  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button
        onClick={() => {
          dispath(feachSearchPhotos(inputValue));
        }}
      >
        Поиск
      </button>
      <div className={st.container}>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {photos?.map((photo) => (
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

export default RandomPhotosWithSlice;
