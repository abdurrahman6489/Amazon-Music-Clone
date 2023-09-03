import React from "react";
import { Link } from "react-router-dom";
import LINKS from "./links";
import { styles } from "./error.style";
import "../assets/error.png";
const Error = () => {
  return (
    <div style={styles.CONTAINER_STYLE}>
      <h1 style={styles.TEXT_STYLE}>
        We were unable to find the page you were looking for.
      </h1>
      <p style={styles.TEXT_STYLE}>
        Please return to the <Link to={LINKS.home}>Amazon Music homepage</Link>.
      </p>
    </div>
  );
};

export default Error;
