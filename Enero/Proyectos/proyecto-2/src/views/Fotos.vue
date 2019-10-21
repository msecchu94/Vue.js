<template>
  <div>
    <h1>Galeria de Fotos</h1>
    <!-- // 2do se crea la ruta del link segun item para que recorra el index y se precione con su propia key con :to y -->
    <router-link
      :to="{name:'fotos',params:{id:item}}"
      v-for="(item,index) of fotosArreglo"
      :key="index"
    >
      <button>Foto: {{item}}</button>
    </router-link>

    <Foto/>
    <!-- //boton para volver a otra pagina event click + methods router.push -->
    <button @click="Home">Back Home</button>
    <button @click="Anterior">Anterior</button>
    <button @click="Siguiente">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Fotografias.vue";

export default {
  name: "Fotos",
  components: {
    Foto
  },
  // obtener botones para modificar el id y/o items y asi cambie
  // 1ero se crear la data con sus item
  data() {
    return {
      fotosArreglo: [1, 2, 3]
    };
  },
  methods: {
    Home() {
      this.$router.push("/");
    },
    Anterior() {
      this.$router.go(-1);
    },

    Siguiente() {
      this.$router.go(1);
    }
  }
};
</script>
