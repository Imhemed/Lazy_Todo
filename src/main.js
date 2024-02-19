import { todo } from "./todo";
import { dom } from "./Dom";
todo.todolist = JSON.parse(localStorage.getItem("todoLocalList"));
if (todo.todolist === null) {
	todo.todolist = [];
}
console.log(todo.todolist);

dom.viewInput.addEventListener("click", () => {
	dom.showinput(dom.inputContainer);

	document.querySelector("#button").addEventListener("click", (e) => {
		e.preventDefault();
		let input = dom.getInput();

		todo.addTodo(
			input.title.value,
			input.project.value,
			input.descreption.value,
			input.dueDate.value,
			input.priority.value
		);
		localStorage.setItem("todoLocalList", JSON.stringify(todo.todolist));
		dom.showTodo(todo.todolist[todo.todolist.length - 1], dom.todoContainer);
		// delete the value inside of the form input
		input.form.reset();
		// delete all of the input element
		dom.inputContainer.innerHTML = "";
	});
});
