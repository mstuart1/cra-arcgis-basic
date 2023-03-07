import React, { useContext, useEffect, useRef } from 'react';
import "@esri/calcite-components/dist/calcite/calcite.css"
import "@esri/calcite-components/dist/components/calcite-action"
import "@esri/calcite-components/dist/components/calcite-block"
import "@esri/calcite-components/dist/components/calcite-block-section"
import "@esri/calcite-components/dist/components/calcite-shell"
import "@esri/calcite-components/dist/components/calcite-shell-panel"
// import "@esri/calcite-components/dist/components/calcite-loader"
import {
  CalciteAction,
  CalciteBlock,
  CalciteBlockSection,
  CalciteShell,
  CalciteShellPanel
  // CalciteLoader,  
} from '@esri/calcite-components-react';
import styled from 'styled-components';
import ArcGISMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import allLayers from './data/layers/allLayers'
import Legend from '@arcgis/core/widgets/Legend'

const Styles = {
  // Loader: styled(CalciteLoader)`
  // align-self: center;
  // justify-self: center;
  // `,
  ViewDiv: styled.div`
    height: 100%;
    `,

  AppCont: styled.div`
  display: flex;
  `,
}

const App = () => {

  const mapTitle = 'Test Map'
  const mapRef = useRef(null);
  const legRef = useRef(null);

  const [view, setView] = useState()

  useEffect(() => {
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

    // eslint-disable-next-line
    let legend = new Legend({
      view,
      container: legRef.current,
      hideLayersNotInCurrentView: true,
    })
  }, [])

  useEffect(() => {
    let mapProps = { basemap: 'topo-vector' }
    let viewProps = {
      container: mapRef.current,
      center: [-74.5, 40],
      zoom: 9,
    }
    setView(createMapView(mapProps, viewProps))
  }, [])

  const handleAddLayer = (layerId) => {
    let layerToLoad = allLayers.filter(layer => layer.layerId === layerId)[0].item
    let freshMap = view?.map
    freshMap.add(layerToLoad)
    setView({ ...view, map: freshMap })
  }
  const handleRemoveLayer = (title) => {
    console.log('remove layer', title, view)
    let layerToRemove = view?.map.allLayers.items.filter(item => item.title === title)[0]
    let freshMap = view?.map
    freshMap.remove(layerToRemove)
    setView({ ...view, map: freshMap })
  }



  return (
    <Styles.AppCont>
      {/* <CalciteLoader active ></CalciteLoader> */}
      <CalciteShell contentBehind
      >
        <h2 style={{ margin: '1rem' }} slot="header">
          {mapTitle}
        </h2>
        <CalciteShellPanel detached slot='panel-start'>
          <CalciteBlock collapsible heading='Layers' summary='select layers to be loaded to the map' >

            {allLayers.map((layer, i) => (
              <CalciteBlockSection key={i} text={layer.item.title}>
                <CalciteAction text='Add Layer' textEnabled icon='add-layer' onClick={() => handleAddLayer(layer.layerId)}></CalciteAction>
                <CalciteAction text='Remove Layer' textEnabled icon='trash' onClick={() => handleRemoveLayer(layer.item.title)}></CalciteAction>

              </CalciteBlockSection>
            ))}


          </CalciteBlock>
          <CalciteBlock heading='Legend' collapsible>
            <Styles.ViewDiv ref={legRef}></Styles.ViewDiv>
          </CalciteBlock>
        </CalciteShellPanel>
        <Styles.ViewDiv ref={mapRef}></Styles.ViewDiv>

      </CalciteShell>
    </Styles.AppCont>
  )
};

export default App;
