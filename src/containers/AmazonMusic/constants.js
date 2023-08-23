//for api calls
export const config = {
  headers: {
    projectId: "hkj23notg7e0",
  },
};

export const body = {
  email: "abdurahman@gmail.com",
  password: "12345678",
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

//for header component
export const HEADER_COLORS = {
  PRIMARY_COLOR: "#0a0b0b",
  SECONDARY_COLOR: "#0a0b0b",
};

export const HEADER_NAVIGATING_BTN_COLORS = MAKE_COLORS(
  "hsl(0, 0%, 4%)",
  "hsl(183, 71%, 50%)"
);

export const HEADER_BTN_DISPLAY = {
  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
};

//for body playlist component
export const BODY_PLAYLIST_BTN_COLOR = {
  PRIMARY_COLOR: "#0a0b0b",
  SECONDARY_COLOR: "#0a0b0b",
};

//for MODAL component
export const MODAL_COLOR = {
  PRIMARY_COLOR: "rgb(37, 209, 218)",
  SECONDARY_COLOR: "#FFF",
};

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

export const PLAYER_COLOR = {
  PRIMARY_COLOR: "#FFF",
  SECONDARY_COLOR: "hsla(0, 0%, 100%, 0.15)",
};

//for songlist component
export const SONG_LIST_COLOR = {
  PRIMARY_COLOR: "#FFF",
  SECONDARY_COLOR: "hsl(183, 71%, 50%)",
};

//for playlist page song details component
export const SONG_DETAILS_COLOR = MAKE_COLORS(
  "hsl(0, 0%, 100%)",
  "hsl(183, 71%, 50%)"
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
