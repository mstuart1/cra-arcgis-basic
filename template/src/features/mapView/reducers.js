import {INIT_MAP_FAIL, INIT_MAP_SUCCEED, INIT_MAP_TRY, SET_VIEW_PADDING} from './actions'

const initialState = {
    isLoading: true,
    data: {}
}

export const mapView = (state = initialState, action ) =>{
    const {type, payload} = action;

    switch( type ) {
        case INIT_MAP_SUCCEED: {
            let {data: freshData} = payload
            return { ...state, isLoading: false, data: freshData};
        }
        case INIT_MAP_TRY: {
            return { ...state, isLoading: true };
        }
        case INIT_MAP_FAIL: {
            return { ...state, isLoading: false };
        }
        case SET_VIEW_PADDING: {
            let {expanded} = payload
            let freshData = state.data

            console.log(freshData)
            freshData.padding = {...freshData.padding, left: expanded ? 45 : 135 }
            return {...state, data: freshData}
            
        }
        default: {
            return state;
        }
    }
}