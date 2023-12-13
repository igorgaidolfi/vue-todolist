const { createApp } = Vue
createApp({
    data(){
        return{
            new_text: '',
            todoList:[
                {
                    text: 'Leggere un libro nuovo',
                    done: false
                },
                {
                    text: 'Lavare la tovaglia',
                    done: true
                },
                {
                    text: 'Preparare la valigia',
                    done: false
                },
                {
                    text: 'Comprare un vasetto di miele',
                    done: true
                },
                {
                    text: 'Aggiustare i cavi della luce',
                    done: false
                },
            ]
        }
    },
    methods:{
        removeTodo(index){
            this.todoList.splice(index,1)
        },
        addtoDo(){
            let obj={
                text: this.new_text,
                done: false
            }
            this.todoList.push(obj)
            this.new_text = ''
        }
    }
}).mount('#app')