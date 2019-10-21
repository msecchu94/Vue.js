Vue.component('hijo', {
    template://html
        `
    <div class="py-5 bg-success " >
    <h2>Componente Hijo:{{numero}} </h2>
    <h4>Nombre : {{nombre}} </h4>
    <div/>
    
    `,
    props: ['numero'],
    data() {

        return {

            nombre: 'Maxi'
        }

    },
    mounted() {

        this.$emit('nombreHijo',this.nombre);

   

}


})
