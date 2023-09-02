import React from "react";
import { Snackbar } from "@mui/material";

const MessageComponent = ({ open, setOpen, msg, time, vertical }) => {
  const handleClose = () => setOpen();
  const anchorOrigin = vertical
    ? { horizontal: "center", vertical: "top" }
    : { horizontal: "left", vertical: "bottom" };
  return (
    <Snackbar
      sx={{
        zIndex: 20,
        bgcolor: "white",
        color: "#333",
      }}
      open={open}
      autoHideDuration={time}
      onClose={handleClose}
      message={msg}
      anchorOrigin={anchorOrigin}
    />
  );
};

export default MessageComponent;
