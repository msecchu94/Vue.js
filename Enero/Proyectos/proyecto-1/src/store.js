import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// <! - INSTANCIA DE VUEX->
export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 0 },
      { nombre: 'Pera', cantidad: 0 },
      {nombre:'Banana',cantidad:0}
    
    ]
  },
  mutations: {
    aumentar(state, index) {
      state.frutas[index].cantidad++
    },
    Limpiar(state) {
      state.frutas.forEach(element => {
        
        element.cantidad=0
      })
    }

  },
  actions: {

  }
})
