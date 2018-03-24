import React from "react";

const styles = {
  color: "blue",
  textDecoration: "underlined"
};

export default ({ libKey, text }) => (
  <a href={libKey} style={styles}>
    {text}
  </a>
);
