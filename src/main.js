import { todo } from "./todo";
import { Dom, input } from "./input";

input.button.addEventListener("click", (e) => {
	e.preventDefault();
	todo.addTodo(
		input.title.value,
		input.project.value,
		input.descreption.value,
		input.dueDate.value,
		input.priority.value
	);
	Dom.showTodo(todo.todolist[todo.todolist.length - 1], Dom.todoContainer);
	input.form.reset();
});
