import { PermDeviceInformationSharp } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setFilterBy } from "../../App/features/SearchSongs/SearchSongSlice";
import LINKS from "../links";

const filters = [
  { text: "Love & Romantic", mood: "romantic" },
  { text: "Be Happy", mood: "happy" },
  { text: "Party Time", mood: "excited" },
  { text: "Heartbreak", mood: "sad" },
];

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (mood) => {
    console.log(mood);
    dispatch(setFilterBy("mood"));
    navigate(`${LINKS.genres}/${mood}`);
  };

  return (
    <>
      <Box
        sx={{
          paddingLeft: "50px",
          paddingRight: "50px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography>
          <Button sx={{ color: "white" }}>Podcasts</Button>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography variant="h6" color="white">
            Mood & Activities
          </Typography>
          <Typography
            variant="div"
            textAlign="center"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
          >
            {filters?.map((filter) => (
              <Button
                sx={{
                  backgroundImage:
                    "linear-gradient(to right,green,blue,indigo,violet)",
                  width: "250px",
                  height: "70px",
                  borderRadius: "10px",
                  fontWeight: 800,
                  color: "white",
                }}
                onClick={() => handleClick(filter.mood)}
              >
                {filter.text}
              </Button>
            ))}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
