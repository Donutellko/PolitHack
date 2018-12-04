javascript:(function(){
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://cdn.jsdelivr.net/gh/Donutellko/PolitHack/hack.js';
	document.body.appendChild(script);

	script.onload = e => {
		fetch('https://raw.githubusercontent.com/Donutellko/PolitHack/master/polit.json')
			.then(res => res.json())
			.then(tasks => PolitHack.labelAll(tasks))
			.catch(err => console.error(err));
	};
})()
