import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {mapView} from './features/mapView/reducers'
// import {mapLayers} from './features/mapLayers/reducers'
import {actionBar} from './features/actionBar/reducers'
import {mapTitle} from './features/mapTitle/reducers'

const reducers = {
    mapView,
    actionBar,
    mapTitle,
}
const rootReducer = combineReducers(reducers)

	
export const configureStore = () => {
    return createStore(rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk) // arcgis middleware could go here
        )
    );
}