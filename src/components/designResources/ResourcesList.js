import React from "react";
import ResourcesListItem from "./ResourcesListItem";
import List from "@material-ui/core/List";

const ResourcesList = ({
  resources,
  listedResources,
  favoriteResourcesId,
  setFavoriteResourcesId,
  paginatedItems,
}) => {
  if (listedResources.length === 0) {
    return (
      <h3 className="nothing-found-msg">
        No resources found
        <span role="img" aria-label="search">
          😯
        </span>
      </h3>
    );
  } else {
    return (
      <List className="resources-list">
        {paginatedItems.map((resource) => (
          <ResourcesListItem
            key={resource.id}
            resource={resource}
            resources={resources}
            favoriteResourcesId={favoriteResourcesId}
            setFavoriteResourcesId={setFavoriteResourcesId}
          />
        ))}
      </List>
    );
  }
};

export default ResourcesList;
