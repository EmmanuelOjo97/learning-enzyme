import React from "react";
import Pin from "./Pin";
import "../app.css";
import Header from "../Header";
import FakeHeader from "../FakeHeader";

function Card() {
  return (
    <div>
      <FakeHeader />
      <div style={styles.pin_container}>
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
      </div>
    </div>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    marginTop: 50,
    padding: 0,
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 150px)",
    gridAutoRows: "10px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "black",
  },
};

export default Card;
