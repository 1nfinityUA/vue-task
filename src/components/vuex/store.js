import Vue from "vue";
import Vuex from "vuex";
import actions from './actions/actions'
import getters from './geters/getters'
import mutations from './mutations/mutations'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        obj: {
            sort: '',
            type: 6,
            page: 1,
        }
    },
    mutations,
    actions,
    getters,
});

export default store;
