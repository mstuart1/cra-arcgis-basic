import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const url = "https://services2.arcgis.com/XVOqAjTOJ5P6ngMu/arcgis/rest/services/NJ_Counties_3857/FeatureServer";

const portalId = "ed7887264b054f4e82a4afb23a9214a4";

export const counties = new FeatureLayer({
  portalItem: {
    id: portalId,
  },
  visible: false,
  title: "Counties",
  layerId: 0,
  authoritativeSource: `https://newjersey.maps.arcgis.com/home/index.html`,
  mapService: `https://services2.arcgis.com/XVOqAjTOJ5P6ngMu/arcgis/rest/services/NJ_Counties_3857/FeatureServer`,
  url,
  oraId: 'counties'
});




