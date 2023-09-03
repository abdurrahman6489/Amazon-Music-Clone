import { MAKE_DISPLAY } from "../../../../../Utils/utils";

const display = MAKE_DISPLAY("none", "none", "inline", "inline");
export const MENUITEM_DISPLAY = MAKE_DISPLAY("flex", "none", "none", "none");

export const KEYBOARD_ICON_STYLE = {
  ml: 2,
  ...display,
};

export const MENUITEM_STYLE = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  margin: 0,
  width: 180,
  ":hover": { backgroundColor: "hsl(180, 5%, 8%)" },
};

export const styles = { KEYBOARD_ICON_STYLE, MENUITEM_STYLE, MENUITEM_DISPLAY };
