const fridgeList = document.querySelector('#fridge-list');
const icemachineList=document.querySelector('#ice-machine-list');
const foodprepList=document.querySelector('#foodprep-list');
const stoveList=document.querySelector('#stove-list');
const sinkList=document.querySelector('#sink-list');

function renderFridges(doc){

	let li = document.createElement('li');
	let div = document.createElement('div');
	let img = document.createElement('img');
	let name = document.createElement('h5');

	li.setAttribute('data-id', doc.id);
	li.className="item-class"
	div.className = "card";
	img.className="listing-image";
	name.className="listing-name";
	img.src = doc.data().img;
	name.textContent = doc.data().name;

	div.appendChild(img);
	div.appendChild(name);

	li.appendChild(div);

	fridgeList.appendChild(li);
}

db.collection('refrigerators').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderFridges(doc);
	})
})

function renderIceMachines(doc){

	let li = document.createElement('li');
	let div = document.createElement('div');
	let img = document.createElement('img');
	let name = document.createElement('h5');

	li.setAttribute('data-id', doc.id);
	li.className="item-class"
	div.className = "card";
	img.className="listing-image";
	name.className="listing-name";
	img.src = doc.data().img;
	name.textContent = doc.data().name;

	div.appendChild(img);
	div.appendChild(name);

	li.appendChild(div);

	icemachineList.appendChild(li);
}


db.collection('icemachines').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderIceMachines(doc);
	})
})

function renderFoodprep(doc){

	let li = document.createElement('li');
	let div = document.createElement('div');
	let img = document.createElement('img');
	let name = document.createElement('h5');

	li.setAttribute('data-id', doc.id);
	li.className="item-class"
	div.className = "card";
	img.className="listing-image";
	name.className="listing-name";
	img.src = doc.data().img;
	name.textContent = doc.data().name;

	div.appendChild(img);
	div.appendChild(name);

	li.appendChild(div);

	foodprepList.appendChild(li);
}

db.collection('foodprep').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderFoodprep(doc);
	})
})

function renderStoves(doc){

	let li = document.createElement('li');
	let div = document.createElement('div');
	let img = document.createElement('img');
	let name = document.createElement('h5');

	li.setAttribute('data-id', doc.id);
	li.className="item-class"
	div.className = "card";
	img.className="listing-image";
	name.className="listing-name";
	img.src = doc.data().img;
	name.textContent = doc.data().name;

	div.appendChild(img);
	div.appendChild(name);

	li.appendChild(div);

	stoveList.appendChild(li);
}

db.collection('stoves').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderStoves(doc);
	})
})

function renderSinks(doc){

	let li = document.createElement('li');
	let div = document.createElement('div');
	let img = document.createElement('img');
	let name = document.createElement('h5');

	li.setAttribute('data-id', doc.id);
	li.className="item-class"
	div.className = "card";
	img.className="listing-image";
	name.className="listing-name";
	img.src = doc.data().img;
	name.textContent = doc.data().name;

	div.appendChild(img);
	div.appendChild(name);

	li.appendChild(div);

	sinkList.appendChild(li);
}

db.collection('sinks').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderSinks(doc);
	})
})