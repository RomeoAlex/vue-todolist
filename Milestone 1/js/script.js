// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

Vue.config.devtools = true;
const app = new Vue(
    {
        el:'#root',
        data: {
            newTodo:'',
            todoList: [
                {
                    text:'Fare la spesa',
                    done:false
                },
                {
                    text:'Portare fuori il cane',
                    done:true
                },
                {
                    text:'Preparare il caffè',
                    done:true
                },
                {
                    text:'Fare gli esercizi',
                    done:false
                },
                {
                    text:'Chiamare l\'idraulico',
                    done:false
                }, 
            ],
        },
        methods:{
        }
    }
);