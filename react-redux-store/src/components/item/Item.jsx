import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={item.imageURL}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.discription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Добавить в корзину</Button>
      </CardActions>
    </Card>
  );
};
export default Item;
