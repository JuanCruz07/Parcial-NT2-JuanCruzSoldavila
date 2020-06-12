import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tareas: []
    },
    actions: {
        getTareas({commit}, listaTareas){
            commit('getTareas', listaTareas)
        }
    },
    mutations: {
        getTareas(state, listaTareas){
            state.tareas = listaTareas
        }
    }
})