import React, { useState } from "react";
import { unspashAPI } from "../../services/unspashSerice";
import st from "./style.module.css";
import { saveAs } from "file-saver";
import Modal from "../ui/modal/Modal";

export default function SearchPhoto() {
  const [inputValue, setInputValue] = useState("");
  const [searchSub, setSearchSub] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const {
    data: searchPhoto,
    isLoading,
    isFetching,
  } = unspashAPI.useFeachSearchPhotoQuery(
    { query: searchSub, pageSearch: searchPage },
    { skip: searchPage.length < 1 }
  );
  const downloadImage = (url) => {
    saveAs(url, "image.jpg"); // Put your image url here.
  };
  const feachByEnter = (e) => {
    if (e.code === "Enter") {
      setSearchSub(inputValue);
      setInputValue("");
      console.log(isLoading, isFetching);
    }
  };
  const openModalPhoto = (photo) => {
    setModalData(photo);
    setModalOpen(true);
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
            <div
              key={photo.id}
              className={st.photo}
              onClick={() => openModalPhoto(photo)}
            >
              <img className={st.img} src={photo.urls.regular} alt="img" />
            </div>
          ))}
        </div>
      )}
      <Modal visible={modalOpen} setVisible={setModalOpen}>
        {/*     <button className={st.closeBtn} onClick={() => setModalOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="24px"
          height="24px"
        >
          <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z" />
        </svg>
      </button> */}
        <div className={st.modalConteiner}>
          <div className={st.left}>
            <img
              className={st.profilePhoto}
              src={modalData?.user.profile_image.medium}
              alt="profilephoto"
            />
            <p>Author: {modalData?.user.name}</p>
            <p>Author instagramm: {modalData?.user.instagram_username}</p>
            <p>
              Description:
              {modalData?.description
                ? modalData?.description
                : modalData?.alt_description}
            </p>
            <div
              className={st.downloadBtn}
              onClick={() => downloadImage(modalData?.urls.full)}
            >
              Скачать
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24px"
                height="24px"
              >
                <path
                  d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M176 272l80 80 80-80M256 48v288"
                />
              </svg>
            </div>
            <div className={st.aboutInfoCont}>
              <p className={st.aboutInfo}>
                Likes:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24px"
                  height="24px"
                >
                  <circle cx="184" cy="232" r="24" />
                  <path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z" />
                  <circle cx="328" cy="232" r="24" />
                  <circle
                    cx="256"
                    cy="256"
                    r="208"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  />
                </svg>
                {modalData?.likes}
              </p>
              <p className={st.aboutInfo}>
                Views:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24px"
                  height="24px"
                >
                  <path
                    d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <circle
                    cx="256"
                    cy="256"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  />
                </svg>
                {modalData?.views}
              </p>
              <p className={st.aboutInfo}>
                downloads:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24px"
                  height="24px"
                >
                  <path
                    d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
                {modalData?.downloads}
              </p>
            </div>
          </div>
          <div className={st.modalImg}>
            <img
              className={st.imgModal}
              src={modalData?.urls.regular}
              alt="modal img"
            />
          </div>
        </div>
      </Modal>
      Страница {searchPage} из {searchPhoto?.total_pages}
      <div className={st.pagination}>
        <button
          disabled={searchPage < 2 ? true : false}
          onClick={() => setSearchPage(searchPage - 1)}
        >
          prevPage
        </button>
        <button
          disabled={searchPage === searchPhoto?.total_pages ? true : false}
          onClick={() => setSearchPage(searchPage + 1)}
        >
          nextPage
        </button>
      </div>
    </div>
  );
}
