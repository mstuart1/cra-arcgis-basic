import React from 'react'
import "@esri/calcite-components/dist/components/calcite-panel"
import { CalcitePanel } from '@esri/calcite-components-react'
import actionItems from "../data/actionItems"

const PanelItems = ({activeWidget}) => {
    
    
  return actionItems.map((item, i) => {
       return (
          <CalcitePanel key={i}
          dataPanelId={item.dataActionId}
           hidden={activeWidget !== item.dataActionId} heightScale='l' heading={item.text.toUpperCase()}>
            <div ref={`${item.dataActionId}Container`}></div>
           </CalcitePanel>
      )
      })
  
}
export default PanelItems