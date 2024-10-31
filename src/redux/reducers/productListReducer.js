import * as ActionTypes from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function productListReducer(state = InitialState.products, action) {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            // Hiçbir action eşleşmezse mevcut state'i döndür
            return state;
    }
}