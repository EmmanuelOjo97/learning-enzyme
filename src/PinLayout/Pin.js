import React from "react";

function Pin(props) {
  return (
    <div
      style={{
        ...styles.pin,
        ...styles[props.size],
      }}
    ></div>
  );
}

const styles = {
  pin: {
    margin: 10,
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
    width: "90%",
  },
  small: {
    gridRowEnd: "span 18",
    // pin span for size
    // 13
  },
  medium: {
    gridRowEnd: "span 22",
    //16
  },
  large: {
    gridRowEnd: "span 27",
    // 23
  },
};

export default Pin;
