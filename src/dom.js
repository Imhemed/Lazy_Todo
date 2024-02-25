let dom = {
	// grabing the dom elements

	// the div container for the todo on the screen
	todoContainer: document.querySelector(".todoContainer"),

	// ther button for clearning all of the todos
	clearButton: document.querySelector("#clearbutton"),

	// // the container of the input of the todo
	// inputContainer: document.querySelector(".test"),

	// show input button
	viewInput: document.querySelector(".viewinput"),

	// the dialog
	dialog: document.querySelector(".dialog"),

	// Methods
	inputbutton: document.querySelector("#button"),

	// return object with the dom elements
	getInput: function () {
		let input = {
			title: document.querySelector("#title"),
			project: document.querySelector("#project"),
			descreption: document.querySelector("#descreption"),
			dueDate: document.querySelector("#dueDate"),
			priority: document.querySelector("#priority"),
			button: document.querySelector("#button"),
			form: document.querySelector(".form"),
		};
		return input;
	},

	// display the todo in a container of your chosing

	showTodo: function (todo, container, todolist) {
		let div = document.createElement("div");
		// loop over the todo keys and add them to the dive
		for (const [key, value] of Object.entries(todo)) {
			let innerDiv = document.createElement("div");
			innerDiv.className = "mt-4";
			innerDiv.innerText = `${key} : ${value}`;
			div.append(innerDiv);
			// remove the creatiion date from showing
			if (key === "creationDate") {
				div.removeChild(innerDiv);
			}
		}
		div.className = " ";
		// add the dive to the contianer
		this.finshTodo(todo, todolist, container, div);

		this.addLine(div);
		container.append(div);
	},
	// adds a line to the todo card
	addLine: function (container) {
		let line = document.createElement("hr");
		line.classList = "mt-4";
		container.append(line);
	},
	//  the button to celar the todo if it is done
	finshTodo: function (todo, todolist, contianer, tododiv) {
		let button = document.createElement("button");

		button.addEventListener("click", () => {
			todolist.splice(todolist.indexOf(todo), 1);
			tododiv.innerHTML = "";
			contianer.removeChild(tododiv);
			localStorage.removeItem(todo);
		});
		button.className =
			"mt-4 btn  btn-outline btn-accent btn-xs sm:btn-sm md:btn-md rounded ";
		button.innerText = "X";
		tododiv.append(button);
	},
	// replaced with the dialog tag

	// //  to show the input for creating a new todo show the input (compontant)

	// showinput: function (parrent) {
	// 	let div = document.createElement("div");
	// 	div.className = "divInput";
	// 	div.innerHTML = `<form action="submit" class="form">
	// 	<p>please add the following</p>
	// 	<label for="title"> Title</label>
	// 	<input type="text" id="title" />
	// 	<label for="project"> project</label>
	// 	<input type="text" id="project" />
	// 	<label for="descreption"> descreption</label>
	// 	<input type="text" id="descreption" />
	// 	<label for="dueDate"> dueDate</label>
	// 	<input type="date" id="dueDate" />
	// 	<label for="priority"> priority</label>
	// 	<input type="text" id="priority" />
	// 	<button type="submit" id="button">submit</button>
	// </form>`;
	// 	parrent.append(div);
	// },
};
export { dom };
