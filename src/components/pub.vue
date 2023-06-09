<template>
    <van-form @submit="onSubmit">
        <van-field v-model="textTypeText" is-link readonly name="picker" label="文章类型" placeholder="点击选择文章类型"
            @click="showPicker = true" />
        <van-popup v-model:show="showPicker" position="bottom">
            <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
        </van-popup>
        <van-field v-model="contentDetail.text" name="内容" label="内容" placeholder="内容" type="textarea"
            :rules="[{ required: true, message: '填写内容' }]" style="background-color: aliceblue" />
        <van-field name="uploader" label="文件上传">
            <template #input>
                <van-uploader v-model="localimgs" :after-read="afterRead" />
            </template>
        </van-field>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>
<script>
import { List } from 'vant'
import { user } from 'vuex'
export default {
    data() {
        return {
            textTypeText: '',
            showPicker: false,
            localimgs:[],
            contentDetail: {
                id: null,
                text: '',
                username: '',
                userimg:'',
                pubTime: "",
                textType: '',
                imgs: [  ]
            },
            columns: [
                { text: '闲聊', value: 'https://img.51miz.com/preview/element/00/01/04/46/E-1044685-076F20C5.jpg' },
                { text: '表白墙', value: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.54DelKmvAsfwgTV2p-SR-AAAAA?pid=ImgDet&rs=1' },
                { text: '寻物启事', value: 'https://ts1.cn.mm.bing.net/th/id/R-C.8f984a244c74d6f7b6a8a9320cb5da6a?rik=7vyf0piT1NrE9A&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f17%2f03%2f08%2fc3d421563c3b5703e72e9c19cbd1e760.jpg&ehk=Cg1SLSms%2bvkkCFGRjP8EH1658BBEFBFc4znxG1UpDoc%3d&risl=&pid=ImgRaw&r=0' },
                { text: '校内新闻', value: 'https://bpic.588ku.com/element_origin_min_pic/19/04/09/f934e2ee7054bb2cfc53b881edb5d84c.jpg' },
            ]
        }
    },
    // computer:{
    //     user(['',''])
    // },
    created(){
        this.contentDetail.username = this.$store.state.userInfo.username
        this.contentDetail.userimg = this.$store.state.userInfo.userimg
        console.log(this.$store.state.userInfo)
        console.log(this.contentDetail.userInfo)
    },
    methods: {
        onSubmit(values) {
            // console.log('submit', values);
            this.contentDetail.pubTime = this.getLocalTime()
            this.getimages()
            this.$store.state.post.push(this.contentDetail)
            this.$router.push("/home/main")
        },
        onConfirm({ selectedOptions }) {
            console.log(selectedOptions[0]?.text)
            //赋值链接
            this.contentDetail.textType = selectedOptions[0]?.value;
            //赋值内容
            this.textTypeText = selectedOptions[0]?.text;
            console.log(this.contentDetail)
            this.showPicker = false;
        },
        getLocalTime() {
            var myDate = new Date();
            // var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
            // var weekday = myDate.getDay();   //获取当前星期X(0-6,0代表星期天)
            var localtime = myDate.toLocaleString()
            return localtime
            // console.log(weekday)
            // console.log(year)
            // console.log(lcoa)
        },
        getimages() {
            console.log(this.localimgs)
            for (var i = 0; i < this.localimgs.length;i++) {
                console.log(this.localimgs[i])
                this.contentDetail.imgs.push(this.localimgs[i].content)
            }
            //console.log(file.content)
        }
    }
}
</script>