import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "张三",
    age: 12,
    count: 0,
    post: [{
      id: '',
      username: "临时抱佛脚",
      pubTime: "2022/05/06",
      text: '树大招风',
      textType:'https://bpic.588ku.com/element_origin_min_pic/19/04/09/f934e2ee7054bb2cfc53b881edb5d84c.jpg',
      imgs: ["https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7",]
    },
    {
      id: '',
      username: "dad",
      pubTime: "2022/09/06",
      text: '按规划',
      textType:'https://bpic.588ku.com/element_origin_min_pic/19/04/09/f934e2ee7054bb2cfc53b881edb5d84c.jpg',
      imgs: ["https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7","https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7"]
    },
    ],
    userInfo: {
      username:"张三"
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
