//for api calls
export const config = {
  headers: {
    projectId: "hkj23notg7e0",
    // Authorization : "Bearer token"
  },
};

export const SIGN_IN_AUTH_URL =
  "https://academics.newtonschool.co/api/v1/user/login";

export const SIGN_UP_AUTH_URL =
  "https://academics.newtonschool.co/api/v1/user/signup";

export const UPDATE_PASSWORD_URL =
  "https://academics.newtonschool.co/api/v1/user/updateMyPassword";

export const SONG_URL = "https://academics.newtonschool.co/api/v1/music/song";

export const ALBUM_URL = "https://academics.newtonschool.co/api/v1/music/album";

export const ALL_ARTISTS_URL =
  "https://academics.newtonschool.co/api/v1/music/artist/";

export const SEARCH_URL =
  "https://academics.newtonschool.co/api/v1/music/song?filter=";

//FUNCTIONS
function MAKE_COLORS(primaryColor, secondaryColor) {
  return { primaryColor, secondaryColor };
}

function MAKE_DISPLAY(xs = "block", sm = "block", md = "block", lg = "block") {
  return {
    display: { xs, sm, md, lg },
  };
}

export const whiteColor = "#FFF";
export const blackColor = "#0a0b0b";
export const darkBlackColor = "rgba(0, 0, 0, 0.8)";
export const lightBlueColor = "hsl(183, 71%, 50%)";

//for Body container of Home page.
export const categoryArray = [
  {
    mood: "happy",
    playListName: "Featured This Week",
    isFilter: true,
  },
  {
    mood: "sad",
    playListName: "Soul Soothers",
    isFilter: true,
  },
  {
    mood: "excited",
    playListName: "Trending Playlists",
    isFilter: true,
  },
  {
    mood: "romantic",
    playListName: "Hip-Hop Forever",
    isFilter: true,
  },
];

//for header component
export const HEADER_COLORS = MAKE_COLORS(blackColor, blackColor);

export const MENU_COLOR = MAKE_COLORS(darkBlackColor, darkBlackColor);

export const HEADER_NAVIGATING_BTN_COLORS = MAKE_COLORS(
  "hsl(0, 0%, 4%)",
  lightBlueColor
);

export const HEADER_BTN_DISPLAY = {
  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
};

export const routeBtnLabelArray = [
  { isActive: true, label: "Home" },
  { isActive: false, label: "Podcasts" },
  { isActive: false, label: "Library" },
];

//for body playlist component
export const BODY_PLAYLIST_BTN_COLOR = MAKE_COLORS(blackColor, blackColor);

//for MODAL component
export const MODAL_COLOR = MAKE_COLORS("rgb(37, 209, 218)", whiteColor);

export const MODAL_STYLE = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  bgcolor: "rgba(0, 0, 0, 0.92)",
  boxShadow: 24,
  p: 4,
  paddingTop: 5,
};

//for music player

export const smallScreenDisplay = {
  display: { xs: "none", sm: "none", md: "inline", lg: "inline" },
};

export const smallScreenPlayerDisplay = {
  justifyContent: {
    xs: "flex-end",
    sm: "flex-end",
    md: "center",
    lg: "center",
  },
};

export const PLAYER_COLOR = MAKE_COLORS(whiteColor, "hsla(0, 0%, 100%, 0.15)");

//for songlist component
export const SONG_LIST_COLOR = MAKE_COLORS(whiteColor, lightBlueColor);

//for playlist page song details component
export const SONG_DETAILS_COLOR = MAKE_COLORS(
  "hsl(0, 0%, 100%)",
  lightBlueColor
);

export const SONG_DETAILS_ALIGN_ITEMS = {
  alignItems: {
    xs: "center",
    sm: "center",
    md: "flex-start",
    lg: "flex-start",
  },
};

export const SONG_DETAILS_TEXT_ALIGN = {
  textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
};

//for Signin and SignOut Button
export const SIGN_IN_SIGN_OUT_BTN_COLOR = MAKE_COLORS(
  lightBlueColor,
  whiteColor
);

//for playlistController component
export const FONT_STYLE = {
  fontFamily: '"Sharp Grotesk Semi Bold 20", Helvetica, Arial, "sans-serif"',
  fontWeight: "bold",
  color: "white",
  fontSize: 24,
};

//for login and signup container
export const SIDE_CONTAINER_DISPLAY = MAKE_DISPLAY(
  "none",
  "none",
  "block",
  "block"
);
