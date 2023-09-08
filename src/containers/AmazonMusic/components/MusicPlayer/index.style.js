export const CONTAINER_STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: 100,
  backgroundColor: "hsl(180, 5%, 3%)",
  zIndex: 1000,
};

export const STACK_STYLE = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-betwween",
  alignItems: "center",
  gap: { xs: "0.5em", sm: "0.5em", md: "1em", lg: "1em" },
  backgroundColor: "hsl(180, 5%, 3%)",
};

export const IMG_CONTAINER_STYLE = {
  textAlign: "left",
  ml: 2,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.5em",
};

export const TITLE_STYLE = {
  color: "#FFF",
  textAlign: "left",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontSize: "1.3rem",
  width: "150px",
  margin: 0,
};

export const PLAYER_BTN_CONTAINER_STYLE = {
  display: "flex",
  gap: "0.5em",
  alignItems: "center",
  textAlign: "left",
  color: "primary",
};

export const VOLUME_CONTAINER_STYLE = { textAlign: "right" };

export const VOLUME_BTN_STYLE = { mr: 3 };

export const styles = {
  CONTAINER_STYLE,
  STACK_STYLE,
  IMG_CONTAINER_STYLE,
  TITLE_STYLE,
  PLAYER_BTN_CONTAINER_STYLE,
  VOLUME_CONTAINER_STYLE,
  VOLUME_BTN_STYLE,
};
