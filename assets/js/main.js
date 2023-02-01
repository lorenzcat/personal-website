(() => {
	// toggle between dark and light mode
	document.getElementById("toggle").onchange = _ => {
		[...document.getElementsByClassName('toggleable')].forEach(e => e.classList.toggle('dark'))
	};

	// lqip
	[...document.getElementsByClassName('lqip')].forEach(e => e.setAttribute('src', e.getAttribute('data-src')));
})();