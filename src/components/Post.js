import {
  Favorite,
  FavoriteBorder,
  Label,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Morning in Paris"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?cs=srgb&dl=pexels-elina-sazonova-1850619.jpg&fm=jpg"
        alt="Paris"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The City of Paris is the centre of the Île-de-France region, or Paris
          Region, with an estimated population of 12,262,544 in 2019. Paris
          Museums were closed for much of 2020, but gradually re-opened in 2021,
          with limitations on the number of visitors.
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
  );
};

export default Post;
