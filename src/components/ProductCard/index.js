import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import { CARD } from "../../constants/images";
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const truncate = (input, maxCharacters) =>
    input.length > maxCharacters
      ? `${input.substring(0, maxCharacters)}...`
      : input;
  return (
    <Card sx={{ maxWidth: 345, height: 600 }}>
      <CardMedia sx={{ height: 340 }} image={product.image} title="image" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: 20 }}
        >
          {truncate(product.title, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncate(product.description, 50)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(`/products/${product._id}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
