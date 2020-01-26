var form = document.getElementById('form');
var content = document.getElementById('content');
var input = document.getElementById('name');

let count = 0;

form.addEventListener('submit', (e) => {

	e.preventDefault();
	var child = document.createElement('div');
	child.append(`${++count}.  ${input.value}`);
	content.appendChild(child);
	input.value = "";

	child.onclick = function (e) {
		content.removeChild(child);
		count = 0;
		for (let element of content.childNodes) {
		element.textContent = String(element.textContent).replace(/\d+/, ++count);  
		}
		count = content.childNodes.length;
	}
});

