import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 一般state統一管理
const store = new Vuex.Store({
  state: {
    todod: [],
    carts: [],
    items: [],
    username: [],
    products: [],
    rank: 0
  }
});

// 模組化後
const store = new Vuex.Store({
  modules: {
    todos: todos,
    member: member
  }
});

const todos = {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setItem(state, payload) {}
  },
  getters: {
    getLength(state, getters, rootState, rootGetters) {
      rootState.member.username;
    }
  },
  actions: {
    // 可以傳入的參數
    fetchItems({ commit, dispatch, state, getters, rootState, rootGetters }) {
      // do something
    },
    // actions傳入的東西稱作 context
    // context 可以看成 { commit, dispatch, state, getters, rootState, rootGetters }
    fetchItems(context) {
      // do something
    }
  }
};

const member = {
  namespaced: true,
  state: {
    username: "",
    rank: 0
  },
  mutations: {
    setItem(state, payload) {}
  },
  actions: {
    fetchItems() {
      // do something...
    },
    // 要commit其他模組的mutationsa
    fetchItems({ commit }) {
      //   mutation名稱       payload     setting
      commit("todos/setItems", [1, 2, 3, 4], { root: true });
      commit("member/setItems", [1, 2, 3, 4], { root: true });
      commit("setItems", [1, 2, 3, 4]);
    }
  }
};

export default store;
