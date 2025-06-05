const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const url = document.currentScript.src;
const baseUrl = new URL(url).origin;
fetch(`${baseUrl}/sessions`, {
	method: 'POST',
	body: JSON.stringify({ s: searchParams.get("s") }),
	headers: {
		'Content-Type': 'application/json'
	}
});