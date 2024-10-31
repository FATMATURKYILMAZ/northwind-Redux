import * as ActionTypes from "./ActionTypes"

export function changeCategory(category) {
    return { type: ActionTypes.CHANGE_CATEGORY, payload: category }
}

export function getCategoriesSuccess(categories) {
    return { type: ActionTypes.GET_CATEGORIES_SUCCESS, payload: categories }
    //yeni reduserda aksiyon olarak getcategoriessuccess atanıp yeni state olarak categoires atandı
}
export function getCategories() {
    return function (dispatch) {//dispatch(yakalamak ele geçirmek)
        let url = "http://localhost:3000/categories"
        return fetch(url).then(response => response.json()).then(result => dispatch(getCategoriesSuccess(result)))
    }
}