<template>
  <div id="app">
 <b-navbar toggleable="lg" type="dark" variant="info">

 <b-navbar-nav class="ml-auto">
     <b-nav-form>
          <b-form-input type="text" size="sm" class="mr-sm-2" placeholder="Buscar" v-model="searchQuery"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="search" >Buscar</b-button>
        </b-nav-form>
 </b-navbar-nav>

 </b-navbar>

 <div class="container">
    <b-list-group>
      <b-list-group-item  v-for="t in tracks">{{t.name}} - {{t.artist}}</b-list-group-item>
    </b-list-group>
</div>

<p>{{serchMessage}}</p>

  </div>
</template>

<script>
import trackService from './services/track.js'

export default {
  name:'app',

  data() {
    return {
      searchQuery:'',
      tracks:[]
    }
  },

  computed: {
    serchMessage (){return `Encontrados : ${this.tracks.length}`}
  },
  methods: {
    search(){
    trackService.search(this.searchQuery)
.then(res=>{console.log(res)})
    }
  }

}
</script>
