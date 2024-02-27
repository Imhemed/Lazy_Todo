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

	inputbutton: document.querySelector("#button"),

	// sort button

	sortButton: document.querySelector("#sortbutton"),

	// Methods
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
			innerDiv.className = "mt-4  min-h-fit";
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
			"mt-4 btn   btn-accent btn-xs sm:btn-sm md:btn-md rounded text-black ";
		button.innerText = "X";
		tododiv.append(button);
	},

	displaySortedList: function (sortedList, todolist) {
		// when deleting items always pass in the original location
		this.todoContainer.innerHTML = "";
		let container = document.createElement("div");

		for (const [key, value] of Object.entries(sortedList)) {
			let h2 = document.createElement("h2");
			h2.className = "text-2xl mt-4 ";
			h2.innerText = ` Project ${key}`;

			container.append(h2);

			for (let i = 0; i < value.length; i++) {
				this.showTodo(value[i], container, todolist);
			}
		}
		this.todoContainer.append(container);
	},
};
export { dom };
