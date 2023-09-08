import { MAKE_COLORS, MAKE_DISPLAY } from "../../Utils/utils";

//for api calls
export const config = {
  headers: {
    projectId: "hkj23notg7e0",
    // Authorization : "Bearer token"
  },
};

export const URLS = {
  SIGN_IN_AUTH_URL: "https://academics.newtonschool.co/api/v1/user/login",
  SIGN_UP_AUTH_URL: "https://academics.newtonschool.co/api/v1/user/signup",
  UPDATE_PASSWORD_URL:
    "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
  SONG_URL: "https://academics.newtonschool.co/api/v1/music/song",
  ALBUM_URL: "https://academics.newtonschool.co/api/v1/music/album",
  ALL_ARTISTS_URL: "https://academics.newtonschool.co/api/v1/music/artist/",
  SEARCH_URL: "https://academics.newtonschool.co/api/v1/music/song?filter=",
  BASE_URL: "https://amazon-music.netlify.app",
};

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

export const USER_AVATAR_COLOR = MAKE_COLORS(lightBlueColor, blackColor);

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
  { isActive: false, label: "Search" },
  { isActive: false, label: "UserAvatar" },
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

//for Signin and SignOut Button
export const SIGN_IN_SIGN_OUT_BTN_COLOR = MAKE_COLORS(
  lightBlueColor,
  whiteColor
);

//for login and signup container
export const SIDE_CONTAINER_DISPLAY = MAKE_DISPLAY(
  "none",
  "none",
  "block",
  "block"
);

//signup page
export const INITIAL_STATE_SIGN_UP = {
  name: "",
  email: "",
  password: "",
};

export const INITIAL_ERROR_DATA_SING_UP = {
  nameError: "",
  emailError: "",
  passwordError: "",
};

//for login page
export const INITIAL_STATE_LOG_IN = {
  email: "",
  password: "",
};

export const INITIAL_ERROR_DATA_LOG_IN = {
  emailError: "",
  passwordError: "",
};

export const INITIAL_UPDATE_PASSWORD = {
  value: "",
  updatePasswordError: "",
};

//for search page
export const SONG_FILTERS = [
  { text: "Love & Romantic", mood: "romantic" },
  { text: "Be Happy", mood: "happy" },
  { text: "Party Time", mood: "excited" },
  { text: "Heartbreak", mood: "sad" },
];

export const filterByObj = {
  title: "title",
  mood: "mood",
};
