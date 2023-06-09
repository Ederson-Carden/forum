<template>
    <div class="body_sty">
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="5000" :show-indicators="false">
            <van-swipe-item class="loginBg" v-for="item of imgs" :key="item.id">
                <img src="../assets/1.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
        <!--  -->
        <van-button class="loginBtn_1" hairline size="large" type="primary" to="home">进入论坛</van-button>
    </div>
</template>
  
<script>
export default {
    name: 'login',
    data() {
        return {
            imgs: [
                { id: 1, image: "/assets/1.jpg" },
                { id: 2, image: '/assets/2.jpg' },
                { id: 3, image: '../assets/3.jpg' }
            ]
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body_sty{
    height: 100%;
    position: relative;
}

.my-swipe {
    position: absolute;
    left: 0;
    top: 0;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;

}
.loginBg {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0;
}

.loginBtn_1{
    position: absolute;
    bottom: 3rem;
    z-index: 5;
}
</style>
  