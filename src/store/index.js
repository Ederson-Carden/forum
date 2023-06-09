import { createStore } from 'vuex'

export default createStore({
  state: {
    post: [{
      id: '',
      username: "临时抱佛脚",
      userimg:"https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7",
      pubTime: "2023/5/3 10:24:16",
      text: '树大招风',
      textType: 'https://bpic.588ku.com/element_origin_min_pic/19/04/09/f934e2ee7054bb2cfc53b881edb5d84c.jpg',
      textTypeName: '闲聊',
      imgs: ["https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7",]
    },
    {
      id: '',
      username: "dad",
      userimg:"https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7",
      pubTime: "2023/6/9 17:24:16",
      text: '按规划',
      textType: 'https://bpic.588ku.com/element_origin_min_pic/19/04/09/f934e2ee7054bb2cfc53b881edb5d84c.jpg',
      textTypeName: '闲聊',
      imgs: ["https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7","https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7"]
    },
    ],
    userInfo: {
      username:"张三",
      age: 12,
      userimg:["https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"],
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
