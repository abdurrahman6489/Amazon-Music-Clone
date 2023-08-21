import { PermDeviceInformationSharp } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
const list = [
  "Love & Heartbreak",
  "Be Happy",
  "Party Time",
  "Work Out",
  "Travel",
];
const list2 = [
  "PlayList",
  "Stations",
  "Indian Classical",
  "Indian Classical",
  "Indian Devotional",
  "Women in Music",
  "Amazon Music Originals",
];

const SearchPage = () => {
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
            {list.map((ele) => (
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
              >
                {ele}
              </Button>
            ))}
          </Typography>
          <Typography variant="h6" color="white">
            Listen Your Way
          </Typography>
          <Typography
            variant="div"
            textAlign="center"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
          >
            {list2.map((ele) => (
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
              >
                {ele}
              </Button>
            ))}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
