import "@esri/calcite-components/dist/components/calcite-action"
import { CalciteAction } from '@esri/calcite-components-react'
import React from 'react'
import actionItems from "../data/actionItems"

const ActionItems = ({activeWidget}) => {

  return actionItems.map((item, i) => {
       return (
          <CalciteAction key={i} dataActionId={item.dataActionId} icon={item.icon} text={item.text.toUpperCase()} active={activeWidget === item.dataActionId || null} ></CalciteAction>
      )
      })
  
}

export default ActionItems