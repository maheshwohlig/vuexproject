import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo: [
      {
        id: '1',
        name: 'mahesh',

      },
      {
        id: '2',
        name: 'rahul',

      },
      {
        id: '3',
        name: 'jack',

      },
      {
        id: '4',
        name: 'bunny',

      }

    ]
  },
  getters: {
    employees: (state) => state.todo,
  },

  mutations: {

    new_Todo: (state, todoItem) =>
      // console.log('<<<' + todoItem)
      state.todo.push({ id: state.todo.length + 1, name: todoItem }),

    dlet_Todo(state, e) {
      console.log("state", state, e)
      let index = state.todo.indexOf(e);
      console.log("jjjjj", index)
      state.todo.splice(e, 1);
    },

  },
  actions: {
    addnewTodo({ commit }, todoItem) {

      commit('new_Todo', todoItem);
    },

    dletTodo({ commit }, e) {
      commit('dlet_Todo', e);
    }
  },
  modules: {
  }
})
