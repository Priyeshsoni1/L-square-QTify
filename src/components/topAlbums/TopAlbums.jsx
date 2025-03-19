import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../section/Section";

const TopAlbums = () => {
  const [albums, setAlbums] = useState();
  useEffect(() => {
    fetchTopAlbums();
  }, []);
  const fetchTopAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(albums);
  if (albums)
    return (
      <>
        <Section albums={albums} title={"Top Albums"}/>
      </>
    );
  else return (
    <div className="container">
        <h1>Loading...</h1>

    </div>
  );
};

export default TopAlbums;
