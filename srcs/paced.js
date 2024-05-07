const	pacedDiv = document.createElement('div');
let		monthTotalHours = 0;


async function initPacedBox()
{
	iConsole.log('initPacedBox...');
	const	box = await getBox();
	if (!box) return;

	console.log(isUp());
	if (isUp()) {
		pacedDiv.id = 'PacedExtension';
		pacedDiv.classList.add('paced_box_v3');
		box.parentNode.insertBefore(pacedDiv, box.nextSibling);
	} else {
		console.log(box);
		pacedDiv.id = 'PacedExtension';
		pacedDiv.classList.add('eta');
		box.appendChild(pacedDiv);
	}
}

async function getPaced() {
	
	iConsole.log(`Getting Paced...`);
	const accessToken = getAccessToken();
	console.log(accessToken);
	const response = await fetch('https://pace-system.42.fr/api/v1/users/me', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
			'Access-Control-Allow-Origin': '*/*',
			'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, X-Requested-With'
		},
	});
	if (!response.ok) {
		console.error(response);
		return;
	}
	const data = await response.json();
	if (isUp()) displayPacedV3(data);
	else displayPacedV2(data);
}

function displayPacedV3(data) {
	const	titleDiv = document.createElement('div');
	const	textDiv = document.createElement('div');

	titleDiv.classList.add('whitespace-nowrap');
	titleDiv.classList.add('xl:pt-2');
	titleDiv.innerHTML = 'Actual Pace:';

	textDiv.classList.add('font-bold');
	textDiv.innerHTML = `${data.pace}`;

	pacedDiv.appendChild(titleDiv);
	pacedDiv.appendChild(textDiv);
}


function displayPacedV2(data) {
	const	titleDiv = document.createElement('div');
	const	titleSpan = document.createElement('span');
	const	coalitionSpans = document.querySelectorAll('.coalition-span');
	const	color = coalitionSpans[0].style.color;


	titleDiv.classList.add('title');
	titleDiv.classList.add('mb-1');

	titleSpan.classList.add('coalition-span');
	titleSpan.style.color = `${color}`;
	titleSpan.innerHTML = 'Actual Pace:';

	titleDiv.appendChild(titleSpan);
	pacedDiv.appendChild(titleDiv);
}

