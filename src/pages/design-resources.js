import React, { useEffect, useState } from "react";
import ResourcesInput from "./../components/designResources/ResourcesInput";
import ResourcesList from "./../components/designResources/ResourcesList";
import Pagination from "@material-ui/lab/Pagination";
import UIGraphics from "../data/resources/UIGraphics";
import Fonts from "../data/resources/Fonts";
import Colors from "../data/resources/Colors";
import Icons from "../data/resources/Icons";
import Favicons from "../data/resources/Favicons";
import IconFonts from "../data/resources/IconFonts";
import StockPhoto from "../data/resources/StockPhoto";
import StockVideo from "../data/resources/StockVideo";
import StockMusicSFX from "../data/resources/StockMusicSFX";
import VectorClipart from "../data/resources/VectorClipart";
import ProductImgMockups from "../data/resources/ProductImgMockups";
import HtmlCssTemplates from "../data/resources/HtmlCssTemplates";
import CssFrameworks from "../data/resources/CssFrameworks";
import CssAnimations from "../data/resources/CssAnimations";
import JsAnimations from "../data/resources/JsAnimations";
import UIComponentKits from "../data/resources/UIComponentKits";
import ReactUILibraries from "../data/resources/ReactUILibraries";
import VueUILibraries from "../data/resources/VueUILibraries";
import AngularUILibraries from "../data/resources/AngularUILibraries";
import SvelteUILibraries from "../data/resources/SvelteUILibraries";
import DesignSystems from "../data/resources/DesignSystems";
import OnlineDesignTools from "../data/resources/OnlineDesignTools";
import DesignSoftware from "../data/resources/DesignSoftware";
import DesignInspiration from "../data/resources/DesignInspiration";
import ImgCompression from "../data/resources/ImgCompression";
import Others from "../data/resources/Others";
import Grid from "@material-ui/core/Grid";

const DesignResources = () => {
  const resources = [
    ...UIGraphics,
    ...Fonts,
    ...Colors,
    ...Icons,
    ...Favicons,
    ...IconFonts,
    ...StockPhoto,
    ...StockVideo,
    ...StockMusicSFX,
    ...VectorClipart,
    ...ProductImgMockups,
    ...HtmlCssTemplates,
    ...CssFrameworks,
    ...CssAnimations,
    ...JsAnimations,
    ...UIComponentKits,
    ...ReactUILibraries,
    ...VueUILibraries,
    ...AngularUILibraries,
    ...SvelteUILibraries,
    ...DesignSystems,
    ...OnlineDesignTools,
    ...DesignSoftware,
    ...DesignInspiration,
    ...ImgCompression,
    ...Others,
  ];

  const [searchTextQuery, setSearchTextQuery] = useState("");
  const [searchDropdownQuery, setSearchDropdownQuery] = useState(
    "All Categories"
  );
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteResourcesId, setFavoriteResourcesId] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [listedResources, setListedResources] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedItems = listedResources.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(listedResources.length / itemsPerPage);
  //step one, filter the ones from favorites
  // const selectedFavoriteResources = () => {
  //   if (favoriteResourcesId.length > 0 && showFavorites) {
  //     const favoriteResources = [];
  //     favoriteResourcesId.forEach((favoriteResource) =>
  //       resources.forEach((resource) => {
  //         if (favoriteResource === resource.id) {
  //           favoriteResources.push(resource);
  //         }
  //       })
  //     );
  //     return favoriteResources;
  //   } else {
  //     return resources;
  //   }
  // };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filterQuery = () => {
    //step two, filter the ones from dropdown
    const selectedDropDownResources = () => {
      if (searchDropdownQuery === "All Categories") {
        return resources;
      } else {
        return resources.filter(
          (resource) => resource.category === searchDropdownQuery
        );
      }
    };
    //step three, filter the ones from text input
    const resultsTextInput = selectedDropDownResources().filter((resource) =>
      resource.title.toLowerCase().includes(searchTextQuery.toLowerCase())
    );

    const addPagination = resultsTextInput;

    setListedResources(resultsTextInput);
  };

  // const findFavoritesId = (favoriteResources, resources) => {
  //   favoriteResources.forEach((favoriteResource) =>
  //     resources.forEach((resource) => {
  //       if (favoriteResource === resource.id) {
  //         resource.isFavorite = true;
  //       }
  //     })
  //   );
  // };
  // findFavoritesId(favoriteResourcesId, resources);

  useEffect(() => {
    filterQuery();
  }, [searchTextQuery, searchDropdownQuery]);

  return (
    <>
      <ResourcesInput
        resources={resources}
        searchTextQuery={searchTextQuery}
        searchDropdownQuery={searchDropdownQuery}
        showFavorites={showFavorites}
        listedResources={listedResources}
        setSearchTextQuery={setSearchTextQuery}
        setSearchDropdownQuery={setSearchDropdownQuery}
        setShowFavorites={setShowFavorites}
      />
      <ResourcesList
        resources={resources}
        listedResources={listedResources}
        favoriteResourcesId={favoriteResourcesId}
        setFavoriteResourcesId={setFavoriteResourcesId}
        setSearchDropdownQuery={setSearchDropdownQuery}
        setShowFavorites={setShowFavorites}
        paginatedItems={paginatedItems}
      />
      <Grid
        item
        style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </Grid>
    </>
  );
};

export default DesignResources;
