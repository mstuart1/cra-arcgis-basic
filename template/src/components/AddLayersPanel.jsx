import { CalcitePanel } from '@esri/calcite-components-react'
import React from 'react'

const AddLayersPanel = () => {
    return (
        <CalcitePanel key={i}
        dataPanelId={item.dataActionId}
         hidden={activeWidget !== item.dataActionId} heightScale='l' heading={item.text.toUpperCase()}>
          <div ref={`${item.dataActionId}Container`}></div>
         </CalcitePanel>
    )
}

export default AddLayersPanel