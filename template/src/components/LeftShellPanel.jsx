import React, { useContext, useEffect, useRef, useState } from 'react'

import "@esri/calcite-components/dist/components/calcite-action-bar"
import "@esri/calcite-components/dist/components/calcite-block"
import "@esri/calcite-components/dist/components/calcite-button"
import "@esri/calcite-components/dist/components/calcite-shell-panel"
import "@esri/calcite-components/dist/components/calcite-label"

import "@esri/calcite-components/dist/components/calcite-panel"
import "@esri/calcite-components/dist/components/calcite-rating"
import {
  CalciteAction,
  CalciteBlock,
  CalciteBlockSection,
  CalciteShellPanel,
  // CalciteActionBar,
  // CalciteButton,
} from '@esri/calcite-components-react';
import { allLayers } from '../data/layers/allLayers'
import { AppContext } from '../context'
import addLayerList from '../tools/addLayerList'
// import { useDispatch,  } from 'react-redux'
// import ActionItems from './ActionItems';
// import PanelItems from './PanelItems';
// import { actionBarToggle } from '../features/actionBar/actions';
// import { setViewPadding } from '../features/mapView/actions';

const LeftShellPanel = () => {
  // const dispatch = useDispatch()
let layerDiv = useRef()
  const {view} = useContext(AppContext);

  const handleAddLayer = (layerId) => {
    let layerToLoad = allLayers.filter(layer => layer.layerId === layerId)[0].item
    view?.map.add(layerToLoad)
  }

  useEffect(() => {
    addLayerList(view, layerDiv.current)
  }, [])
  
  return (
    <CalciteShellPanel slot='primary-panel' detached>
      {/* <CalciteActionBar slot="action-bar" onClick={handleActionBarClick}
      //  onCalciteActionBarToggle={() => handleActionBarToggle()} 
      //  expanded={expanded}
       >
     <ActionItems activeWidget={activeWidget} />
      </CalciteActionBar> */}
      {/* <PanelItems activeWidget={activeWidget} /> */}
      <CalciteBlock collapsible heading='Add Layers' summary='select layers to be loaded to the map' >
        <CalciteBlockSection>
          {allLayers.map((layer,i) => (
          <CalciteAction key={i} text={layer.layerId} textEnabled icon='add-layer' onClick={() => handleAddLayer(layer.layerId)}></CalciteAction>
          ))}
        </CalciteBlockSection>

      </CalciteBlock>
      <CalciteBlock collapsible heading='Manage Layers' summary='manipulate layers that have been loaded to the map' >
        <CalciteBlockSection ref={layerDiv}>
         
        </CalciteBlockSection>

      </CalciteBlock>

    </CalciteShellPanel>
  )
}

export default LeftShellPanel