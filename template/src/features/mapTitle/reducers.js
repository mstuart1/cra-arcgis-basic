import { SET_MAP_TITLE } from "./actions"



export const mapTitle = (state = '', action ) => {
    const {type, payload} = action

    switch( type ) {
        case SET_MAP_TITLE: {
            return payload.title
        }
        default: {
            return state;
        }
    }
}