import * as ActionTypes from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function changeCategoryReducer(state = InitialState.categories, action) {
    switch (action.type) {
        case ActionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            // Hiçbir action eşleşmezse mevcut state'i döndür
            return state;
    }
}