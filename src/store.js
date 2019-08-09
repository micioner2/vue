import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Pera', cantidad: 5},
      {nombre: 'Plátano', cantidad: 6},
      {nombre: 'Fresa', cantidad: 10}
    ]
  },
  mutations: {
    aumentar(state,index){
      state.frutas[index].cantidad ++
    },
    reiniciar(state){
      state.frutas.forEach(element => {
        element.cantidad = 0;
      });
    }
  },
  actions: {

  }
})
