import { selector_cityOnLoad, selector_cityOffLoad, selector_truckBodyType, selector_transportTruckTonnage } from './DOM';
import { dataObj } from './dataObj';

export async function requestByCity() {
	if (
		selector_cityOnLoad.value === selector_cityOffLoad.value ||
		Array.from(selector_cityOnLoad.children).some(
			(option) => option.selected && option.getAttribute('data-city-id') === 'default'
		) ||
		Array.from(selector_cityOffLoad.children).some((option) => option.selected && option.getAttribute('data-city-id') === 'default')
	) {
		return;
	} else {
		try {
			const data = new FormData();
			data.append(
				'dep',
				Array.from(selector_cityOnLoad.children)
					.find((option) => option.selected === true)
					.getAttribute('data-city-id')
			);
			data.append(
				'arr',
				Array.from(selector_cityOffLoad.children)
					.find((option) => option.selected === true)
					.getAttribute('data-city-id')
			);

			const req = await fetch('../req_city.php', {
				method: 'POST',
				body: data,
				headers: {
					Accept: 'application/json',
				},
			});

			const res = await req.json();
			dataObj.setDistance(Number(res[0].DISTANCE));
			dataObj.setRatePerKm(Number(res[1].RATE));
		} catch (error) {
			console.log(error);
		}
	}
}

export async function requestByTruckType() {
	try {
		const data = new FormData();
		data.append(
			'trucktype',
			Array.from(selector_truckBodyType.children)
				.find((option) => option.selected === true)
				.getAttribute('data-truck-id')
		);

		const req = await fetch('../req_truck.php', {
			method: 'POST',
			body: data,
			headers: {
				Accept: 'application/json',
			},
		});

		const res = await req.json();
		dataObj.setKoeffPerTruckBody(Number(res.koeff));
	} catch (error) {
		console.log(error);
	}
}

export async function requestByTonnage() {
	try {
		const data = new FormData();
		data.append('tonnage', selector_transportTruckTonnage.value);

		const req = await fetch('../req_tonnage.php', {
			method: 'POST',
			body: data,
			headers: {
				Accept: 'application/json',
			},
		});

		const res = await req.json();
		dataObj.setKoeffPerTon(Number(res.koeff));
	} catch (error) {
		console.log(error);
	}
}
