export const CONTAINER_STYLE = {
  minWidth: "170px",
  maxWidth: "250px",
  height: "200px",
  backgroundColor: "#0a0b0b",
  color: "#FFF",
  cursor: "pointer",
  boxShadow: "5px 5px 10px hsla(0, 0%, 5%, 0.6)",
  ":hover": {
    boxShadow: "5px 5px 10px hsla(0, 0%, 8%, 0.6)",
    transform: "scale(1.04)",
    transition: "transform 400ms ease-in-out",
  },
};

export const TITLE_STYLE = {
  color: "#FFF",
  width: 100,
  textAlign: "left",
};

export const ARTISTS_STYLE = {
  color: "#FFF",
  width: 70,
  textAlign: "left",
};

export const IMG_BOX_STYLE = { position: "relative" };

export const IMAGE_STYLE = { borderRadius: "0.5em" };

export const FAB_BTN_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: "5px 5px 8px hsla(0, 0%, 8%, 0.6)",
  ":hover": {
    transform: "translate(-50%, -40%)",
    transition: "transform 500ms ease-in-out",
    boxShadow: "10px 10px 12px hsla(0, 0%, 10%, 0.6)",
  },
};

export const styles = {
  CONTAINER_STYLE,
  TITLE_STYLE,
  ARTISTS_STYLE,
  IMG_BOX_STYLE,
  IMAGE_STYLE,
  FAB_BTN_STYLE,
};
