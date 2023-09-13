import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const menu = ["Report", "View More", "Edit", "Delete"];

export default function Blogcard() {
  var [counter, setCounter] = React.useState(0);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // const listItem =

  function increaseLikes() {
    counter += 1;
    setCounter(counter);
    console.log(counter);
  }
  function showMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton onClick={showMenu} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        {toggleMenu ? (
          <List>
            {menu.map((value) => (
              <ListItem key={value.toString} disablePadding>
                <ListItemButton>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          ""
        )}
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={increaseLikes} aria-label="add to favorites">
            {counter === 0 && <FavoriteIcon />}
            {counter > 0 && <FavoriteIcon style={{ color: "red" }} />}
            {counter}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
}
