import React, { useEffect, useState } from "react";
import ResourcesInput from "./../components/designResources/ResourcesInput";
import ResourcesList from "./../components/designResources/ResourcesList";
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
  const [listedResources, setListedResources] = useState(resources);

  useEffect(() => {
    if (showFavorites && favoriteResourcesId.length === 0) {
      alert("You Have No Favorites Saved");
      setShowFavorites(false);
    } else {
      //step one, filter the ones from favorites
      const selectedFavoriteResources = () => {
        if (favoriteResourcesId.length > 0 && showFavorites) {
          const favoriteResources = [];
          favoriteResourcesId.forEach((favoriteResource) =>
            resources.forEach((resource) => {
              if (favoriteResource === resource.id) {
                favoriteResources.push(resource);
              }
            })
          );
          return favoriteResources;
        } else {
          return resources;
        }
      };

      //step two, filter the ones from dropdown
      const selectedDropDownResources = () => {
        if (searchDropdownQuery === "All Categories") {
          return selectedFavoriteResources();
        } else {
          return selectedFavoriteResources().filter(
            (resource) => resource.category === searchDropdownQuery
          );
        }
      };

      //step three, filter the ones from text input
      const resultsTextInput = selectedDropDownResources().filter((resource) =>
        resource.title.toLowerCase().includes(searchTextQuery.toLowerCase())
      );

      setListedResources(resultsTextInput);
    }
    const findFavoritesId = (favoriteResources, resources) => {
      favoriteResources.forEach((favoriteResource) =>
        resources.forEach((resource) => {
          if (favoriteResource === resource.id) {
            resource.isFavorite = true;
          }
        })
      );
    };
    findFavoritesId(favoriteResourcesId, resources);
  }, []);
  return (
    <div>
      <ResourcesInput
        resources={resources}
        searchTextQuery={searchTextQuery}
        searchDropdownQuery={searchDropdownQuery}
        showFavorites={showFavorites}
        listedResources={listedResources}
        setSearchTextQuery={setSearchTextQuery}
      />
      <ResourcesList
        resources={resources}
        listedResources={listedResources}
        favoriteResourcesId={favoriteResourcesId}
        setFavoriteResourcesId={setFavoriteResourcesId}
        setSearchDropdownQuery={setSearchDropdownQuery}
        setShowFavorites={setShowFavorites}
      />
    </div>
  );
};

export default DesignResources;
