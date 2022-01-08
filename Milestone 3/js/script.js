
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
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
            },
            addTodo: function(){
                // utilizzo trim per rimuovere gli spazi
                const newTrimTodo = this.newTodo.trim();
                if(newTrimTodo.length > 0 )
                // devo pushare un oggetto
                this.todoList.push({
                    text:newTrimTodo,
                    done:false
                });
                // riporto input vuoto dopo aver inserito un nuovo todo
                this.newTodo =''; 
            },
            doneNotDone: function(index){
                // devo puntare all'indice corretto dove sto utilizzando la funzione richiamata con il @click
                // con la negazione faccio l'opposto perciò in base al dato impostato ogni click diventerà l'opposto
                this.todoList[index].done = !this.todoList[index].done;
            }
        }
    }
);