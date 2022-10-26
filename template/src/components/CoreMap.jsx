import React, { useRef, useEffect }  from 'react'
import styled from 'styled-components';
import ArcGISMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'


const Styles = {
    ViewDiv: styled.div`
    height: 100%;
    `,
}

export default function CoreMap() {
  const mapRef = useRef(null);
  
  useEffect (() => { 
      const map = new ArcGISMap({  
          basemap: 'topo-vector'
      })
      const view = new MapView(
        {
          map,
          container: mapRef.current,
          center: [-74.5, 40],
          zoom: 9,
      })
      view.ui.move('zoom', 'bottom-right')
    }, [])

  

  return <Styles.ViewDiv ref={mapRef}></Styles.ViewDiv>;
}
