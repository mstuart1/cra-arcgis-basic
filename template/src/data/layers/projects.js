import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const url = "https://services1.arcgis.com/ze0XBzU1FXj94DJq/arcgis/rest/services/Final_Survey_Data_2021/FeatureServer/0";

const portalId = "4cf89dd9c3024d4381aa31e3c9ef435b";

export const layer = new FeatureLayer({
  portalItem: {
    id: portalId,
  },
  title: "Projects",
  layerId: 0,
  visible: true,
  authoritativeSource: 'https://crssa.rutgers.edu/projects/cerap/',
  mapService: `https://rutgers.maps.arcgis.com/home/item.html?id=${portalId}`,
  url,
});

export const projects = {layerId: 'projects', item: layer, meta: layer}


