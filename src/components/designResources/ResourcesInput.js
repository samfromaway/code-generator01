import React from "react";
import { Star, Search, Cancel, ArrowDropDown } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper01 from "./../Paper01";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const ResourcesInput = ({
  resources,
  searchTextQuery,
  searchDropdownQuery,
  showFavorites,
  listedResources,
  setSearchTextQuery,
  setSearchDropdownQuery,
  setShowFavorites,
}) => {
  const resourceCategories = () => {
    const allCategories = resources.map((resource) => resource.category);
    return ["All Categories", ...new Set(allCategories)];
  };

  const handleTextChange = (e) => {
    setSearchTextQuery(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSearchDropdownQuery(e.target.value);
  };

  const toggleFavorites = (e) => {
    setShowFavorites(e.target.checked);
  };

  const resetTextSearch = () => {
    setSearchTextQuery("");
  };
  return (
    <Paper01 title="Design Resources">
      <div className="reference-title">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bradtraversy/design-resources-for-developers"
        >
          <h3>Inspired By Brad Traversy's Repo</h3>
        </a>
      </div>

      <div className="inputs">
        <div className="text-input-wrapper">
          <TextField
            id="input-with-icon-textfield"
            variant="filled"
            onChange={handleTextChange}
            value={searchTextQuery}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                  <Cancel
                    className="text-input-cancel"
                    onClick={resetTextSearch}
                  />
                </InputAdornment>
              ),
            }}
          />
          <FormControl
            value={searchDropdownQuery}
            onChange={handleDropdownChange}
          >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              {resourceCategories().map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <h3 className="counter">
            {`Found ${listedResources.length} of ${resources.length} `}
          </h3>
        </div>

        <label className="show-favorites-label">
          Show Favorites
          <input
            checked={showFavorites}
            type="checkbox"
            style={{ display: "none" }}
            className="checkbox"
            onChange={toggleFavorites}
          />
          <Star
            className="star-icon"
            style={showFavorites ? { color: "yellow" } : { color: "white" }}
          />
        </label>
      </div>
    </Paper01>
  );
};

export default ResourcesInput;
