export const CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1em",
  position: "relative",
  width: { lg: "40%", md: "70%", sm: "80%", xs: "90%" },
};
export const CLOSE_BTN_STYLE = { textAlign: "right", width: "100%" };

export const PLAYLIST_HEADING_STYLE = {
  fontFamily: `Helvetica Arial "sans-serif"`,
  fontSize: "18",
  textOverFlow: "ellipsis",
};

export const IMG_CONTAINER_STYLE = {
  width: "100%",
  height: 120,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.5em",
};

export const IMG_STYLE = {
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "0.5em",
};

export const DETAIL_CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "Column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "0.3em",
  height: "100%",
};

export const DETAIL_STYLE = {
  fontSize: 15,
  fontFamily: `"Sharp Grotesk" "Semi Bold 20" Helvetica Arial "sans-serif"`,
  textTransform: "uppercase",
  fontWeight: "bold",
};

export const BTN_CONTAINER_STYLE = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export const BUTTON_STYLE = {
  bgcolor: "hsl(0, 1%, 26%)",
  color: "white",
  ":hover": {
    backgroundColor: "hsl(0, 1%, 15%)",
    transform: "scale(1.1)",
  },
};

export const COPY_BTN_TEXT_STYLE = {
  ml: 1,
  display: {
    xs: "none",
    sm: "none",
    md: "inline-block",
    lg: "inline-block",
  },
};

export const shareModaStyles = {
  CONTAINER_STYLE,
  CLOSE_BTN_STYLE,
  PLAYLIST_HEADING_STYLE,
  IMG_CONTAINER_STYLE,
  IMG_STYLE,
  DETAIL_CONTAINER_STYLE,
  DETAIL_STYLE,
  BTN_CONTAINER_STYLE,
  BUTTON_STYLE,
  COPY_BTN_TEXT_STYLE,
};
