import "@esri/calcite-components/dist/components/calcite-block-section"
import "@esri/calcite-components/dist/components/calcite-radio-group"
import "@esri/calcite-components/dist/components/calcite-radio-group-item"
import { CalciteBlockSection, CalciteRadioGroup, CalciteRadioGroupItem } from '@esri/calcite-components-react';
import React, { useContext } from 'react'
import { AppContext } from "../context";
import allLayers from "../data/layers/allLayers";
import styled from "styled-components";

const Styles = {
    Block: styled(CalciteBlockSection)`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    `,
    
}

const LayerSelection = ({layerItem}) => {

    const { view } = useContext(AppContext);

    const visibleOn = {};
    const visibleOff = {};
    //console.log('Is this item visible? ', layerItem.visible, layerItem);
    if (layerItem.visible) {
        visibleOn.checked = true;
    } else {
        visibleOff.checked = true;
    }

    const toggleLayer = (layerItem, isVisible = "on") => {
		console.log(`[toggleLayer] The layer "${layerItem.title}" `, isVisible, 
        layerItem.oraId);
        // is the layer already loaded to the map?
        let foundLayer = view?.map.allLayers.items.filter(item => item.oraId === layerItem.oraId)[0]
        if (foundLayer === undefined){
            console.log('loading layer to map')
            let layerToLoad = allLayers.filter(layer => layer.oraId === layerItem.oraId)[0]
            layerToLoad.visible = true
            view.map.add(layerToLoad)
        } else {
            console.log('layer has already been loaded to the map')
            layerItem.visible = (isVisible === 'on');
        }
		
	}
	// const removeLayerFromMap = (layer) =>  dispatch(removeLayer(layer)) 


  return (
    <CalciteBlockSection open text="Toggle Layer">
   
    <CalciteRadioGroup scale="m"
        onClick={({target}) => {
            let { value } = target
            toggleLayer(layerItem, value);
        }}>
        <CalciteRadioGroupItem value="on" {...visibleOn}>
            Visible
        </CalciteRadioGroupItem>
        <CalciteRadioGroupItem value="off" {...visibleOff}>
            Hidden
        </CalciteRadioGroupItem>
    </CalciteRadioGroup>

</CalciteBlockSection>
  )
}

export default LayerSelection

// created by Dan Farnsworth, updated by Michelle Stuart