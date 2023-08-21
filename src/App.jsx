import { useEffect, useState } from "react";
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
import MusicModal from "./containers/AmazonMusic/components/Modal";
import SearchPage from "./containers/SearchPage";
import Genres from "./containers/Genres";
export const config = {
  headers: {
    projectId: "hkj23notg7e0",
  },
};

function App() {
  useAlbums();
  const [open, setOpen] = useState(false);
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
  ]);
  return (
    <>
      <MusicModal open={open} setOpen={setOpen} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
