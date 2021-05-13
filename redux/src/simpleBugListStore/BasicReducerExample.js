/*
    Example Store for a SHOPPING CART

    {
        categories: [],
        products: [],
        cart: {},
        user: {}
    }
*/

function reducer(store, action) {
    const updatedStore = {...store}
    
    switch (action.type) {
        case "ADD_CATEGORY":
            // Do action to ADD category
            return updatedStore
        case "UPDATE_CATEGORY":
            // Do action to UPDATE category
            return updatedStore
        case "DELETE_CATEGORY":
            // Do action to DELETE category
            return updatedStore
        case "ADD_PRODUCT":
            // Do action to ADD product
            return updatedStore
        case "UPDATE_PRODUCT":
            // Do action to UPDATE product
            return updatedStore
        case "DELETE_PRODUCT":
            // Do action to DELETE product
            return updatedStore
        case "ADD_CART":
            // Do action to ADD cart
            return updatedStore
        case "UPDATE_CART":
            // Do action to UPDATE cart
            return updatedStore
        case "DELETE_CART":
            // Do action to DELETE cart
            return updatedStore
        case "ADD_USER":
            // Do action to ADD user
            return updatedStore
        case "UPDATE_USER":
            // Do action to UPDATE user
            return updatedStore
        case "DELETE_USER":
            // Do action to DELETE user
            return updatedStore
    
        default:
            return updatedStore    
    }
}