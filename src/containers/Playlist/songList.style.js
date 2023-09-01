export const CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1em",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "hsl(0, 0%, 10%)",
  },
};

export const PLAY_ICON_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 4,
  size: "small",
};

export const THUMBNAIL_CONTAINER_STYLE = { position: "relative" };

export const THUMBNAIL_STYLE = { zIndex: 1 };

export const TITLE_STYLE = {
  textAlign: "left",
  fontWeight: "50",
  fontSize: "1rem",
  ":hover": { color: "hsl(183, 71%, 50%)" },
};

export const DURATION_CONTAINER_STYLE = {
  display: { xs: "none", sm: "none", md: "block", lg: "block" },
};

export const songListStyles = {
  CONTAINER_STYLE,
  PLAY_ICON_STYLE,
  THUMBNAIL_CONTAINER_STYLE,
  THUMBNAIL_STYLE,
  TITLE_STYLE,
  DURATION_CONTAINER_STYLE,
};
