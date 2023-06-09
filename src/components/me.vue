<template>
    <div>
        <van-row justify="center">
            <van-image v-for="imgss in $store.state.userInfo.userimg" style="top: 1rem;" round width="10rem" height="10rem" fit="cover" position="center"
                :src="imgss" />
        </van-row>
        <van-row justify="center">
            <h2>{{ $store.state.userInfo.username }}</h2>
        </van-row>
        <van-cell title="我的贴子" is-link @click="showPopup" />
        <van-popup v-model:show="show" :style="{ padding: '180px' }" round position="bottom">内容</van-popup>
        <van-cell title="我的收藏" is-link @click="showCollect" />
        <van-popup v-model:show="showC" :style="{ padding: '180px' }" round position="bottom">shou</van-popup>
    </div>
</template>

<script>
import { ref } from 'vue';


export default {
    name: 'me',
    data() {
        return {

        }
    },
    setup() {
        const show = ref(false);
        const showPopup = () => {
            show.value = true;
        };

        const showC = ref(false);
        const showCollect = () => {
            showC.value = true;
        };
        return {
            show,
            showC,
            showCollect,
            showPopup,

        };
    },
}
// created() {
    //     console.log(this.$store.state.name)
    //     var listtt = {
    //         head: '',
    //         name: "fa",
    //         date: "2022/8/06",
    //         content: {
    //             text: 'af',
    //             img: ''
    //         }
    //     }
    //     this.post = this.$store.state.post
    //     this.$store.state.post.push(listtt)
    //     console.log(this.$store.state.post)
    // },
</script>

<style scoped></style>