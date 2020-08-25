import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Paper01 from "./../Paper01";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SearchIcon from "@material-ui/icons/Search";
import YellowStarCheckbox from "./../YellowStarCheckbox";
import Typography from "@material-ui/core/Typography";

const ResourcesInput = ({
  items,
  searchTextQuery,
  searchDropdownQuery,
  showFavorites,
  listedResources,
  setSearchTextQuery,
  setSearchDropdownQuery,
  setShowFavorites,
}) => {
  const resourceCategories = () => {
    const allCategories = items.map((resource) => resource.category);
    return ["All Categories", ...new Set(allCategories)];
  };

  return (
    <Paper01 title="Design Resources">
      <Grid item>
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bradtraversy/design-resources-for-developers"
        >
          <p>Inspired By Brad Traversy's Repo</p>
        </a>
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="search"
            size="small"
            variant="outlined"
            onChange={(e) => setSearchTextQuery(e.target.value)}
            style={{ width: "100%" }}
            value={searchTextQuery}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            size="small"
            variant="outlined"
            style={{ width: "100%" }}
          >
            <Select
              id="category"
              value={searchDropdownQuery}
              onChange={(e) => setSearchDropdownQuery(e.target.value)}
            >
              {resourceCategories().map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item>
        <FormControlLabel
          control={
            <YellowStarCheckbox
              color="primary"
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon />}
              name="favorites"
              onChange={(e) => setShowFavorites(e.target.checked)}
              checked={showFavorites}
            />
          }
          label="Show Only Favorites"
        />
      </Grid>
      <Grid item>
        <Typography
          style={{ paddingBottom: 10 }}
        >{`Found ${listedResources.length} of ${items.length} `}</Typography>
      </Grid>
    </Paper01>
  );
};

export default ResourcesInput;
