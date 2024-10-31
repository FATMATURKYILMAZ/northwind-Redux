import * as ActionTypes from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function changeCategoryReducer(state = InitialState.currentCategory, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            // Hiçbir action eşleşmezse mevcut state'i döndür
            return state;
    }
}
