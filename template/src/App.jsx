import React from 'react';
import "@esri/calcite-components/dist/calcite/calcite.css"
import "@esri/calcite-components/dist/components/calcite-shell"
import "@esri/calcite-components/dist/components/calcite-loader"
import { 
  // CalciteLoader,  
  CalciteShell
 } from '@esri/calcite-components-react';
import styled from 'styled-components';
import CoreMap from './components/CoreMap';
// import LeftShellPanel from './components/LeftShellPanel';
// import { useSelector } from 'react-redux';

const Styles = {
  // Title: styled.h2` {
  //     margin-left: 1rem;
  //     margin-right: 1rem;
  // }`,
  // Loader: styled(CalciteLoader)`
  // align-self: center;
  // justify-self: center;
  // `,
  AppCont: styled.div`
  display: flex;
  `,
}

const App = () => {

  const mapTitle = 'Test Map'

  return (
    <Styles.AppCont>
    {/* <CalciteLoader active ></CalciteLoader> */}
  <CalciteShell contentBehind 
  >
    <h2 style={{margin: '1rem'}} slot="header">
      {mapTitle}
      </h2>
   {/* <LeftShellPanel/> */}
      {/* <Map/> */}
      <CoreMap/>
  </CalciteShell>
  </Styles.AppCont>
  )
};

export default App;
