export const input_dateOnLoad = document.getElementById('input-date-loading');
//export const select_countryOnLoad = document.getElementById('select-country-onloading');
export const selector_cityOnLoad = document.getElementById('select-city-onloading');
//export const select_countryOffLoad = document.getElementById('select-country-offloading');
export const selector_cityOffLoad = document.getElementById('select-city-offloading');

const cities = [
	{ id: 'default', desc: 'Выберите пункт' },
	{ id: 'spb', desc: 'Санкт-Петербург' },
	{ id: 'msc', desc: 'Москва' },
	{ id: 'ekb', desc: 'Екатеринбург' },
	{ id: 'tumen', desc: 'Тюмень' },
	{ id: 'omsk', desc: 'Омск' },
	{ id: 'tomsk', desc: 'Томск' },
	{ id: 'nvsb', desc: 'Новосибирск' },
	{ id: 'krsnyarsk', desc: 'Красноярск' },
	{ id: 'murmansk', desc: 'Мурманск' },
	{ id: 'noyabrsk', desc: 'Ноябрьск' },
	{ id: 'nizhnevart', desc: 'Нижневартовск' },
	{ id: 'surgut', desc: 'Сургут' },
	{ id: 'khanty-mans', desc: 'Ханты-Мансийск' },
	{ id: 'new_urengoy', desc: 'Новый Уренгой' },
	{ id: 'chelyab', desc: 'Челябинск' },
	{ id: 'muravlenko', desc: 'Муравленко' },
	{ id: 'salekhard', desc: 'Салехард' },
	{ id: 'syktyvkar', desc: 'Сыктывкар' },
	{ id: 'arkhangelsk', desc: 'Архангельск' },
	{ id: 'krd', desc: 'Краснодар' },
	{ id: 'vrzh', desc: 'Воронеж' },
];

cities.forEach((city, index) => {
	const option = document.createElement('option');
	option.value = option.innerText = city.desc;
	option.setAttribute('data-city-id', city.id);
	option.selected = index === 0 ? true : false;
	option.disabled = index === 0 ? true : false;
	selector_cityOnLoad.appendChild(option);
});

cities.forEach((city, index) => {
	const option = document.createElement('option');
	option.value = option.innerText = city.desc;
	option.setAttribute('data-city-id', city.id);
	option.selected = index === 0 ? true : false;
	option.disabled = index === 0 ? true : false;
	selector_cityOffLoad.appendChild(option);
});

//export const selector_transportMode = document.getElementById('select-transport-mode');

export const selector_truckBodyType = document.getElementById('select-truck-transport-body');

const trucks = [
	{ id: 'default', desc: 'Выберите тип кузова' },
	{ id: 'tent', desc: 'Тент' },
	{ id: 'isotherm', desc: 'Изотермический' },
	{ id: 'ref', desc: 'Рефрежиратор' },
	{ id: 'tank', desc: 'Цистерна' },
	{ id: 'dump', desc: 'Самосвал' },
];

trucks.forEach((truck, index) => {
	const option = document.createElement('option');
	option.value = option.innerText = truck.desc;
	option.setAttribute('data-truck-id', truck.id);
	option.selected = index === 0 ? true : false;
	option.disabled = index === 0 ? true : false;
	selector_truckBodyType.appendChild(option);
});

export const selector_transportTruckTonnage = document.getElementById('select-truck-transport-tonnage');

const tonnage = ['Выберите тоннаж', 20, 10, 5];

tonnage.forEach((ton, index) => {
	const option = document.createElement('option');
	option.value = option.innerText = ton;
	option.selected = index === 0 ? true : false;
	option.disabled = index === 0 ? true : false;
	selector_transportTruckTonnage.appendChild(option);
});

export const checkbox_insurance = document.getElementById('checkbox-insurance');
export const checkbox_tracking = document.getElementById('checkbox-tracking');
export const checkbox_warehouseIsNeeded = document.getElementById('checkbox-warehouse');
export const btn_getResults = document.getElementById('btn-calculate-results');
export const section_areaResults = document.getElementById('section-result-area');
