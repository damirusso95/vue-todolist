// Creare una mini applicazione Vue che ci permetta di visualizzare una semplice ToDo List.



// Accanto al testo del ToDo aggiungete una "X", ad esempio con FontAwesome.
// Al click su questo elemento il ToDo corrispondente viene rimosso dalla lista.


const { createApp } = Vue

createApp({

    data() {
        return {
            // Array di cose da fare
            todos: [
                'Fare la spesa',
                'Pulire la casa',
                'Studiare Vue.js',
                'Andare in palestra',
                'Preparare la cena'
            ],

            //   qui salvo gli input
            newTodo: ''


        }

    },


    methods: {
        // nuova cosa da fare all'array todos
        addTodo() {
            if (this.newTodo.trim() !== '') {
                // push sull'array
                this.todos.push(this.newTodo);
                // Resetta l'input
                this.newTodo = '';
            }
        }
    },
    // funzione per rimuovere
    removeTodo() {
        
    }

},

).mount('#app')