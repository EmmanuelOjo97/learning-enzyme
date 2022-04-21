import React from "react";
import "./app.css";

function Header() {
  return (
    <header className="header">
      <h1>Hello worldo</h1>
    </header>
  );
}

const styles = {
  pin_container: {
    position: "sticky",
    top: 0,
  },
};

// style={styles.pin_container}

export default Header;
