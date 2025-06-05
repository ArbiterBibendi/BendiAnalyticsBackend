const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const URL = document.currentScript.src;
console.log(URL);
fetch('http://localhost:3000/sessions', {
	method: 'POST',
	body: JSON.stringify({ s: searchParams.get("s") }),
	headers: {
		'Content-Type': 'application/json'
	}
});

document.querySelector("#searchParams").innerHTML = JSON.stringify({ s: searchParams.get('s') });