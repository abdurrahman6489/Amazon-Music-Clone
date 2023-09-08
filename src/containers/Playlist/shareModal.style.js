export const CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "column",
  justifyContent: {
    lg: "space-between",
    md: "space-between%",
    sm: "space-between%",
    xs: "flex-start",
  },
  alignItems: "center",
  position: "relative",
  width: { lg: "40%", md: "70%", sm: "80%", xs: "90%" },
  minHeight: { xs: "100vh", sm: "auto", md: "auto", lg: "auto" },
};

export const MODAL_STYLE = {
  p: { lg: 4, md: 4, sm: 4, xs: 0 },
  paddingTop: { lg: 5, md: 5, sm: 5, xs: 0 },
};
export const CLOSE_BTN_STYLE = { textAlign: "right", width: "100%" };

export const PLAYLIST_HEADING_STYLE = {
  fontFamily: `Helvetica Arial "sans-serif"`,
  fontSize: "18",
  textOverFlow: "ellipsis",
};

export const IMG_CONTAINER_STYLE = {
  width: "100%",
  height: { lg: 120, md: 120, sm: 120, xs: 350, xl: 120 },
  display: "flex",
  flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
  justifyContent: "flex-start",
  alignItems: "center",
  gap: { lg: "0.5em", md: "0.5em", sm: "0.5em", xs: 0 },
};

export const IMG_STYLE = {
  width: { lg: "30%", md: "30%", sm: "30%", xs: "80%" },
  height: { lg: 120, md: 120, sm: 120, xs: 270, xl: 120 },
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "0.5em",
};

export const DETAIL_CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "Column",
  justifyContent: "center",
  alignItems: {
    xs: "center",
    sm: "flex-start",
    md: "flex-start",
    lg: "flex-start",
  },
  gap: "0.3em",
  height: "100%",
  textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
};

export const DETAIL_STYLE = {
  fontSize: 15,
  fontFamily: `"Sharp Grotesk" "Semi Bold 20" Helvetica Arial "sans-serif"`,
  textTransform: "uppercase",
  fontWeight: "bold",
};

export const TITLE_STYLE = {
  textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
};

export const BTN_CONTAINER_STYLE = {
  marginTop: 2,
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
  MODAL_STYLE,
  CONTAINER_STYLE,
  CLOSE_BTN_STYLE,
  PLAYLIST_HEADING_STYLE,
  IMG_CONTAINER_STYLE,
  IMG_STYLE,
  DETAIL_CONTAINER_STYLE,
  DETAIL_STYLE,
  TITLE_STYLE,
  BTN_CONTAINER_STYLE,
  BUTTON_STYLE,
  COPY_BTN_TEXT_STYLE,
};
