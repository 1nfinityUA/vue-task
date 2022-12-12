import Vue from "vue";
import Router from "vue-router";
import vCatalog from "../components/catalog/v-catalog";
import vCatalog2 from "../components/catalog2/v-catalog2";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: "/type1",
            name: "catalog",
            component: vCatalog,
            props: true,
        },
        {
            path: "/type2",
            name: "catalog2",
            component: vCatalog2,
            props: true,
        },
    ],
});

export default router