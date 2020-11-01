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

export const authAPI = {
    register(dataToSubmit){
        return instance.post(`/users/register`,dataToSubmit)
    },
    login(dataToSubmit){
        return instance.post(`/users/login`, dataToSubmit)
    },
    auth(){
        return instance.get(`/users/auth`)
    },
    logoutUser(){
        return instance.get(`/users/logout`)
    }
}

export const cartAPI = {
    addToCart(_id){
        return instance.get(`/users/addToCart?productId=${_id}`)
    },
    getCartItems(cartItems){
        return instance.get(`/product/products_by_id?id=${cartItems}&type=array`)
    },
    removeCartItem(id){
        return instance.get(`/users/removeFromCart?_id=${id}`)
    },
    onSuccessBuy(){
        return instance.post(`/users/successBuy`)
    }
}