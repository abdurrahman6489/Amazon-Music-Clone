import React from "react";
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

import { useDispatch } from "react-redux";
import { setClose } from "../../App/features/comingSoon/comingSoonSlice";

import CustomTheme from "../AmazonMusic/CustomTheme";
import { MODAL_COLOR } from "../AmazonMusic/constants";
import { styles } from "./index.style";
const FEATURECOMINGSOON = ({ open }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setClose());
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div" sx={styles.MODAL_STYLE}>
          <CustomTheme {...MODAL_COLOR}>
            <Box component="div" sx={styles.CLOSE_BTN_CONTAINER_STYLE}>
              <Tooltip onClick={handleClose} placement="top" title="Close">
                <IconButton size="small" color="inherit">
                  <DisabledByDefaultIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h6" color="primary">
              Feature coming soon
            </Typography>
          </CustomTheme>
        </Box>
      </Modal>
    </>
  );
};

export default FEATURECOMINGSOON;
