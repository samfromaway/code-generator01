import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import YellowStarCheckbox from "./../YellowStarCheckbox";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 3,
    marginBottom: theme.spacing(2),
    "&:hover": { backgroundColor: "#606060" },
  },
}));

const ResourcesListItem = ({
  resource,
  favoriteResourcesId,
  setFavoriteResourcesId,
  handleFavoritesChange,
}) => {
  const classes = useStyles();

  const handleCheckedChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      addIsFavorite(value);
    } else {
      deleteIsFavorite(value);
    }
  };

  const addIsFavorite = (value) => {
    const newFavorites = [value, ...favoriteResourcesId];
    setFavoriteResourcesId(newFavorites);
    handleFavoritesChange(value, true);
  };

  const deleteIsFavorite = (value) => {
    const newFavorites = favoriteResourcesId.filter(
      (existingResource) => existingResource !== value
    );
    setFavoriteResourcesId(newFavorites);
    handleFavoritesChange(value, false);
  };

  return (
    <ListItem button className={classes.root}>
      <ListItemIcon>
        <YellowStarCheckbox
          color="primary"
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon />}
          name="favorites"
          value={resource.id}
          onChange={handleCheckedChange}
          checked={favoriteResourcesId.some((e) => e === resource.id)}
        />
      </ListItemIcon>

      <ListItemText
        primary={resource.title}
        secondary={resource.desc}
        onClick={() => window.open(resource.link, "_blank")}
      />
      <p>{resource.category}</p>
    </ListItem>
  );
};

export default ResourcesListItem;
