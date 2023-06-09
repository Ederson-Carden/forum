import { createStore } from 'vuex'

export default createStore({
  state: {
    NewContentID:'3',
    post: [{
      id: '1',
      username: "临时抱佛脚",
      userimg:"https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7",
      pubTime: "2023/5/3 10:24:16",
      text: '树大招风',
      textType: 'https://bpic.588ku.com/element_origin_min_pic/19/04/09/f934e2ee7054bb2cfc53b881edb5d84c.jpg',
      textTypeName: '闲聊',
      imgs: ["https://tse3-mm.cn.bing.net/th/id/OIP-C.fEdSZduT7aHQ8CxR22bnFwHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7",]
    },
    {
      id: '2',
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
      username:"ikun",
      age: 2.5,
      userimg:["https://ts1.cn.mm.bing.net/th/id/R-C.7552641df8141f6d6e35a7c6c6dbb520?rik=EOxQoRe8cIY15w&riu=http%3a%2f%2finews.gtimg.com%2fnewsapp_match%2f0%2f15103659382%2f0&ehk=02lHw6%2fSuOKZUWgGUWWCp0q0spTkUeyoDN4cY5yiCdE%3d&risl=&pid=ImgRaw&r=0"],
      introduction:"我是练习时长两年半,个人练习生,会唱,跳,rap,还有篮球~~~~~~~,快来关注我吧！",
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
