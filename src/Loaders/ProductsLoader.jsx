import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function ProductsLoader() {
  const loaderCount = [1, 2, 3, 4];
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "50px",
    width: "100%",
    marginTop: "50px",
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={styles}>
        {loaderCount.map((count, idx) => {
          return (
            <Stack spacing={1} key={idx}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
          );
        })}
      </div>
    </div>
  );
}
