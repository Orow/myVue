import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "";

const store = new Vuex.Store({
  state: {
    items: [],
    todos: [],
    loading: false
  },
  // getters 跟 mutations 很像，都是函式，需要傳入 state 參數
  getters: {
    itemsNotFinish(state) {
      return state.items.filter(item => !item.done).length;
    },
    // 另外一個 getters 要用到其他 getters
    itemsFinish(state, getters) {
      return state.items.length - getters.itemsNotFinish;
    },
    // 也可以回傳函式，在組件中就可以
    itemsWithID(state) {
      return id => {
        return state.items.filter(item => item.id === id);
      };
    },
    // 箭頭函式縮寫
    itemsWithID: state => id => state.items.filter(item => item.id === id)
  },
  mutations: {
    // actions 發出 mutations 用來變更 state 中的 todos
    setTodos(state, todos) {
      state.todos = todos;
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    //  context 包含 store 的一切，還有其他東西，在模組化會提到
    // state, mutations, dispatch, commit都包含在 context 中
    //   fetchTodos(context){
    //       fetch(`${url}`/todos)
    //         .then(res => res.json())
    //         .then(todos => {
    //             // fetch 後取得的 todos 要指定回去 state 中的 todos
    //             // 透過發出 mutations 的方式
    //             context.commit('setTodos', todos);
    //         })
    //   },

    // 只用到 commit
    //   fetchTodos({commit}, payload){
    // dispatch
    fetchTodos({ commit }, payload) {
      commit("setLoading", true);

      fetch(`${url}` / todos)
        .then(res => res.json())
        .then(todos => {
          commit("setTodos", todos);
          commit("setLoading", false);
          this.dispatch("fetchUserInfo");
        });
    },
    fetchUserInfo() {},

    // actions 可以回傳 promise
    // 最後 resolve 後在 mounted 呼叫的時候可以當 promise 用
    fetchTodos({ commit }, payload) {
      return new Promise(resolve => {
        commit("setLoading", true);
        fetch(`${url}` / todos)
          .then(res => res.json())
          .then(todos => {
            commit("setTodos", todos);
            commit("setLoading", false);
            this.dispatch("fetchUserInfo");
            resolve();
          });
      });
    },
    fetchTodos({ commit }, payload) {
      commit("setLoading", true);
      // fetch 已經是 promise 就可以直接 return ，不需要 return new Promise
      return fetch(`${url}` / todos)
        .then(res => res.json())
        .then(todos => {
          commit("setTodos", todos);
          commit("setLoading", false);
          this.dispatch("fetchUserInfo");
          resolve();
        });
    }
  }
});

export default store;
