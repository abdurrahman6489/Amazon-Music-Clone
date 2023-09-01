import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
const EmptyRecords = ({ msg }) => {
  return (
    <div>
      <ErrorIcon fontSize="large" color="warning" />
      <h1 style={{ color: "white" }}>Sorry! No songs found for {msg}...</h1>
    </div>
  );
};

export default EmptyRecords;
