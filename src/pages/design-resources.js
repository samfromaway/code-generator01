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
import Container from "@material-ui/core/Container";
import useLocalStorage from "./../hooks/useLocalStorage";

const DesignResources = () => {
  const resources = [
    ...Colors,
    ...CssFrameworks,
    ...CssAnimations,
    ...DesignSystems,
    ...DesignSoftware,
    ...DesignInspiration,
    ...Favicons,
    ...Fonts,
    ...HtmlCssTemplates,
    ...Icons,
    ...IconFonts,
    ...ImgCompression,
    ...JsAnimations,
    ...OnlineDesignTools,
    ...ProductImgMockups,
    ...StockPhoto,
    ...StockVideo,
    ...StockMusicSFX,
    ...UIGraphics,
    ...VectorClipart,
    ...UIComponentKits,
    ...ReactUILibraries,
    ...VueUILibraries,
    ...AngularUILibraries,
    ...SvelteUILibraries,
    ...Others,
  ];

  const [searchTextQuery, setSearchTextQuery] = useState("");
  const [searchDropdownQuery, setSearchDropdownQuery] = useState(
    "All Categories"
  );
  const [items, setItems] = useState(resources);
  const [showFavorites, setShowFavorites] = useState(false);
  const [listedResources, setListedResources] = useState([]);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [favoriteResourcesId, setFavoriteResourcesId] = useLocalStorage(
    "favoriteDesignResource",
    []
  );
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(listedResources.length / itemsPerPage);
  const resetPage = 1;
  const localStorageIsFavorite =
    JSON.parse(localStorage.getItem("favoriteDesignResource")) || [];

  const handlePageChange = (event, value) => {
    setPage(value);
    updatePaginetedItems(listedResources, value);
  };

  const updatePaginetedItems = (items, page) => {
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginatedItemsFromItems = items.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    setPaginatedItems(paginatedItemsFromItems);
  };

  const favoritesFilter = (items) => {
    if (favoriteResourcesId.length > 0 && showFavorites) {
      return items.filter((item) => item.isFavorite);
    } else {
      return items;
    }
  };

  const dropdownFilter = (items) => {
    if (searchDropdownQuery === "All Categories") {
      return items;
    } else {
      return items.filter(
        (resource) => resource.category === searchDropdownQuery
      );
    }
  };

  const textFilter = (items) => {
    return items.filter((resource) =>
      resource.title.toLowerCase().includes(searchTextQuery.toLowerCase())
    );
  };

  const filterQuery = () => {
    const filter1 = favoritesFilter(items);
    const filter2 = dropdownFilter(filter1);
    const filter3 = textFilter(filter2);
    setListedResources(filter3);
    updatePaginetedItems(filter3, resetPage);
    setPage(resetPage);
  };

  const addIsFavoriteToResourceFromLocalStorage = (
    favoriteResources,
    resources
  ) => {
    favoriteResources.forEach((favoriteResource) =>
      resources.forEach((resource) => {
        if (favoriteResource === resource.id) {
          resource.isFavorite = true;
        }
      })
    );
  };

  const handleFavoritesChange = (value, change) => {
    const newItems = items.map((element) => {
      if (element.id !== value) {
        return element;
      }
      return { ...element, isFavorite: change };
    });

    setItems(newItems);
    // updatePaginetedItems(newItems, resetPage);
  };

  const handleResetInput = () => {
    setSearchTextQuery("");
  };

  useEffect(() => {
    filterQuery();
    // eslint-disable-next-line
  }, [searchTextQuery, searchDropdownQuery, showFavorites]);

  useEffect(() => {
    addIsFavoriteToResourceFromLocalStorage(localStorageIsFavorite, resources);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ResourcesInput
            items={items}
            handleResetInput={handleResetInput}
            searchTextQuery={searchTextQuery}
            searchDropdownQuery={searchDropdownQuery}
            showFavorites={showFavorites}
            listedResources={listedResources}
            setSearchTextQuery={setSearchTextQuery}
            setSearchDropdownQuery={setSearchDropdownQuery}
            setShowFavorites={setShowFavorites}
          />
        </Grid>
        <Grid item xs={12}>
          <ResourcesList
            listedResources={listedResources}
            favoriteResourcesId={favoriteResourcesId}
            setFavoriteResourcesId={setFavoriteResourcesId}
            paginatedItems={paginatedItems}
            handleFavoritesChange={handleFavoritesChange}
          />
        </Grid>
        <Grid
          container
          item
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DesignResources;
