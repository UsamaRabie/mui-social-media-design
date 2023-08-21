import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
  <Container sx={{  maxWidth:"700px" , display:"flex", flexDirection:"column" , alignItems:"center" , justifyContent:"center" }}>
      <Card sx={{marginTop:"20px" , maxWidth:"700px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              U
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Usama Rabie"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://source.unsplash.com/random/200x200?sig=20"
          alt="Paella dish"
          sx={{maxWidth:"700px"}}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the
            mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  </Container>
  );
};

export default Post;
