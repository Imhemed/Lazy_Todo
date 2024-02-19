let todo = {
	todolist: [],
	addTodo: function (
		title = undefined,
		project = undefined,
		descreption = undefined,
		dueDate = undefined,
		priority = undefined
	) {
		this.title = title;
		this.project = project;
		this.descreption = descreption;
		this.dueDate = dueDate;
		this.priority = priority;
		let creationDate = new Date();

		if (title !== undefined) {
			this.todolist.push({
				title,
				project,
				project,
				descreption,
				dueDate,
				priority,
				creationDate,
			});
		}
	},
	resetTodoProperty: function (todo, property) {
		return (todo[property] = undefined);
	},
	findTodoIndex: function (title) {
		this.todolist.forEach((todo) => {
			if ((todo.title = title)) {
				return this.todolist.indexOf(todo);
			}
		});
	},
	removeTodo: function (title) {
		this.todolist.splice(this.findTodoIndex(title), 1);
	},
	quaryTodo: function (key, value) {
		let quary = [];
		this.todolist.forEach((todo) => {
			if (todo.hasOwnProperty(key)) {
				if (todo[key] === value) {
					quary.push(todo);
				}
			}
		});
		return quary;
	},
};

export { todo };
