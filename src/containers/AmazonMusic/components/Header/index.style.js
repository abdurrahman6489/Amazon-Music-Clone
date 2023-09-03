export const CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: { xs: 0, sm: "0.5em", md: "0.5em", lg: "1em" },
};

export const IMG_STYLE = {
  display: { xs: "none", sm: "block", md: "block", lg: "block" },
  width: { xs: 250, sm: 250, md: 300, lg: 300 },
  height: 30,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  cursor: "pointer",
};

export const styles = {
  CONTAINER_STYLE,
  IMG_STYLE,
};
