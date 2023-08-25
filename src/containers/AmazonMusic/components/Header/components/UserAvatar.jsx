import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
const UserAvatar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, name } = useSelector((state) => state.user);
  const userFirstLeter = name?.split("")[0] || "";

  return (
    <>
      {!isLoggedIn && (
        <Avatar>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
      )}
      {isLoggedIn && <Avatar>{userFirstLeter}</Avatar>}
    </>
  );
};

export default UserAvatar;
