import { CalciteSortableList, CalciteBlock } from '@esri/calcite-components-react';
import "@esri/calcite-components/dist/components/calcite-sortable-list"
import "@esri/calcite-components/dist/components/calcite-block"
import React, { useContext } from 'react'
import { AppContext } from '../context';
import allLayers from '../data/layers/allLayers';
import LayerBlock from './LayerBlock';
import LayerSelection from './LayerSelection';
import OpacitySlider from './OpacitySlider';

const LayerList = () => {

    const { view } = useContext(AppContext);

    const reorderList = (nodeArray) => {
        nodeArray.forEach((node, i) => {
            console.log(node.layerId, 'reordering list')
            const layerId = node.layerId
            const foundLayer = view.map.allLayers.items.filter(item => item.id === layerId)[0]
            console.log(foundLayer, 'find')
            if (!!foundLayer){
                view.map.reorder(foundLayer, nodeArray.length - i)
            }
        })
	}

    let blockElems = allLayers.map((layer, i) => (
        <LayerBlock key={layer + i} layerItem={layer}>
            <LayerSelection layerItem={layer}/>
            <OpacitySlider layerItem={layer}/>
        </LayerBlock>
    ))

  return (
    <CalciteBlock heading='Layers' collapsible summary='Layers can take time to load.'>
    <CalciteSortableList onCalciteListOrderChange={({target}) => {
        reorderList(target.childNodes);
    }}>
        {blockElems}
    </CalciteSortableList>
    </CalciteBlock>
  )
}

export default LayerList

// created by Dan Farnsworth, updated by Michelle Stuart
