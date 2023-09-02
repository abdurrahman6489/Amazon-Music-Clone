export const CONTAINER_STYLE = {
  display: "flex",
  flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
  justifyContent: "flex-start",
  alignItems: "center",
  gap: { xs: "0.5em", sm: "0.5em", md: "1em", lg: "1em" },
  backgroundColor: "inherit",
  border: "none",
};

export const IMAGE_STYLE = { width: 300, height: 300 };

export const DETAILS_CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  border: "none",
};

export const CARD_CONTENT_STYLE = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
};

export const TITLE_STYLE = { width: 300 };

export const ARTISTS_NAME_STYLE = { width: 200 };

export const BTN_CONTAINER_STYLE = {
  display: "flex",
  alignItems: "center",
  pl: 1,
  pb: 1,
  textAlign: {
    xs: "leftt",
    sm: "left",
    md: "center",
    lg: "center",
  },
};

export const ALIGN_ITEMS_STYLE = {
  alignItems: {
    xs: "center",
    sm: "center",
    md: "flex-start",
    lg: "flex-start",
  },
};

export const TEXT_ALIGN_STYLE = {
  textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
};

export const styles = {
  CONTAINER_STYLE,
  IMAGE_STYLE,
  DETAILS_CONTAINER_STYLE,
  CARD_CONTENT_STYLE,
  TITLE_STYLE,
  ARTISTS_NAME_STYLE,
  BTN_CONTAINER_STYLE,
  ALIGN_ITEMS_STYLE,
  TEXT_ALIGN_STYLE,
};
