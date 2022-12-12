<template>
    <div id="app">
        <v-main-wrapper />
    </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue";

export default {
    name: "App",
    components: {
        vMainWrapper,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
#app {
    height: 100%;
    margin: 0 auto;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
}
</style>
