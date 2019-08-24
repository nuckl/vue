import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [{
        id: 1,
        title: "1",
        comleted: false
      },
      {
        id: 2,
        title: "2",
        comleted: true
      },
      {
        id: 3,
        title: "3",
        comleted: false
      },
    ]
  },
  getters: {
    count: state => ++state.count,
    newTodos: state => state.todos.filter(res => res.comleted),
    id: state => id => state.todos.find(res => res.id == id)
  },
  mutations: {

  },
  actions: {

  }
})