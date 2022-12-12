<template>
    <div class="v-item">
        <img width="520" height="680" :src="product_data.image" alt="itemImg">
        <div class="v-item_info">
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
        name: "v-ite",
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
    .v-item {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        margin-bottom: 10px;
        padding-left: 27px;
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
        .heart_img {
            cursor: pointer;
        }
    }
    
</style>