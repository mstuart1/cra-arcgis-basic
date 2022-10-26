import { CalciteSortableList } from '@esri/calcite-components-react';
import "@esri/calcite-components/dist/components/calcite-sortable-list"
import React from 'react'
import allLayers from '../data/layers/allLayers';
import LayerBlock from './LayerBlock';
import LayerSelection from './LayerSelection';
import OpacitySlider from './OpacitySlider';

const LayerList = ({view}) => {

    const reorderList = (nodeArray) => {
        nodeArray.forEach((node, i) => {
            console.log(node, 'layer')
            const layerId = node.oraId
            const foundLayer = view?.map.allLayers.items.filter(item => item.oraId === layerId)[0]
            if (!!foundLayer){
                view.map.reorder(foundLayer, nodeArray.length - i)
            }
        })
	}

    let blockElems = allLayers.reverse().map((layer, i) => (
        <LayerBlock key={layer + i} layerItem={layer}>
            <LayerSelection layerItem={layer}/>
            <OpacitySlider layerItem={layer}/>
        </LayerBlock>
    ))

  return (
    <CalciteSortableList onCalciteListOrderChange={({target}) => {
        reorderList(target.childNodes);
    }}>
        {blockElems}
    </CalciteSortableList>
  )
}

export default LayerList

// created by Dan Farnsworth, updated by Michelle Stuart
