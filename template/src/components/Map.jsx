import React, { useRef, useEffect } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Search from '@arcgis/core/widgets/Search'
import { MapContainer, StyledMap } from "./Map.styled";

const Map = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new ArcGISMap({
        basemap: "topo-vector",
      });

      const view = new MapView({
        map,
        center: [-74.5362152, 39.9794462], // extent for the shore
        zoom: 9,

        container: mapDiv.current,
      });
      let search = new Search({
        view: view,
        locationEnabled: false,
       });
       view.ui.add([search], "top-right");
    
    }
  }, []);

  return (
    <MapContainer>
      {/* {view ? ( */}

      <StyledMap className="mapDiv" ref={mapDiv}></StyledMap>

      {/* ) : ( */}
      {/* <div>The map will go here</div> */}
      {/* )} */}
    </MapContainer>
  );
};

export default Map;
