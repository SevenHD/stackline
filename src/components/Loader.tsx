import React from "react";
import { DotLoader } from "react-spinners";

function Loader() {
  return (
    <>
      {/* Render transparent background */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "gray",
          opacity: "0.2",
          height: "100vh",
          width: "100vw",
        }}
      />
      <DotLoader
        color={"#052849"}
        loading={true}
        cssOverride={{
          display: "block",
          top: "40%",
          left: "50%",
          borderColor: "red",
          position: "absolute",
        }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />{" "}
    </>
  );
}

export default Loader;
