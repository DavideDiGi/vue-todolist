const { createApp } = Vue;

createApp({

    data() {

        return {
            newTask: '',
            tasks: [
                { 
                    text: "Passare l'aspirapolvere", 
                    done: false 
                },
                { 
                    text: 'Portare fuori il cane', 
                    done: false 
                },
                { 
                    text: 'Esercitarsi nel coding', 
                    done: false 
                },
                { 
                    text: 'Allenamento leggero', 
                    done: false 
                },
            ]
        };

    },

    methods: {

        addTask: function () {

            if(this.newTask != '') {

                this.tasks.push({text: this.newTask, done: false},);
                this.newTask = '';
                console.log(this.tasks);
            }

        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        checkDone: function (element) {
            if (element.done == true) {
                return 'line-through';
            }
            else{
                return '';
            }
        },
        taskDone(element) {
            if (element.done == false) {
                element.done = true;
            }
            else{
                element.done = false;
            }
        }
        
    
    }

}).mount('#app');
