import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    mockData (state, arr) {
      state.dataList = arr
    }
  },
  getters: {
    getAverage: state => {
      let add = 0
      let num = 0
      state.dataList.map(item => {
        add += item.data
        return num++
      })
      let average = add / num
      return average.toFixed(2)
    },
  },
  actions: {
    getDataCall (context,arr) {
      // TODO
      context.commit('mockData',arr)
    }
  }
})
