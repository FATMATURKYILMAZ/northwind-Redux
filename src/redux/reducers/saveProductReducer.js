import * as ActionTypes from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function saveProductListReducer(state = InitialState.savedProduct, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload;
        case ActionTypes.CREATE_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            // Hiçbir action eşleşmezse mevcut state'i döndür
            return state;
    }
}