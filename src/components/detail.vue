<template>
    <div class='container'>
        <div class='container-content'>
            <div class='user-info'>
                <img class='user-head' width="10"
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7"
                    style="border-radius: 50%" alt="" />
                <div class='user-name-time'>
                    <div class='user-name'>ikun</div>
                    <div class='user-publish-time'>2023/6/9 16:25:08</div>
                </div>
            </div>
            <div class='content'>
                <!-- 显示文本 -->
                <div v-if="true">
                    <text class='content-text'>我ikun最强</text>
                </div>
                <!-- 显示图片 -->
                <div v-if="true">
                </div>
                <!-- 显示文本 -->
                <div v-else>
                    <text class='content-text'>临时抱佛脚</text>
                </div>
            </div>
        </div>
        <!-- 显示回复列表 -->
        <div class='replay_content' v-if="true">
            <text class='tip-text'
                style="width: 750rpx; height: 40rpx; display: flex; box-sizing: border-box; left: -10rpx; top: -18rpx; position: relative">----以下是回复内容----</text>
            <div class="blockstyle"  :id="idx">
                <div class='user-info' style="width: 540rpx; height: 66rpx; display: flex; box-sizing: border-box">
                    <img class='user-head'
                        src="https://img0.baidu.com/it/u=4196418831,3741244744&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        style="border-radius: 50%" alt="" />                 
                </div>
                <div class='user-name-time' style="position: relative; left: 36px; top: -40px">
                    <text style="position: relative; left: 0px; top: 0px">gege</text>
                    <div class='user-publish-time'>2023/6/9 16:25:08</div>
                </div>
                <text
                    style="margin: -26px 48px; position: relative; left: 72rpx; top: 6rpx; width: 653rpx; display: block; background-color: rgb(241, 234, 224); word-break:break-word;box-sizing: border-box">泰裤辣</text>
            </div>
            <div class="blockstyle"  :id="idx">
                <div class='user-info' style="width: 540rpx; height: 66rpx; display: flex; box-sizing: border-box">
                    <img class='user-head'
                        src="https://img1.baidu.com/it/u=1240466764,3606188766&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        style="border-radius: 50%" alt="" />
                </div>
                <div class='user-name-time' style="position: relative; left: 36px; top: -40px">
                    <text style="position: relative; left: 0px; top: 0px">鸭鸭</text>
                    <div class='user-publish-time'>2023/6/8 19:37:18</div>
                </div>
                <text
                    style="margin: -26px 48px; position: relative; left: 72rpx; top: 6rpx; width: 653rpx; display: block; background-color: rgb(241, 234, 224); word-break:break-word;box-sizing: border-box">哈哈哈哈哈</text>
            </div>
            <div class="blockstyle"  :id="idx">
                <div class='user-info' style="width: 540rpx; height: 66rpx; display: flex; box-sizing: border-box">
                    <img class='user-head'
                        src="https://img1.baidu.com/it/u=3533698366,4262741630&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        style="border-radius: 50%" alt="" />
                </div>
                <div class='user-name-time' style="position: relative; left: 36px; top: -40px">
                    <text style="position: relative; left: 0px; top: 0px">kiki</text>
                    <div class='user-publish-time'>2023/6/8 09:12:11</div>
                </div>
                <text
                    style="margin: -26px 48px; position: relative; left: 72rpx; top: 6rpx; width: 653rpx; display: block; background-color: rgb(241, 234, 224); word-break:break-word;box-sizing: border-box">加油加油</text>
            </div>
            <div class="blockstyle"  :id="idx">
                <div class='user-info' style="width: 540rpx; height: 66rpx; display: flex; box-sizing: border-box">
                    <img class='user-head'
                        src="https://img2.baidu.com/it/u=2884499993,1715100712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        style="border-radius: 50%" alt="" />
                </div>
                <div class='user-name-time' style="position: relative; left: 36px; top: -40px">
                    <text style="position: relative; left: 0px; top: 0px">一点点</text>
                    <div class='user-publish-time'>2023/6/7 11:15:41</div>
                </div>
                <text
                    style="margin: -26px 48px; position: relative; left: 72rpx; top: 6rpx; width: 653rpx; display: block; background-color: rgb(241, 234, 224); word-break:break-word;box-sizing: border-box">我总是临时抱佛脚。。</text>
            </div>
        </div>
        
        <div class='like-container' v-if='true'>
            <button class='btn-class' bindtap='onReplayClick'>回复</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'detail',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.page {
    height: 100%;
}

.container {
    display: flex;
    flex-direction: column;
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

.user-head {
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 50%;
    background-color: #ccc;
}

.user-name-time {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 5px;
    margin-left: 10px;
}

.user-name {
    font-size: 18px;
    color: #333;
    font-weight: bold;
}

.user-publish-time {
    font-size: 15px;
    color: #999;
}

.content {
    display: flex;
    flex-direction: column;
    margin-right: 10%;
    margin-top: 14px;
}

.content-scroll {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.content-text {
    font-size: 18px;
    color: #666;
    margin-left: 10px;
}

.content-img {
    min-height: 300px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: #999;
}

.line {
    width: 100%;
    height: 1px;
    margin-top: 20px;
    background-color: #ccc;
    font-size: 16px;
    text-align: center;
    vertical-align: middle;
    position: relative;
    margin: 0 auto;
    z-index: -99;
}

.like-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    margin: 50px 150px;
}

.like-icon {
    width: 48px;
    height: 48px;
    margin: 40rpx;
}

.btn-class {
    margin: 40rpx;
    background-color: burlywood;
    color: white;
    border-radius: 98rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.like-text {
    font-size: 16px;
    color: rgb(17, 14, 16);
    font-weight: bold;
}

.replay_content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 200rpx;
}

.tip-text {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 10rpx;
    text-align: center;
    align-items: center;
}

.blockstyle {
    margin: 25px 17px;
}
</style>