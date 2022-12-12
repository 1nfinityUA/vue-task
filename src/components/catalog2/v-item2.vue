<template>
    <div class="v-item2">
        <img width="250" height="350" :src="product_data.image" alt="itemImg">
        <div class="v-item2_info">
            <div>
                <div>{{product_data.title}}</div>
                <div>{{product_data.price}} uah</div>
            </div>
            <div><img src="../../assets/Heart.svg" alt="heart"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-item2",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss">
    .v-item2 {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        margin-bottom: 10px;
        &_info {
            display: flex;
            justify-content: space-between;
            height: 80px;
            margin-top: 10px;
        }
        &_name_price {
            padding: 0;
        }
        &_img {
            cursor: pointer;
        }
    }
    
</style>