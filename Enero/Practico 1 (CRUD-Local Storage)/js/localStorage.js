const app = new Vue({
    
    el: '#app',
    data: {
        titulo: 'Gym con Vue',
        tareas: [],
        nuevaTarea: ''


    },
     methods :{

         agregarTarea: function () { 

             this.tareas.push({
                 nombre: this.nuevaTarea,
                 estado: false
                
             });   
             
             this.nuevaTarea = '';   
             localStorage.setItem('gym de maxi', JSON.stringify(this.tareas));
             
         },

         editarTarea: function (index) {
             this.tareas[index].estado = true; 
             
             localStorage.setItem('gym de maxi', JSON.stringify(this.tareas));
         },
         
         eliminarTarea: function (index) {
             
            this.tareas.splice(index,1) 
             localStorage.setItem('gym de maxi', JSON.stringify(this.tareas)); 
         }
     },

    created: function () {
        let database = JSON.parse(localStorage.getItem('gym de maxi'));
        if (database === null) {
            
            this.tareas = [];

        } else {
            
            this.tareas = database;
        }
    
}

});