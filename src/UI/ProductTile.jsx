import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

export default function ProductTile({ product }) {
  const styles = {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
  };

  return (
    <Card sx={{ maxWidth: 300, height: "100%" }} style={styles}>
      <CardMedia
        component="img"
        height="140"
        image={product.item.enrichment.images.primary_image_url}
        alt="green iguana"
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
          {HTMLReactParser(product.item.product_description.title)}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton
          aria-label="add to favorites"
          onClick={() => console.log(product.item.tcin)}
        >
          <FavoriteBorderOutlinedIcon color="error" />
        </IconButton>
        <Link size="small" to={`/products/${product.item.tcin}`}>
          <IconButton>
            <InfoOutlinedIcon color="primary" />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
