import React from 'react'
import "@esri/calcite-components/dist/components/calcite-block-section"
import "@esri/calcite-components/dist/components/calcite-slider"
import {  CalciteBlockSection, CalciteSlider } from '@esri/calcite-components-react'

const OpacitySlider = ({layerItem}) => {
  return (
    <CalciteBlockSection open text='Opacity'>
            <CalciteSlider
                labelTicks ticks="25" max="100" value={layerItem.opacity * 100}
                onCalciteSliderChange={({target}) => layerItem.opacity = target.value / 100
                }></CalciteSlider>
        </CalciteBlockSection>
  )
}

export default OpacitySlider

// created by Dan Farnsworth, updated by Michelle Stuart