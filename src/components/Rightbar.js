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
import { width } from "@mui/system";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?cs=srgb&dl=pexels-mateus-souza-3586798.jpg&fm=jpg&_gl=1*2beky2*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk2NTY0NS43LjEuMTY2Njk2NjU3NC4wLjAuMA.."
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg&_gl=1*drf67f*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk2NTY0NS43LjEuMTY2Njk2NjY0Ny4wLjAuMA.."
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?cs=srgb&dl=pexels-kamiz-ferreira-2218786.jpg&fm=jpg&_gl=1*14mib63*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk2NTY0NS43LjEuMTY2Njk2NjY4MS4wLjAuMA.."
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?cs=srgb&dl=pexels-heitor-verdi-2169434.jpg&fm=jpg&_gl=1*1fx7zb8*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk2NTY0NS43LjEuMTY2Njk2NjcxNS4wLjAuMA.."
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg&_gl=1*1wcq1y0*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk2NTY0NS43LjEuMTY2Njk2NjY4My4wLjAuMA.."
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg&_gl=1*4o5rwd*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk2NTY0NS43LjEuMTY2Njk2NjczNS4wLjAuMA.."
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/47727/budapest-church-architecture-matthias-church-47727.jpeg?cs=srgb&dl=pexels-pixabay-47727.jpg&fm=jpg&_gl=1*1egzzg5*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk4MzAwMy44LjEuMTY2Njk4MzI0Mi4wLjAuMA.."
              alt="Budapest"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/696288/pexels-photo-696288.jpeg?cs=srgb&dl=pexels-dominika-gregu%C5%A1ov%C3%A1-696288.jpg&fm=jpg&_gl=1*yd7nyr*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk4MzAwMy44LjEuMTY2Njk4MzI1NC4wLjAuMA.."
              alt="Budapest Church"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              style={{ maxHeight: "100px", objectFit: "cover" }}
              src="https://images.pexels.com/photos/1510682/pexels-photo-1510682.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1510682.jpg&fm=jpg&_gl=1*j4zsc0*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk4MzAwMy44LjEuMTY2Njk4MzI5OC4wLjAuMA.."
              alt="Croissant"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/13005263/pexels-photo-13005263.jpeg?cs=srgb&dl=pexels-daniel-duarte-13005263.jpg&fm=jpg&_gl=1*1i6kcne*_ga*MTk3MjcxNzIzMi4xNjU4MDY1NTI2*_ga_8JE65Q40S6*MTY2Njk4MzAwMy44LjEuMTY2Njk4NDE4NC4wLjAuMA.."
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sasha Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
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
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
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
