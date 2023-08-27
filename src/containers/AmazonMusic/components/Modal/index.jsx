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

import CustomTheme from "../../CustomTheme";

import { MODAL_COLOR, MODAL_STYLE } from "../../constants";
import LINKS from "../../../links";
import { useNavigate } from "react-router-dom";

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
          <CustomTheme
            primaryColor={MODAL_COLOR.PRIMARY_COLOR}
            secondaryColor={MODAL_COLOR.SECONDARY_COLOR}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1em",
                position: "relative",
                width: { lg: "40%", md: "70%", sm: "80%", xs: "90%" },
              }}
            >
              <Box component="div" sx={{ textAlign: "right", width: "100%" }}>
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
                sx={{
                  fontFamily: `Helvetica Arial "sans-serif"`,
                  fontSize: "18",
                  textOverFlow: "ellipsis",
                }}
              >
                Try Amazon Prime Music
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                sx={{
                  fontFamily: `Ember Helvetica Arial "sans-serif"`,
                  fontSize: "18",
                  textOverFlow: "ellipsis",
                  textAlign: "center",
                }}
              >
                Ad-free music streaming included with Prime membership. Also
                includes free shipping and video streaming.
              </Typography>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                  gap: "1em",
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ flexGrow: 1, borderRadius: "1em" }}
                  onClick={() => navigate(LINKS.login)}
                >
                  Already a customer? Sign in
                </Button>
                <Fab
                  variant="extended"
                  color="primary"
                  sx={{ borderRadius: "1em" }}
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
