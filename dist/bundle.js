/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dom: () => (/* binding */ Dom)\n/* harmony export */ });\nlet Dom = {\r\n\t// the div container for the todo on the screen\r\n\ttodoContainer: document.querySelector(\".todoContainer\"),\r\n\t// the container of the input of the todo\r\n\r\n\tinputContainer: document.querySelector(\".test\"),\r\n\r\n\t// show input button\r\n\tviewInput: document.querySelector(\".viewinput\"),\r\n\t// return object with the dom elements\r\n\tgetInput: function () {\r\n\t\tlet input = {\r\n\t\t\ttitle: document.querySelector(\"#title\"),\r\n\t\t\tproject: document.querySelector(\"#project\"),\r\n\t\t\tdescreption: document.querySelector(\"#descreption\"),\r\n\t\t\tdueDate: document.querySelector(\"#dueDate\"),\r\n\t\t\tpriority: document.querySelector(\"#priority\"),\r\n\t\t\tbutton: document.querySelector(\"#button\"),\r\n\t\t\tform: document.querySelector(\".form\"),\r\n\t\t};\r\n\t\treturn input;\r\n\t},\r\n\t// display the todo in a container of your chosing\r\n\r\n\tshowTodo: function (todo, container) {\r\n\t\tlet div = document.createElement(\"div\");\r\n\t\t// loop over the todo keys and add them to the dive\r\n\t\tfor (const [key, value] of Object.entries(todo)) {\r\n\t\t\tlet innerDiv = document.createElement(\"div\");\r\n\t\t\tinnerDiv.innerText = `${key} : ${value}`;\r\n\t\t\tdiv.append(innerDiv);\r\n\t\t\t// remove the creatiion date from showing\r\n\t\t\tif (key === \"creationDate\") {\r\n\t\t\t\tdiv.removeChild(innerDiv);\r\n\t\t\t}\r\n\t\t}\r\n\t\t// add the dive to the contianer\r\n\t\tcontainer.append(div);\r\n\t},\r\n\t//  to show the input for creating a new todo\r\n\tshowinput: function (parrent) {\r\n\t\t// i hate my live . i need to crate all the input elemnt and give them there classes , they are right you need to use a framwork\r\n\t\t// let form = document.createElement(\"form\")\r\n\t\t// form.className = \"from\"\r\n\t\t// let p1 = document.createElement(\"p\")\r\n\t\t// p1.innerText =\r\n\t\tlet div = document.createElement(\"div\");\r\n\t\tdiv.className = \"divInput\";\r\n\t\tdiv.innerHTML = `<form action=\"submit\" class=\"form\">\r\n\t\t<p>please add the following</p>\r\n\t\t<label for=\"title\"> Title</label>\r\n\t\t<input type=\"text\" id=\"title\" />\r\n\t\t<label for=\"project\"> project</label>\r\n\t\t<input type=\"text\" id=\"project\" />\r\n\t\t<label for=\"descreption\"> descreption</label>\r\n\t\t<input type=\"text\" id=\"descreption\" />\r\n\t\t<label for=\"dueDate\"> dueDate</label>\r\n\t\t<input type=\"date\" id=\"dueDate\" />\r\n\t\t<label for=\"priority\"> priority</label>\r\n\t\t<input type=\"text\" id=\"priority\" />\r\n\t\t<button type=\"submit\" id=\"button\">submit</button>\r\n\t</form>`;\r\n\t\tparrent.append(div);\r\n\t},\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to_do/./src/input.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\r\n\r\n_todo__WEBPACK_IMPORTED_MODULE_0__.todo.todolist = JSON.parse(localStorage.getItem(\"todoLocalList\"));\r\nif (_todo__WEBPACK_IMPORTED_MODULE_0__.todo.todolist === null) {\r\n\t_todo__WEBPACK_IMPORTED_MODULE_0__.todo.todolist = [];\r\n}\r\nconsole.log(_todo__WEBPACK_IMPORTED_MODULE_0__.todo.todolist);\r\n\r\n_input__WEBPACK_IMPORTED_MODULE_1__.Dom.viewInput.addEventListener(\"click\", () => {\r\n\t_input__WEBPACK_IMPORTED_MODULE_1__.Dom.showinput(_input__WEBPACK_IMPORTED_MODULE_1__.Dom.inputContainer);\r\n\r\n\tdocument.querySelector(\"#button\").addEventListener(\"click\", (e) => {\r\n\t\te.preventDefault();\r\n\t\tlet input = _input__WEBPACK_IMPORTED_MODULE_1__.Dom.getInput();\r\n\r\n\t\t_todo__WEBPACK_IMPORTED_MODULE_0__.todo.addTodo(\r\n\t\t\tinput.title.value,\r\n\t\t\tinput.project.value,\r\n\t\t\tinput.descreption.value,\r\n\t\t\tinput.dueDate.value,\r\n\t\t\tinput.priority.value\r\n\t\t);\r\n\t\tlocalStorage.setItem(\"todoLocalList\", JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.todo.todolist));\r\n\t\t_input__WEBPACK_IMPORTED_MODULE_1__.Dom.showTodo(_todo__WEBPACK_IMPORTED_MODULE_0__.todo.todolist[_todo__WEBPACK_IMPORTED_MODULE_0__.todo.todolist.length - 1], _input__WEBPACK_IMPORTED_MODULE_1__.Dom.todoContainer);\r\n\t\t// delete the value inside of the form input\r\n\t\tinput.form.reset();\r\n\t\t// delete all of the input element\r\n\t\t_input__WEBPACK_IMPORTED_MODULE_1__.Dom.inputContainer.innerHTML = \"\";\r\n\t});\r\n});\r\n// input.button.addEventListener(\"click\", (e) => {\r\n// \te.preventDefault();\r\n// \ttodo.addTodo(\r\n// \t\tinput.title.value,\r\n// \t\tinput.project.value,\r\n// \t\tinput.descreption.value,\r\n// \t\tinput.dueDate.value,\r\n// \t\tinput.priority.value\r\n// \t);\r\n// \tlocalStorage.setItem(\"todoLocalList\", JSON.stringify(todo.todolist));\r\n// \tDom.showTodo(todo.todolist[todo.todolist.length - 1], Dom.todoContainer);\r\n// \tinput.form.reset();\r\n\r\n// });\r\n\n\n//# sourceURL=webpack://to_do/./src/main.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nlet todo = {\r\n\ttodolist: [],\r\n\taddTodo: function (\r\n\t\ttitle = undefined,\r\n\t\tproject = undefined,\r\n\t\tdescreption = undefined,\r\n\t\tdueDate = undefined,\r\n\t\tpriority = undefined\r\n\t) {\r\n\t\tthis.title = title;\r\n\t\tthis.project = project;\r\n\t\tthis.descreption = descreption;\r\n\t\tthis.dueDate = dueDate;\r\n\t\tthis.priority = priority;\r\n\t\tlet creationDate = new Date();\r\n\r\n\t\tif (title !== undefined) {\r\n\t\t\tthis.todolist.push({\r\n\t\t\t\ttitle,\r\n\t\t\t\tproject,\r\n\t\t\t\tproject,\r\n\t\t\t\tdescreption,\r\n\t\t\t\tdueDate,\r\n\t\t\t\tpriority,\r\n\t\t\t\tcreationDate,\r\n\t\t\t});\r\n\t\t}\r\n\t},\r\n\tresetTodoProperty: function (todo, property) {\r\n\t\treturn (todo[property] = undefined);\r\n\t},\r\n\tfindTodoIndex: function (title) {\r\n\t\tthis.todolist.forEach((todo) => {\r\n\t\t\tif ((todo.title = title)) {\r\n\t\t\t\treturn this.todolist.indexOf(todo);\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\tremoveTodo: function (title) {\r\n\t\tthis.todolist.splice(this.findTodoIndex(title), 1);\r\n\t},\r\n\tquaryTodo: function (key, value) {\r\n\t\tlet quary = [];\r\n\t\tthis.todolist.forEach((todo) => {\r\n\t\t\tif (todo.hasOwnProperty(key)) {\r\n\t\t\t\tif (todo[key] === value) {\r\n\t\t\t\t\tquary.push(todo);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t\treturn quary;\r\n\t},\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to_do/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;