export default class TodoListService {
	constructor() {
		this.todolist = ['Todo 1', 'Todo 2'];
	}

	todolistJson() {
		return JSON.stringify({
			code: 200,
			status: 'OK',
			data: this.todolist.map((value, index) => {
				return {
					id: index,
					todo: value
				}
			})
		});
	}

	getTodoList(_, response) {
		const todolistJson = this.todolistJson();
		response.write(todolistJson);
		response.end();
	}

	createTodoList(request, response) {
		request.addListener('data', (data) => {
			const body = JSON.parse(data.toString());
			this.todolist.push(body.todo);

			response.write(this.todolistJson());
			response.end();
		});
	}
	
	updateTodoList(request, response) {
		request.addListener('data', (data) => {
			const body = JSON.parse(data.toString());
			if (this.todolist[body.id]) {
				this.todolist[body.id] = body.todo;

				response.write(this.todolistJson());
				response.end();
			} else {

				response.write(JSON.stringify({
					code: 404,
					status: 'failed',
					message: 'Todo not found'
				}));
				response.end();
			}
		});
	}
	
	deleteTodoList(request, response) {
		request.addListener('data', (data) => {
			const body = JSON.parse(data.toString());
			if (this.todolist[body.id]) {
				this.todolist.splice(body.id, 1)

				response.write(this.todolistJson());
				response.end();
			} else {
				response.write(JSON.stringify({
					code: 404,
					status: 'failed',
					message: 'Todo not found'
				}));
				response.end();
			}
		});
	}
}