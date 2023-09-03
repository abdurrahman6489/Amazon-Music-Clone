export const CONTAINER_STYLE = { mb: "2vh", maxWidth: "92dvw" };

export const STACK_STYLE = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
  justifyContent: {
    xs: "flex-start",
    sm: "space-between",
    md: "space-between",
    lg: "space-between",
  },
  alignItems: "center",
  gap: "0.5em",
};

export const TITLE_STYLE = {
  fontFamily: '"Sharp Grotesk Semi Bold 20", Helvetica, Arial, "sans-serif"',
  fontWeight: "bold",
  color: "white",
  fontSize: 24,
  textAlign: "left",
  width: { xs: 200, sm: 200, md: 300, lg: 300 },
};

export const BTN_CONTAINER_STYLE = {
  textAlign: "right",
};

export const styles = {
  CONTAINER_STYLE,
  STACK_STYLE,
  TITLE_STYLE,
  BTN_CONTAINER_STYLE,
};
