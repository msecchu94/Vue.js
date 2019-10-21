<template>
  <div class="mt-5">
    <h1>Formulario</h1>
    <form>
      <b-row>

        <b-col md="3">
          <b-form-input type="text" v-model="text" :state="comprobar"></b-form-input>
          <small>Minimo 6 Caracteres</small>
        </b-col>

        <b-col md="3">
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <p>Seleccion : {{selected}}</p>
        </b-col>

        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="optionsradio">
            <p>optionsradio : {{radio}}</p>
          </b-form-radio-group>
        </b-col>

        <b-col md="3">
           <b-form-checkbox-group v-model="check" :options="optionsradio">
           
          </b-form-checkbox-group>
           <p>optionsradio : {{check}}</p>

         </b-col>
    
    

      </b-row>

      <p>texto : {{text}}</p>
    </form>
  </div>
</template>


<script>
export default {
  name: "Form",
  data() {
    return {
      text: "",
      check:null,
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" }
      ],
      radio: null,
      optionsradio: [
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" }
      ]
    };
  },
  computed: {
    comprobar() {
      return this.text.length > 6 ? true : false;
    }
  }
};
</script>

