import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./CategoryTile.module.css";

export default function CategoryTile({ displayImg, name, imgAlt }) {
  return (
    <Card sx={{ maxWidth: 200 }} className={styles.catTile}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={displayImg}
          alt={imgAlt}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontSize={14}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
