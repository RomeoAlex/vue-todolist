// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
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
            removeTodo: function(index) {
                this.todoList.splice(index, 1);
            }

        }
    }
);