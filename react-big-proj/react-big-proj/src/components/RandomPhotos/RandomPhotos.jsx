import React from "react";
import { unspashAPI } from "../../services/unspashSerice";
import st from "./style.module.css";
import Modal from "../ui/modal/Modal";

const RandomPhotos = () => {
  const [idPhoto, setIdPhoto] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const { data: randomPhoto } = unspashAPI.useFeachRandomPhotoQuery(10);
  const { data: unspashPhoto } = unspashAPI.useFeachPhotoByIdQuery(idPhoto);
  const onpenModal = (id) => {
    setIdPhoto(id);
    setModal(true);
  };
  return (
    <div className={st.container}>
      <button onClick={() => setModal(true)}>XXX</button>
      {randomPhoto?.map((photo) => (
        <div className={st.photo}>
          <img
            className={st.img}
            src={photo.urls.regular}
            key={photo.id}
            alt="img"
            onClick={() => onpenModal(photo.id)}
          />
        </div>
      ))}
      <Modal visible={modal} serVisible={setModal}>
        <img
          style={{ maxWidth: "120px" }}
          src={unspashPhoto?.urls.regular}
          alt="Hello!"
        />
      </Modal>
    </div>
  );
};

export default RandomPhotos;
