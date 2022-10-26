import { CalciteBlock } from '@esri/calcite-components-react'
import "@esri/calcite-components/dist/components/calcite-block"
import React from 'react'

const LayerBlock = ({layerItem, children}) => {
  return (
    <CalciteBlock collapsible heading={layerItem.title} dragHandle >
        {children}
    </CalciteBlock>
  )
}

export default LayerBlock

