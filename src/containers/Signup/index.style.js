const STACK_STYLE = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  minHeight: "100vh",
  backgroundColor: "rgba(255, 255, 255)",
  color: "hsl(0, 0%, 4%)",
  width: "100dvw",
};

const BACK_BTN_BOX_STYLE = {
  display: { xs: "flex", sm: "block", md: "none", lg: "none" },
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

const CONTAINER_STYLE = {
  width: { xs: "80%", sm: "65%", md: "60%", lg: "50%" },
  border: "1px solid #ddd",
  borderRadius: "0.5rem",
  backgroundColor: "#fff",
  padding: "1rem",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};
export const styles = { STACK_STYLE, CONTAINER_STYLE, BACK_BTN_BOX_STYLE };
