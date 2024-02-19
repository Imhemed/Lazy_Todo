let dom = {
	// the div container for the todo on the screen
	todoContainer: document.querySelector(".todoContainer"),
	// the container of the input of the todo

	inputContainer: document.querySelector(".test"),

	// show input button
	viewInput: document.querySelector(".viewinput"),
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

	showTodo: function (todo, container) {
		let div = document.createElement("div");
		// loop over the todo keys and add them to the dive
		for (const [key, value] of Object.entries(todo)) {
			let innerDiv = document.createElement("div");
			innerDiv.innerText = `${key} : ${value}`;
			div.append(innerDiv);
			// remove the creatiion date from showing
			if (key === "creationDate") {
				div.removeChild(innerDiv);
			}
		}
		// add the dive to the contianer
		container.append(div);
	},
	//  to show the input for creating a new todo
	// the "input component"
	showinput: function (parrent) {
		let div = document.createElement("div");
		div.className = "divInput";
		div.innerHTML = `<form action="submit" class="form">
		<p>please add the following</p>
		<label for="title"> Title</label>
		<input type="text" id="title" />
		<label for="project"> project</label>
		<input type="text" id="project" />
		<label for="descreption"> descreption</label>
		<input type="text" id="descreption" />
		<label for="dueDate"> dueDate</label>
		<input type="date" id="dueDate" />
		<label for="priority"> priority</label>
		<input type="text" id="priority" />
		<button type="submit" id="button">submit</button>
	</form>`;
		parrent.append(div);
	},
};
export { dom };
