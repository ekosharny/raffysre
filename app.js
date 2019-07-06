const fridgeList = document.querySelector('#fridge-list');

function renderFridges(doc){

	let li = document.createElement('li');
	let div = document.createElement('div');
	let img = document.createElement('img');
	let company = document.createElement('h5');
	let model = document.createElement('p');

	li.setAttribute('data-id', doc.id);
	div.className = "card";
	img.className="listing-image";
	img.src = doc.data().img;
	company.textContent = doc.data().company;
	model.textContent = doc.data().model;

	div.appendChild(img);
	div.appendChild(company);
	div.appendChild(model);

	li.appendChild(div);

	fridgeList.appendChild(li);
}


db.collection('refrigerators').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderFridges(doc);
	})
})