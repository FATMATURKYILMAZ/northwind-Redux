import { type } from "@testing-library/user-event/dist/type"
import * as ActionTypes from "./ActionTypes"

export function getProductsSuccess(products) {
    return { type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: products }
    //yeni reduserda aksiyon olarak getcategoriessuccess atanıp yeni state olarak categoires atandı
}

export function createProductSuccess(product) {
    return { type: ActionTypes.CREATE_PRODUCTS_SUCCESS, paload: product }
}

export function updateProductSuccess(product) {
    return { type: ActionTypes.UPDATE_PRODUCT_SUCCESS, paload: product }
}
export function saveProductApi(product) {
    return fetch("http://localhost:3000/products/" + (product.id || ""),
        {
            method: product.id ? "PUT" : "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        })
        .then(handleResponse)
        .catch(handleError); // adrese gönderdiğimiz data body'dir.
}

export function saveProduct(product) { // burada veritabanına erişiyoruz
    return function (dispatch) {
        return saveProductApi(product).then(savedProduct => { // redux'un reducerını devreye sokmuş olduk
            product.id
                ? dispatch(updateProductSuccess(savedProduct))
                : dispatch(createProductSuccess(savedProduct));
        }).catch(error => {
            throw error;
        });
    };
}

export async function handleResponse(response){
    if(response.ok){
        return response.json()
    }
const error= await response.text()
throw new Error(error)
}

export function handleError(error){
    console.error("Bir hata oluştu")
    throw error
}
export function getProducts(categoryId) {
    return function (dispatch) {//dispatch(yakalamak ele geçirmek)
        let url = "http://localhost:3000/products"
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url).then(response => response.json()).then(result => dispatch(getProductsSuccess(result)))
    }
}