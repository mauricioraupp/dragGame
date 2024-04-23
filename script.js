const card = document.querySelector('.card');
const dropZone = document.querySelector('.card-target');

card.addEventListener('dragstart', function(event) {
	console.log(event)
})
dropZone.addEventListener('dragover', function(event) {
	event.preventDefault()
})
dropZone.addEventListener('drop', function(event) {
	dropZone.prepend(card)
})