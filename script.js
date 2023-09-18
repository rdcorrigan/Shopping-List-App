document.querySelector('body').style.color = 'White'
document.querySelector('body').style.backgroundColor = 'teal';
document.querySelector('body').style.fontFamily = 'Helvetica';
document.querySelector('button').style.fontFamily = 'Calibri';
document.querySelector('h1').classList.add('coolTitle');

let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let list = document.querySelectorAll('li');

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === 'Enter') {
		createListElement();
	}
}

function createListElement() {
	let li = document.createElement("li");
	let dButton = document.createElement('button');
	dButton.innerHTML = "Delete";
	li.appendChild(dButton);
	li.appendChild(document.createTextNode(input.value));
	dButton.addEventListener('click', function() {
		dButton.parentElement.remove();
	});
	li.addEventListener('click', function() {
		li.style.width = 'fit-content';
		li.classList.toggle('done');
	})
	ul.appendChild(li);
	input.value = "";
	dButton.style.fontFamily = 'Calibri';
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);