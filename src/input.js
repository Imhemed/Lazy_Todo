let input = {
	title: document.querySelector("#title"),
	project: document.querySelector("#project"),
	descreption: document.querySelector("#descreption"),
	dueDate: document.querySelector("#dueDate"),
	priority: document.querySelector("#priority"),
	button: document.querySelector("#button"),
	form: document.querySelector(".form"),
};
let Dom = {
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

	todoContainer: document.querySelector(".todoContainer"),
};
export { input, Dom };
