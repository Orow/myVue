// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new  Vuex.Store({
    // 儲存狀態，會用到的先定義，是空的也沒關係
    state:{ 
        count: 0,
        usernsme: '',
        list: [],
    },
    mutations: {
        addCount(state){
            state.count += 1;

            // 不存在的狀態屬性
            // Vue.set(state, 'loading', false);
        },
    },
    
    // 以上 state
    // 以下 mutations
});

export default store;