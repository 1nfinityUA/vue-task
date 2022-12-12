<template>
    <div class="v-catalog container">
        <vItemVue
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
        />
    </div>
</template>

<script>
import vItemVue from "./v-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "v-catalog",
    components: {
        vItemVue,
    },
    props: {},
    data() {
        return {
            obj: this.$store.state.obj
        };
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCT_FROM_API'
        ]),
    },
    mounted() {
        this.GET_PRODUCT_FROM_API(this.obj)
    },
};
</script>

<style lang="scss">
.v-catalog {
    display: flex;
    position: absolute;
    flex-wrap: wrap;
}
</style>
