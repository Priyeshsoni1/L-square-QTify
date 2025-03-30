import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGenresThunk, fetchSongsThunk } from "./features/song/songSlice";
import {
  fetchNewAlbumsThunk,
  fetchTopAlbumsThunk,
} from "./features/album/albumSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongsThunk());
    dispatch(fetchGenresThunk());
    dispatch(fetchNewAlbumsThunk());
    dispatch(fetchTopAlbumsThunk());
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
// Outlet is used to render the child routes in the main app component
// in this case, it will render the Home component

// Dispach is used to dispatch actions to the redux store
// useEffect is used to fetch the data from the api when the component mounts for the first time
