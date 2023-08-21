import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random/200x200?sig=21"
          />
          <Avatar
            alt="Travis Howard"
            src="https://source.unsplash.com/random/200x200?sig=22"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://source.unsplash.com/random/200x200?sig=23"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://source.unsplash.com/random/200x200?sig=24"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://source.unsplash.com/random/200x200?sig=25"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://source.unsplash.com/random/200x200?sig=26"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://source.unsplash.com/random/200x200?sig=27"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://source.unsplash.com/random/200x200?sig=28"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/200x200?sig=29"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/200x200?sig=30"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/200x200?sig=31"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/200x200?sig=32" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://source.unsplash.com/random/200x200?sig=33" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random/200x200?sig=34" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
