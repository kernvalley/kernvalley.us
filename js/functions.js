import { getJSON } from '@shgysk8zer0/kazoo/http.js';

export async function getAlerts() {
	const alerts = await getJSON('https://news.kernvalley.us/alerts.json');
	const now = new Date().toISOString();

	return alerts.map(({ title, id, level = 'warn', startDate, endDate, body, url }) => {
		if (startDate <= now && endDate >= now) {
			const alert = document.createElement(typeof url === 'string' ? 'a' : 'div');
			const header = document.createElement('header');
			const h4 = document.createElement('h4');
			const dates = document.createElement('div');
			const start = document.createElement('time');
			const end = document.createElement('time');
			const p = document.createElement('p');

			startDate = new Date(startDate);
			endDate = new Date(endDate);
			alert.classList.add('status-box', 'block', level, 'alert-container');
			alert.id = id;

			h4.classList.add('alert-title');
			h4.textContent = title;

			p.classList.add('alert-body');
			p.textContent = body;

			if (typeof url === 'string') {
				alert.href = url;
			}

			start.textContent = startDate.toLocaleDateString();
			start.dateTime = startDate.toISOString();

			end.textContent = endDate.toLocaleDateString();
			end.dateTime = endDate.toISOString();

			dates.append(start, ' - ', end);
			header.append(h4, dates);
			alert.append(header, body);

			return alert;
		}
	});
}
