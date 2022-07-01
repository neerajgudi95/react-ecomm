import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function CategorySkeletonLoader() {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "50px",
    width: "100%",
  };
  return (
    <div style={{ height: "100vh" }}>
      <div style={styles}>
        <Skeleton variant="rectangular" width={150} height={150} />
        <Skeleton variant="rectangular" width={150} height={150} />
        <Skeleton variant="rectangular" width={150} height={150} />
        <Skeleton variant="rectangular" width={150} height={150} />
      </div>
    </div>
  );
}
