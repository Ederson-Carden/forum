<template>
    <div>
        <van-sticky>
            <van-nav-bar class="bar_sty" left-text="论坛">
                <template #right>
                    <van-icon name="search" is-link @click="showPopup" size="20" />
                    <van-popup v-model:show="show" position="top" :style="{ padding: '0px' }">
                        <van-search v-model="searchContent" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" @search="searchHandler"/>
                    </van-popup>
                </template>
            </van-nav-bar>
            <div class="title_menu">
                <!-- <van-button class="smallBtn" size="small">推荐</van-button> -->
                <van-button class="smallBtn" size="small">最新</van-button>
                <van-popover placement="right-start" v-model:show="showPopover" :actions="actions"
                    actions-direction="horizontal">
                    <template #reference>
                        <van-button class="smallBtn" size="small">筛选</van-button>
                    </template>
                </van-popover>
            </div>
        </van-sticky>
        <!-- 帖子 -->
        <div>
            <index_List v-for="n in post" :itemPost=n @click="GotoDetail(n.id)"></index_List>
        </div>
    </div>
    <van-cell v-for="item in list" :key="item" :title="item" />
    <van-back-top />
</template>

<script>
import index_List from './module/index_List'
import { ref } from 'vue';

export default {
    name: 'main',
    data() {
        return {
            post: [],
            searchContent:"",
        }
    },
    components: { index_List },
    created() {
        this.$store.state.post = JSON.parse(localStorage.getItem("postInfo")) ? JSON.parse(localStorage.getItem("postInfo")) : this.$store.state.post
        this.$store.state.NewContentID = localStorage.getItem("NewContentID") ?localStorage.getItem("NewContentID"): this.$store.state.NewContentID
        this.post = this.$store.state.post
        // const neww = this.post.filter(p => p.text.includes('树'))
        // console.log(neww)
        console.log(this.$store.state.post)
        console.log(this.$store.state.NewContentID)
    },
    setup() {
        const showPopover = ref(false);
        const actions = [
            { text: '闲聊' },
            { text: '表白墙' },
            { text: '寻物启事' },
            { text: '校内新闻' },
        ];
        const value=ref('');
        const show = ref(false);
        const showPopup = () => {
            show.value = true;
        };
        return {
            value,
            show,
            showPopup,
            actions,
            showPopover,

        };
    },
    methods: {
        GotoDetail(value) {
            this.$router.push({name:'detail',params: {id:value}})
        },
    searchHandler() {
        let search = this.searchContent.toLowerCase();
		      let newList = [];
		      if (search) {
		    //     this.post.filter(item => {
		    //       if (
		    //         item.text.toLowerCase().indexOf(search) !== -1 
            //         // || item.age.toLowerCase().indexOf(_keyWord) !== -1
		    //       ) {
		    //         newList.push(item);
		    //       }
		    //     });
                newList = this.post.filter( item => item.text.includes(search))
                this.post = newList;
		      }
              else {
                this.post=this.$store.state.post
              }
		      
		    },
        }
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