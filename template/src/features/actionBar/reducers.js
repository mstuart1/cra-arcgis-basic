import { ACTION_BAR_TOGGLE } from "./actions"

const initialState = {
    expanded: false
}

export const actionBar = (state = initialState, action ) => {
    const {type} = action

    switch( type ) {
        case ACTION_BAR_TOGGLE: {
            return { ...state, expanded: !state.expanded};
        }
        default: {
            return state;
        }
    }
}