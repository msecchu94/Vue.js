<template>
  <div>
    <ul class="list-group">
      <li v-for="(item,index) of arrayOrdenado" :key="item.id"  @click="aumentar(index)"  class="list-group-item d-flex justify-content-between align-items-center">
       {{index}}-{{item.nombre}}
        <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
      </li>
   </ul>
   <button class= "btn btn-danger btn-block" @click="Limpiar">Limpiar</button>
  </div>
</template>

// 1ero se crea componente con su respectivo template y en script se exporta con estructura de objeto
<script>

import{mapState,mapMutations} from 'vuex';

export default {
  name: 'lista',
  computed: {

    ...mapState (['frutas']) ,
    arrayOrdenado(){
return this.frutas.sort((a,b)  => b.cantidad - a.cantidad)

    }

  },
  methods:{
      ...mapMutations(['aumentar','Limpiar'])
  }
};
</script>
