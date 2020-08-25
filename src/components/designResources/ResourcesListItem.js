import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Star } from "@material-ui/icons";
//import YellowStarCheckbox from "./../YellowStarCheckbox";

const ResourcesListItem = ({
  resource,
  resources,
  setFavoriteResourcesId,
  favoriteResourcesId,
}) => {
  const handleFavoriteChange = (e) => {
    // const resource = resources.filter(
    //   (resource) => resource.id === e.target.value
    // );
    // if (e.target.checked) {
    //   resource[0].isFavorite = true;
    //   localStorage.setItem(
    //     "favorites",
    //     JSON.stringify([e.target.value, ...favoriteResourcesId])
    //   );
    //   setFavoriteResourcesId(
    //     JSON.parse(localStorage.getItem("favorites") || [])
    //   );
    // } else {
    //   resource[0].isFavorite = false;
    //   setFavoriteResourcesId(
    //     localStorage.setItem(
    //       "favorites",
    //       JSON.stringify(
    //         favoriteResourcesId.filter(
    //           (existingResource) => existingResource !== e.target.value
    //         )
    //       )
    //     )
    //   );
    //   setFavoriteResourcesId(
    //     JSON.parse(localStorage.getItem("favorites") || [])
    //   );
    // }
  };

  return (
    <ListItem button>
      <ListItemIcon>
        <IconButton
          edge="end"
          aria-label="favorite"
          checked={resource.isFavorite ? true : false}
          type="checkbox"
          value={resource.id}
          className="list-item-checkbox"
          onChange={handleFavoriteChange}
        >
          <Star />
        </IconButton>
      </ListItemIcon>
      {/* <a
        className="list-item-info"
        target="_blank"
        rel="noopener noreferrer"
        href={resource.link}
      ></a> */}
      <ListItemText primary={resource.title} secondary={resource.desc} />

      <p>{resource.category}</p>
    </ListItem>
  );
};

export default ResourcesListItem;
