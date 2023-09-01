import { MAKE_COLORS, MAKE_DISPLAY } from "../../../../../Utils/utils";

const SEARCH_BAR_DISPLAY = MAKE_DISPLAY("none", "block", "block", "block");

const SEARCH_BTN_DISPLAY = MAKE_DISPLAY("inline", "none", "none", "none");
export const SEARCH_BAR_STYLE = {
  ...SEARCH_BAR_DISPLAY,
};
export const SEARCH_BTN_STYLE = {
  ...SEARCH_BTN_DISPLAY,
};
export const SEARCH_ICON_STYLE = { mt: 1 };

export const styles = {
  SEARCH_BAR_STYLE,
  SEARCH_BTN_STYLE,
  SEARCH_ICON_STYLE,
};
