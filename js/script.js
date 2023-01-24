const { createApp } = Vue;

createApp({

    data() {

        return {
            newTask: '',
            tasks: [
                { 
                    text: "Passare l'aspirapolvere", 
                    done: true 
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
                // "Passare l'aspirapolvere",
                // 'Portare fuori il cane',
                // 'Esercitarsi nel coding',
                // 'Allenamento leggero'
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
        taskDone(index) {
            this.tasks.done = true;
        }
        
    
    }

}).mount('#app');
