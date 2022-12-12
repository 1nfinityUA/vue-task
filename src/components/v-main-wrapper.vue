<template>
    <div class="v-main-wrapper">
        <header class="container header">
            <img class="header__img" src="../assets/Logo.png" alt="Logo" />
            <div class="type">
                <router-link
                    :to="{ name: 'catalog', params: { product_data: PRODUCT } }"
                >
                    <img
                        @click="setType1"
                        class="type__type1"
                        src="https://visualpharm.com/assets/571/Columns-595b40b75ba036ed117d9331.svg"
                        alt="type1"
                    />
                </router-link>
                <router-link
                    :to="{
                        name: 'catalog2',
                        params: { product_data: PRODUCT },
                    }"
                >
                    <img
                        @click="setType2"
                        class="type__type2"
                        src="https://cdn-icons-png.flaticon.com/512/1250/1250641.png"
                        alt="type2"
                    />
                </router-link>
            </div>
        </header>
        <main class="container main">
            <div class="sidebar">
                <!-- додати динамічний клас -->
                <!-- переробити в компонент а може і не треба переробляти? -->
                <div @click="setALL" class="sidebar__sort" :class="{active: uslovie}" >All</div>
                <div @click="setDress" class="sidebar__sort">Dress</div>
                <div @click="setPants" class="sidebar__sort">Pants</div>
                <div @click="setTshirt" class="sidebar__sort">T-shirt</div>
                <div @click="setTop" class="sidebar__sort">Top</div>
            </div>
            <div class="cataloge__type">
                <router-view>
                    <vCatalogVue />
                </router-view>
            </div>
            <!-- page-count переробити в (округлену до цілого) довжину масивву поділену на відображення елементів на сторінці  -->
            <v-paginate
                :page-count="5"
                :click-handler="pageChange"
                :prev-text="'Prev'"
                :next-text="'Next'"
                class="pagination"
                :force-page="pageNumber"
            />
        </main>
        <footer class="container footer">
            <img class="footer__img" src="../assets/Logo2.svg" alt="Logo" />
        </footer>
    </div>
</template>

<script>
import vCatalogVue from "./catalog/v-catalog.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {};
    },
    name: "v-main-wrapper",
    components: {
        vCatalogVue,
    },
    methods: {
        setType2() {
            return (this.OBJ.type = 12);
        },
        setType1() {
            return (this.OBJ.type = 6);
        },
        setDress() {
            this.OBJ.sort = "Dress";
            return this.GET_PRODUCT_FROM_API(this.OBJ);
        },
        setTop() {
            this.OBJ.sort = "Top";
            return this.GET_PRODUCT_FROM_API(this.OBJ);
        },
        setPants() {
            this.OBJ.sort = "Pants";
            return this.GET_PRODUCT_FROM_API(this.OBJ);
        },
        setTshirt() {
            this.OBJ.sort = "T-shirt";
            return this.GET_PRODUCT_FROM_API(this.OBJ);
        },
        setALL() {
            this.OBJ.sort = "";
            return this.GET_PRODUCT_FROM_API(this.OBJ);
        },
        pageChange(pageNumber) {
            this.OBJ.page = pageNumber;
            return this.GET_PRODUCT_FROM_API(this.OBJ);
        },
        ...mapActions(["GET_PRODUCT_FROM_API"]),
    },
    computed: {
        ...mapGetters(["OBJ", "PRODUCTS"]),
    },
};
</script>

<style lang="scss">
.v-main-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    min-height: 100%;
    .footer__img {
        height: 55px;
        width: 58px;
        padding-left: 60px;
        padding-top: 30px;
    }
    .header {
        position: relative;
        height: 200px;
        &__img {
            height: 62px;
            width: 62px;
            padding-top: 60px;
        }
    }
    .type {
        position: absolute;
        align-items: center;
        bottom: 5px;
        right: 0;
        &__type1 {
            cursor: pointer;
            width: 22px;
            margin-right: 10px;
            opacity: 0.3;
            &:hover {
                opacity: 0.65;
            }
        }
        &__type2 {
            cursor: pointer;
            width: 20px;
            opacity: 0.55;
            &:hover {
                opacity: 1;
            }
        }
    }
    .pagination {
        display: flex;
        position: absolute;
        bottom: 160px;
        left: 500px;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style-type: none;
            margin-right: 20px;
            width: 50px;
            height: 50px;
        }
        .active {
            border: 2px solid black;
        }
    }
}
</style>
