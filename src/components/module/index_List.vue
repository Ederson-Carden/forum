<template>
    <div style="text-align: left;">
            <div class="container-content">
                <div class="user-info">
                    <img class="user-head-image"
                        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="">
                    <div class="user-name-time">
                        <div class="user-name">{{itemPost.username}}</div>
                        <div class="user-publish-time ">{{itemPost.pubTime}}</div>
                    </div>
                    <div>
                         <img class="content-style" :src="itemPost.textType">
                    </div>
                </div>
                <div class="content" >
                    <div class='content-text'>{{itemPost.text}}</div>
                    <div class="content-scroll">
                    <div v-for="imgss in itemPost.imgs" >
                        <img class='content-img'
                        :src=imgss>
                    </div>
                </div>
                </div>
            </div>
            <div class="container-line"></div>
        </div>
</template>
<script>
export default {
    name: 'index_List',
    data() {
        return {
            
        }
    },
    props:['itemPost']
}
</script>
<style scoped>

.user-name {
    font-size: 18px;
    color: #333;
    font-weight: bold;
}

.content-style {
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 25%;
    background-color: #ccc;
}

.user-publish-time {
    font-size: 15px;
    color: #999;
}

.container-line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.container-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px 16px;
    margin: 0 auto;
}

.user-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
}

.user-head-image {
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 50%;
    background-color: #ccc;
    margin-top: 10px;
}

.user-name-time {
    display: flex;
    flex-direction: column;
    width: 68%;
    margin-left: 10px;
    margin-top: 5px;
}

.user-name {
    font-size: 18px;
    color: #333;
    font-weight: bold;
}

.content-style {
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 25%;
    background-color: #ccc;
}

.user-publish-time {
    font-size: 15px;
    color: #999;
}

.content {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
}

.content-scroll {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    z-index: -1;
}

.content-text {
    margin-left: 10px;
    font-size: 18px;
    color: #666;
}

.content-img {
    width: 100px;
    height: 100px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: #999;

}
</style>