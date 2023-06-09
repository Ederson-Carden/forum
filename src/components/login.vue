<template>
    <div class="body_sty">
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="5000" :show-indicators="false">
            <van-swipe-item class="loginBg"  v-for="item in imgs" :key="item.id">
                <img :src="item.image" alt="">
            </van-swipe-item>
        </van-swipe>
        <!--  -->
        <van-button class="loginBtn_1" hairline size="large" type="primary" to="/home/main">进入论坛</van-button>
    </div>
</template>
  
<script>
export default {
    name: 'login',
    data() {
        return {
            imgs: [
                { id: 1, image: "https://ts1.cn.mm.bing.net/th/id/R-C.fc8b5c5052e9c0686b21d84bffff64e2?rik=F8hiSR6IcEmOlA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fq_70%2cc_zoom%2cw_640%2fimages%2f20180608%2f178e81fd25bc4a9cac1eb0577cdeae76.jpeg&ehk=rGtXcPHSDqgLdUwsIEmDRKHXSVFEJ3DhB9mflYVC5OM%3d&risl=&pid=ImgRaw&r=0" },
                { id: 2, image: 'https://so1.360tres.com/t0163accc026676b616.jpg'},
                { id: 3, image: 'https://ts1.cn.mm.bing.net/th/id/R-C.aed862ed508052a26ae85519552a00e4?rik=giXnwMHdW7W1sg&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40006%2f0222.jpg_wh300.jpg&ehk=zxguduVQGmfv7hZI6Nd8MK%2b2mtJODxKtwruCK2wha4M%3d&risl=&pid=ImgRaw&r=0' }
            ]
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body_sty{
    height: 95%;
    position: relative;
}

.body_sty img{
    display: inline-block;
    width:99%;
}

.my-swipe {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    height: 100%;
    width: 100%;
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
    top: 25%;
}

.loginBtn_1{
    position: absolute;
    bottom: 3rem;
    z-index: 5;
}
</style>