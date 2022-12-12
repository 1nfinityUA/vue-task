<template>
    <div class="v-catalog2">
        <vItem2Vue
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
        />
    </div>
</template>

<script>
import vItem2Vue from "./v-item2.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "v-catalog2",
    components: {
        vItem2Vue,
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["PRODUCTS", "OBJ"]),
    },
    methods: {
        ...mapActions(["GET_PRODUCT_FROM_API"]),
    },
    mounted() {
        this.GET_PRODUCT_FROM_API(this.OBJ);
    },
};
</script>

<style lang="scss">
.v-catalog2 {
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    padding-left: 55px;
}
</style>
