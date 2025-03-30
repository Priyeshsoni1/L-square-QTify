import axios from "axios";

export const fetchSongs = async () => {
  try {
    const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchGenres = async () => {
  try {
    const res = await axios.get("https://qtify-backend-labs.crio.do/genres");
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
