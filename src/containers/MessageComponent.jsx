import React from "react";
import { Snackbar } from "@mui/material";
const MessageComponent = ({ open, setOpen, msg }) => {
  const handleClose = () => setOpen();
  return (
    <Snackbar
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
      message={msg}
    />
  );
};

export default MessageComponent;
