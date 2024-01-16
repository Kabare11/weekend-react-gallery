// rafce - react arrow function component export
import React, { useEffect, useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import axios from "axios";

const GalleryList = () => {
  //the useState hook that will be used to store gallery items data
  const [data, setData] = useState([]);

  // this is the function to fetch data
  const fetchData = () => {
    axios
      .get("/api/gallery")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  /// this is used to fetch the data only 1 time
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div data-testid="galleryList">
      {data.map((item) => (
        <GalleryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default GalleryList;
