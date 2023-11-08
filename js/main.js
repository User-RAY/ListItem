
let form = document.querySelector('#addform');
let listItems = document.querySelector('#items');

let filter = document.querySelector('#filter');


form.addEventListener('submit', addlistevent);

listItems.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);


function addlistevent(e) {
	e.preventDefault();

	let listName = document.querySelector('#add-list');


	let li = document.createElement('li');

	let delBtn = document.createElement('button');

	delBtn.className = "del-btn";

	delBtn.appendChild(document.createTextNode('X'));

	li.className = "list-group-items";

	li.appendChild(document.createTextNode(listName.value));

	li.appendChild(delBtn);

	listItems.appendChild(li);

	listName.value = " ";

	

}




function removeItem(e) {
	if (e.target.classList.contains('del-btn')) {
		if (confirm('Are you sure?')) {
			let li = e.target.parentElement;
			listItems.removeChild(li);
		}

	} 
}




function filterItems(e) {

	let text = e.target.value.toLowerCase();

	let items = listItems.getElementsByTagName('li');

	Array.from(items).forEach(function(item) {

		let itemName = item.firstChild.textContent;

		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'flex'
		} else {
			item.style.display = 'none'
		}

	});

}