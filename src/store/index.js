import { createStore } from 'vuex'

export default createStore({
  state: {
      todoList:[],
  },
  getters:{
    getLength(state){
      return state.todoList.length;
    },
    get:(state) => (id) => {
      if(id===0){
        return state.todoList;
      }
      else if(id==1){
        return state.todoList.filter(todo => todo.state===false);
      }
      else {
        return state.todoList.filter(todo => todo.state===true);
      }
    },
  },
  mutations: {
    addTodo(state,payload){
      state.todoList.push(payload);
    },
    deleteTodo(state,payload){
      state.todoList.splice(state.todoList.indexOf(payload),1);
    },
  },
  actions: {
    async addTodo({commit}, newTodo){
      commit('addTodo',newTodo);
    },
    async deleteTodo({commit}, todoItem){
      commit('deleteTodo',todoItem);
    }
  }
})
