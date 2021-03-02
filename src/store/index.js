import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{},
    totalCarrito:0
  },
  getters: {
    getUser(state){
      return state.user
    }
  },
  mutations: {
    setUser(state,valor){
      state.user = valor
    },
    setTotal(state,valor){
      state.totalCarrito = valor
    }
  },
  actions: {
    fetchUsers(mutations){
      fetch("http://localhost:3000/api/lista")
      .then(resp=>resp.json())
      .then(datos=>{
        mutations.commit("setUser",datos[1])
      })
    }
  },
  modules: {}
})