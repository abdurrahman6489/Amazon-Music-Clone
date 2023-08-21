import React from "react";
import { useParams } from "react-router";
const Genres = () => {
  const { filter } = useParams();
  console.log("filter is ", filter);
  return <div>Genres</div>;
};

export default Genres;
