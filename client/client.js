const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const url = document.currentScript.src;
const baseUrl = new URL(url).origin;

/* Send session data to sessions endpoint */
fetch(`${baseUrl}/sessions`, {
	method: 'POST',
	body: JSON.stringify({ s: searchParams.get("s") }),
	headers: {
		'Content-Type': 'application/json'
	}
});

/* Set all elements on page to send event data to events endpoint */
const onClick = (e) => {
	const etype = e.type;
	const edataextra = e.currentTarget.href ? e.currentTarget.href : e.currentTarget.innerText;
	const edata = `${window.location}:${e.currentTarget.tagName}:${edataextra}`
	fetch(`${baseUrl}/events`, {
		method: 'POST',
		body: JSON.stringify({ et: etype, ed: edata }),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

const selectors = ['button', 'a'];
const setEventHandlers = () => {
	selectors.forEach(selector => {
		document.querySelectorAll(selector).forEach((element) => {
			element.addEventListener("click", onClick, {passive: true});
		});
		document.querySelectorAll(selector).forEach((element) => {
			element.addEventListener("auxclick", onClick, true);
		});
	});
};

/* Click events */
if (document.readyState !== 'loading') {
	setEventHandlers();
} else {
	addEventListener('DOMContentLoaded', (e) => {
		setEventHandlers();
	});
}
