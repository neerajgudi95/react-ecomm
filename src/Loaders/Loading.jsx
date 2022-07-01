import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  const centered = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <div className="loader" style={centered}>
      <CircularProgress color="primary" />
    </div>
  );
}
