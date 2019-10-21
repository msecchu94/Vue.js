const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Agrege Producto',
        frutas: [
            { nombre: 'banana', cantidad: 5 },
            { nombre: 'pera', cantidad: 0 },
            { nombre: 'manzana', cantidad: 3 },
            { nombre: 'sandia', cantidad: 4 }
        ],
        nuevaFruta: '',
        total: 0

    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})