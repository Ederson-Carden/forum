import { createStore } from 'vuex'

export default createStore({
  state: {
    name:"张三",
    age:12,
    count:0,
    post: [{
      head: '',
      name: "临时抱佛脚",
      date: "2022/05/06",
      content: {
          text: '树大招风',
          img: ''
      },
  },
  {
    head: '',
    name: "噢噢噢噢",
    date: "2022/05/98",
    content: {
        text: '嘎嘎嘎',
        img: ''
    },
},
  ]
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
