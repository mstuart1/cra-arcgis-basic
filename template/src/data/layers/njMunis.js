import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const url = "https://services1.arcgis.com/ze0XBzU1FXj94DJq/arcgis/rest/services/NJ%20municipalities%20shapefile/FeatureServer";

const portalId = "95177982e99e46778881d34cb9ac4d99";

const layer = new FeatureLayer({
  portalItem: {
    id: portalId,
  },
  title: "Municipalities",
  visible: true,
  authoritativeSource: `https://rutgers.maps.arcgis.com/home/item.html?id=${portalId}`,
  mapService: `https://rutgers.maps.arcgis.com/home/item.html?id=${portalId}`,
  url,
});

export const munis = {layerId: 'munis', item: layer, meta: layer}


