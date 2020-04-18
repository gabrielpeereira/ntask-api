module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
        .all((req, res) => {

        })
        .get((req, res) => {
            //Lista tarefas
        })
        .post((req, res) => {
            //Nova tarefa
        })

    app.route('/tasks/:id')
        .all((req, res) => {

        })
        .get((req, res) => {

        })
        .put((req, res) => {

        })
        .delete((req, res) => {
            
        })
};