<template>
    <div>
        <van-sticky>
            <van-nav-bar class="bar_sty" left-text="论坛">
                <template #right>
                    <van-icon name="search" size="20" />
                </template>
            </van-nav-bar>
            <div class="title_menu">
                <van-button class="smallBtn" size="small">推荐</van-button>
                <van-button class="smallBtn" size="small">最新</van-button>
                <!-- <van-popover v-model:show="showPopover" :actions="actions" actions-direction="horizontal"> -->
                <van-button class="filterBtn" size="small">筛选</van-button>
                <!-- </van-popover> -->
            </div>
        </van-sticky>
        <!-- 帖子 -->
        <div>
            <index_List v-for="n in post" :itemPost=n></index_List>
        </div>
    </div>
    <van-cell v-for="item in list" :key="item" :title="item" />
    <van-back-top />
</template>

<script>
import index_List from './module/index_List'

export default {
    name: 'main',
    data() {
        return {
            post: []
        }
    },
    components: { index_List },
    created() {
        this.post = this.$store.state.post
        console.log(this.$store.state.post)
    },
}
</script>

<style scoped>
.bar_sty {
    background: #14cbb1;
}

.van-nav-bar_text {
    font-size: .35rem;
    color: #fff;
}

.smallBtn {
    border: 0;
    margin: .1rem 0 0 0;
}

.filterBtn {
    float: right;
    border: 0;
    margin: .1rem .1rem 0 0;
    background: #f2f3f5;
}

.title_menu {
    background: #fff;
}
</style>