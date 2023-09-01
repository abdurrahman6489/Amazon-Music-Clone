import React, { useState } from "react";
import "./style.css";

import {
  Divider,
  Typography,
  Fab,
  Tooltip,
  Modal,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

import { useNavigate } from "react-router-dom";

import CustomTheme from "../../CustomTheme";

import { MODAL_COLOR, MODAL_STYLE } from "../../constants";
import LINKS from "../../../links";
import { styles } from "./index.style";

const MusicModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={MODAL_STYLE}>
          <CustomTheme {...MODAL_COLOR}>
            <Box sx={styles.CONTAINER_STYLE}>
              <Box component="div" sx={styles.CLOSE_BTN_CONTAINER_STYLE}>
                <Tooltip onClick={handleClose} placement="top" title="Close">
                  <IconButton size="small" color="inherit">
                    <DisabledByDefaultIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Typography
                variant="h5"
                component="h2"
                color="secondary"
                sx={styles.HEADING_STYLE}
              >
                Try Amazon Prime Music
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={styles.CONTENT_STYLE}
              >
                Ad-free music streaming included with Prime membership. Also
                includes free shipping and video streaming.
              </Typography>
              <Box component="div" sx={styles.BTN_CONTAINER_STYLE}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ ...styles.BUTTON_STYLE, flexGrow: 1 }}
                  onClick={() => navigate(LINKS.login)}
                >
                  Already a customer? Sign in
                </Button>
                <Fab
                  variant="extended"
                  color="primary"
                  sx={styles.BUTTON_STYLE}
                  onClick={() => navigate(LINKS.signup)}
                >
                  Try Now
                </Fab>
              </Box>
            </Box>
          </CustomTheme>
        </Box>
      </Modal>
    </>
  );
};

export default MusicModal;
