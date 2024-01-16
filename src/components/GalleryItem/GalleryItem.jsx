import React, { useState } from "react";

const GalleryItem = ({ item }) => {
  const { id, title, description, url } = item;
  const [showImage, setShowImage] = useState(true);
  return (
    <div data-testid="galleryItem">
      <p>The gallery goes here!</p>
      <h1>{title}</h1>
      <div
        data-testid="toggle"
        style={{
          width: "150px",
          height: "150px",
        }}
        className=""
        onClick={() => setShowImage(!showImage)}
      >
        {showImage ? (
          <img src={url} />
        ) : (
          <p data-testid="description">{description}</p>
        )}
      </div>
      <button className="" data-testid="like">
        Love it!
      </button>
      <div className="">0 likes</div>
    </div>
  );
};

export default GalleryItem;
