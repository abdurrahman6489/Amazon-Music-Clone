import "./App.css";
import Layout from "./containers/Layout";
import AmazonMusic from "./containers/AmazonMusic/index";
import Login from "./containers/Login";
import Playlist from "./containers/Playlist";
import Podcasts from "./containers/Podcasts";
import Music from "./containers/Library/Music";
import MyPodcast from "./containers/Library/MyPodcast";
import Error from "./containers/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import links from "./containers/links";
import useAlbums from "./Utils/CustomHook.js";
import { useUserData, useAllSongs } from "./Utils/CustomHook";
import SearchPage from "./containers/SearchPage";
import Genres from "./containers/Genres";
import Signup from "./containers/Signup";

import { useSelector, useDispatch } from "react-redux";
import { setMsgDisplayedFalse } from "./App/features/User/registerUserSlice";

import MessageComponent from "./containers/MessageComponent";
import AllSongs from "./containers/AllSongs";

function App() {
  useAlbums();
  useUserData();
  useAllSongs();
  const { msgDisplayed, message } = useSelector(
    (state) => state.registeredUser
  );
  const { modalOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: links.home,
      element: (
        <Layout>
          <AmazonMusic />
        </Layout>
      ),
      errorElement: <Error />,
    },
    {
      path: links.podcasts,
      element: (
        <Layout>
          <Podcasts />
        </Layout>
      ),
    },
    {
      path: `${links.playlist}/:id`,
      element: (
        <Layout>
          <Playlist />
        </Layout>
      ),
    },
    {
      path: links.login,
      element: <Login />,
    },
    {
      path: links.signup,
      element: <Signup />,
    },
    {
      path: links.libraryPodcasts,
      element: (
        <Layout>
          <MyPodcast />
        </Layout>
      ),
    },
    {
      path: links.libraryMusic,
      element: (
        <Layout>
          <Music />
        </Layout>
      ),
    },
    {
      path: links.search,
      element: (
        <Layout>
          <SearchPage />
        </Layout>
      ),
    },
    {
      path: `${links.genres}/:filter`,
      element: (
        <Layout>
          <Genres />
        </Layout>
      ),
    },
    {
      path: links.allSongs,
      element: (
        <Layout>
          <AllSongs />
        </Layout>
      ),
    },
  ]);
  return (
    <>
      <MessageComponent
        msg={message}
        setOpen={() => dispatch(setMsgDisplayedFalse())}
        open={msgDisplayed}
        time={4000}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
