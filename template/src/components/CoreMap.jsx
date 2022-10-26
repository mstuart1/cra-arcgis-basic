import React, { useRef, useLayoutEffect, useContext }  from 'react'
import MapView from '@arcgis/core/views/MapView';
import ArcGISMap from '@arcgis/core/Map';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { AppContext } from '../context';
import styled from 'styled-components';
import createMapView from '../tools/createMapView';

const Styles = {
    ViewDiv: styled.div`
    height: 100%;
    `,
}

export default function CoreMap() {
  const mapRef = useRef(null);
  const { setLayerView, setView, view} = useContext(AppContext);

  useLayoutEffect(() => {
    if (mapRef.current) {
        setView(createMapView(mapRef.current, {basemap: 'topo-vector'},))
      // view.whenLayerView(layer).then(setLayerView);
    }
  }, [mapRef]);
  view?.ui.move('zoom', 'bottom-right')

  return <Styles.ViewDiv className="view-div" ref={mapRef}></Styles.ViewDiv>;
}
