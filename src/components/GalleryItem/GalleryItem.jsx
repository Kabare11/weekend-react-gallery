import React, { useState } from "react";
import axios from "axios";

//! this is the galleryItem that displays likes, image, title and description

const GalleryItem = ({ item }) => {
  const { id, title, description, url, likes } = item;

  //* conditional rendering useState
  const [showImage, setShowImage] = useState(true);

  const handleLikeClick = () => {
    axios.put(`/api/gallery/like/${id}`).catch((err) => console.log(err));
  };

  return (
    <div data-testid="galleryItem">
      <p>The gallery goes here!</p>
      <h1>{title}</h1>

      <div
        data-testid="toggle"
        className="image"
        onClick={() => setShowImage(!showImage)}
      >
        {showImage ? (
          <img className="image" src={url} />
        ) : (
          <p data-testid="description">{description}</p>
        )}
      </div>
      <button onClick={handleLikeClick} className="" data-testid="like">
        Love it!
      </button>
      <div className="">{likes} likes</div>
    </div>
  );
};

export default GalleryItem;
