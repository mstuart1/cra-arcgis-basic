import React, { useContext, useEffect, useRef } from 'react';
import "@esri/calcite-components/dist/calcite/calcite.css"
import "@esri/calcite-components/dist/components/calcite-loader"
import "@esri/calcite-components/dist/components/calcite-panel"
import "@esri/calcite-components/dist/components/calcite-shell"
import "@esri/calcite-components/dist/components/calcite-shell-panel"
import {
  CalciteLoader,
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel
} from '@esri/calcite-components-react';
import styled from 'styled-components';
import LegendBlock from './components/LegendBlock'
import { AppContext } from './context';
import LayerList from './components/LayerList';
import createMapView from './tools/createMapView';
import BasemapBlock from './components/BasemapBlock';
import SearchBlock from './components/SearchBlock';

const Styles = {
  // Title: styled.h2` {
  //     margin-left: 1rem;
  //     margin-right: 1rem;
  // }`,
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

  const { view, setView } = useContext(AppContext);

  useEffect(() => {
    let mapProps = { basemap: 'topo-vector' }
    let viewProps = {
      container: mapRef.current,
      center: [-74.5, 40],
      zoom: 9,
    }
    setView(createMapView(mapProps, viewProps))
  }, [])


  return (
    <Styles.AppCont>
      <CalciteLoader active ></CalciteLoader>
      <CalciteShell contentBehind
      >
        <h2 style={{ margin: '1rem' }} slot="header">
          {mapTitle}
        </h2>
        <CalciteShellPanel detached slot='primary-panel'>
          <CalcitePanel>
          <LayerList />
          <LegendBlock view={view} />
          <BasemapBlock view={view}/>
          <SearchBlock view={view}/>
          </CalcitePanel>
        </CalciteShellPanel>
        <Styles.ViewDiv ref={mapRef}></Styles.ViewDiv>

      </CalciteShell>
    </Styles.AppCont>
  )
};

export default App;
