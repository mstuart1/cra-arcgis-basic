import React, { createContext, useEffect, useState } from 'react'
import createMapView from './tools/createMapView';

export const AppContext = createContext()

const AppContextProvider = (props) => {
const [layerView, setLayerView] = useState();
const [filter, setFilter] = useState();
const [view, setView] = useState()




useEffect(() => {
    if (layerView){
        if(layerView.filter?.where === filter.where) {
            layerView.filter = null
        } else {
            layerView.filter = filter;
        }
    } 
}, [filter])

const value = {
    setFilter, setLayerView, setView, view
} 

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export default AppContextProvider