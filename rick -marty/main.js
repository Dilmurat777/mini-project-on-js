const items = document.querySelector('.items');

let itemsCard = [];

async function users() {
await	fetch('https://rickandmortyapi.com/api/character')
.then((res) => res.json())
.then((data) => getCard(data.results))
}


function getCard(res) {
	
	res.forEach((character) => {
		itemsCard += `
		<div class="item">
		<img src="${character.image}" alt="">
		<span>${character.name}</span>
		</div>
		`
		items.innerHTML = itemsCard
	})
}

users()
