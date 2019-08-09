<template>
<div class="">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(fruta,index) in arrayOrdenado" :key="fruta.id" @click="aumentar(index)">
            {{fruta.nombre}}
            <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
        </li>
    </ul>
    <br>
  <div class="form-group">
      <button class="btn btn-primary" @click="reiniciar()">Reiniciar</button>
  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Lista",

  computed: {
    ...mapState(["frutas"]),
    arrayOrdenado:function(){
        return this.frutas.sort((a , b) => b.cantidad - a.cantidad)
    }
  },

  methods:{
      ...mapMutations(['aumentar','reiniciar'])
  }
};
</script>


