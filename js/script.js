const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            tasks: [
                { text: 'Ricordarsi di Fare i ConsoleLog', done: false },
                { text: 'Devo portare fuori il cane', done: false },
                { text: 'Andare in Toscana per la Chianina', done: false },
                { text: 'Andare in Sardegna ad assaggiare il Formaggio con i vermi', done: false },
                { text: 'Fare benzina al camper', done: false },
                { text: 'Cercare le colonnine per elettricità', done: false },
                { text: 'Esercitarmi con Vue e Js statico', done: false },
                { text: 'Prestare attenzione durante gli enigmi di Loris', done: false },

            ],
            newTask: '',
            searchFilter: '',
            classAnimation: '',
        };
    },
    computed: {
        filteredTasks() {
            let array = [...this.tasks];
            const searchFilter = this.searchFilter.toLowerCase();

            if (searchFilter.length) {
                array = this.tasks.filter(task => {
                    const text = task.text.toLowerCase();
                    return text.includes(searchFilter);
                });
            }

            return array;
        },
    },
    methods: {
        deleteElement(i) {
            setTimeout(() => {
                this.tasks.splice(i, 1);
                this.classAnimation = '';
            }, 400);
            this.classAnimation = 'disappear';
        },
        addNewTask() {
            if (!this.newTask) return;
            this.tasks.push({
                text: this.newTask,
                done: false,
            });
            this.newTask = '';
            this.searchFilter = '';
        },
    },
});

// La monto nell'html
app.mount('#todo');