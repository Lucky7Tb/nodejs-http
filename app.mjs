import http from 'http';
import TodoListService from './todolist-service.mjs';

const todolistService = new TodoListService();

function startServer(port = 3000) {
	const server = http.createServer(function (request, response) {
		response.setHeader('Content-Type', 'application/json');

		switch (request.method) {
			case 'GET':
				todolistService.getTodoList(request, response);
				break;
			case 'POST':
				todolistService.createTodoList(request, response);
				break;
			case 'PUT':
				todolistService.updateTodoList(request, response);
				break;
			case 'DELETE':
				todolistService.deleteTodoList(request, response);
				break;
		}

	});
	
	server.listen(port);
	console.log('Server running on port: ' + port);
}

startServer(3000);