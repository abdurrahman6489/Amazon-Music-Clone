export const CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1em",
  position: "relative",
  width: { lg: "40%", md: "70%", sm: "80%", xs: "85%" },
};

export const CLOSE_BTN_CONTAINER_STYLE = {
  textAlign: "right",
  width: "100%",
};

export const HEADING_STYLE = {
  fontFamily: `Helvetica Arial "sans-serif"`,
  fontSize: "18",
  textOverFlow: "ellipsis",
};

export const CONTENT_STYLE = {
  fontFamily: `Ember Helvetica Arial "sans-serif"`,
  fontSize: "18",
  textOverFlow: "ellipsis",
  textAlign: "center",
};

export const BTN_CONTAINER_STYLE = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
  },
  gap: "1em",
};

export const BUTTON_STYLE = { borderRadius: "1em" };

export const styles = {
  CONTAINER_STYLE,
  CLOSE_BTN_CONTAINER_STYLE,
  HEADING_STYLE,
  CONTENT_STYLE,
  BTN_CONTAINER_STYLE,
  BUTTON_STYLE,
};
