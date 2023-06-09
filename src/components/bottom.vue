<template>
        <van-tabbar v-model="active">
            <van-tabbar-item name="main" icon="home-o" to="/home/main">首页</van-tabbar-item>
            <van-tabbar-item name="" icon="plus">发布</van-tabbar-item>
            <van-tabbar-item name="me" icon="user-o" to="/home/me">鄙人</van-tabbar-item>
        </van-tabbar>  
</template>
<script>
import {ref} from 'vue'

export default {
    name: 'bottom',
    data() {
        return {
        }
    },
    setup(){
        const active=ref('main');
        return{active};
    }
}
</script>