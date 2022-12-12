// поміняти мок-арі я їхній бек-енд
import axios from "axios";
export default {
    async GET_PRODUCT_FROM_API({ commit }, obj ) {
        return await axios(`https://63555930483f5d2df3b29481.mockapi.io/item-3?filter=${obj.sort}&page=${obj.page}&limit=${obj.type}`, {
            method: "GET",
        }).then((products) => {
            commit("SET_PRODUCTS_TO_STATE", products.data);
            return products;
        }).catch((error) => {
            console.log(error);
            return error;
        })
    },
}
