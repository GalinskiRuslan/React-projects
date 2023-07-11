import React from "react";
import { useParams } from "react-router-dom";
import { unspashAPI } from "../../services/unspashSerice";

export default function SinglePhoto() {
  const { data: unspashPhoto } = unspashAPI.useFeachPhotoByIdQuery(
    useParams().id
  );
  console.log(useParams());
  return (
    <div className="container">
      <img
        className="singleimg"
        src={unspashPhoto?.urls.regular}
        alt="Hello!"
      />
    </div>
  );
}
