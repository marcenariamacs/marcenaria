
document.addEventListener('DOMContentLoaded', function() {
	const arrow = document.getElementById('scrollDownArrow');
	if (arrow) {
		arrow.addEventListener('click', function() {
			const nextSection = document.querySelector('#sobre');
			if (nextSection) {
				nextSection.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});
