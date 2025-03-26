import axios from "axios";

export const fetchNewAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  export const fetchTopAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      return res.data
    } catch (error) {
      console.log(error);
    }
  };