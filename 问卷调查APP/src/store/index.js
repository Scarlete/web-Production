import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state:{
    count:1
  },
  mutations:{
    one(state){
      if(state.count===3){
        return
      }
      state.count++;
    },
    two(state){
      if(state.count===1){
        return
      }
      state.count--;

    }
  }
})
