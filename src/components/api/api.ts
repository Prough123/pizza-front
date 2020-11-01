import axios from 'axios'

const settings = {
    withCredentials: true
}

export const instance = axios.create({
    baseURL: 'https://pizza-nodejs.herokuapp.com',
    ...settings
})

export const productsAPI = {
    getProduct(productId){
        return instance.get(`/product/products_by_id?id=${productId}&type=single`)
    },
    getProducts(variables){
        return instance.post(`/product/getProducts`,variables)
    }
}