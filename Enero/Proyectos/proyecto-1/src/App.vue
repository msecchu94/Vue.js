<!--EL TEMPLATE TIENE ALOJADO UN COMPONENTE EN LA ETIQUETA DE HTML DONDE SE LE PASA UN MENSAJE QUE LO RECIBE DESDE EL PROPS DEL COMPONENTE  /// componente principal-->

<template>
  <div id="app" class="container">
    <cabecera></cabecera> 
    <lista></lista>
    <!-- //4to se agrega el template a la vista -->
  </div>
</template>

<!--MISMA ESTRUCTURA DE COMPONENTE (NOMBRE Y PARA LLAMAR A OTROS COMPONENTE SE HACE CON PROPIEDAD COMPONENTES: PREVIAMENTE IMPORTADO)-->

<script>
import Cabecera from './components/Cabecera.vue' // 2do se importa componentes 
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    
   Cabecera, // 3ro se agrega a components para poder utilizar el mismo
   Lista
  }
}
</script>

