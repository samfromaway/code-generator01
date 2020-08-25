import React from "react";
import ResourcesListItem from "./ResourcesListItem";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

const ResourcesList = ({
  listedResources,
  favoriteResourcesId,
  setFavoriteResourcesId,
  paginatedItems,
  handleFavoritesChange,
}) => {
  if (listedResources.length === 0) {
    return (
      <Typography align="center" className="nothing-found-msg">
        No resources found
        <span role="img" aria-label="emoji confused">
          😯
        </span>
      </Typography>
    );
  } else {
    return (
      <List className="resources-list">
        {paginatedItems.map((resource) => (
          <ResourcesListItem
            key={resource.id}
            resource={resource}
            favoriteResourcesId={favoriteResourcesId}
            setFavoriteResourcesId={setFavoriteResourcesId}
            handleFavoritesChange={handleFavoritesChange}
          />
        ))}
      </List>
    );
  }
};

export default ResourcesList;
