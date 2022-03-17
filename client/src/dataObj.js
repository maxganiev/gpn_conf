import { checkbox_insurance, checkbox_tracking, section_areaResults } from './DOM';

export const dataObj = {
	distance: 0,
	ratePerKm: 0,
	koeff_truckBody: 0,
	koeff_tonnage: 0,
	insurance: 0,
	gps: 0,
	result: 0,
	deliveryTime: 0,
	warehouseIsNeeded: false,

	setDistance: function (distance) {
		return (this.distance = distance);
	},

	setRatePerKm: function (rate) {
		return (this.ratePerKm = rate);
	},

	setKoeffPerTruckBody: function (k) {
		return (this.koeff_truckBody = k);
	},

	setKoeffPerTon: function (k) {
		return (this.koeff_tonnage = k);
	},

	setInsurance: function () {
		return (this.insurance = checkbox_insurance.checked === true ? 5 : 0);
	},

	setGPS: function () {
		return (this.gps = checkbox_tracking.checked === true ? 500 : 0);
	},

	checkIfWarehouseIsNeeded: function (param) {
		return (this.warehouseIsNeeded = param);
	},

	returnResult: function () {
		this.result =
			this.distance * this.ratePerKm * this.koeff_truckBody * this.koeff_tonnage + this.distance * this.insurance + this.gps;

		return this.result;
	},

	returnDeliveryTime: function () {
		this.deliveryTime = Math.ceil(this.distance / 500);

		return this.deliveryTime;
	},

	printData: function () {
		if (window.getComputedStyle(section_areaResults).getPropertyValue('visibility') === 'hidden') {
			section_areaResults.style.visibility = 'visible';
			section_areaResults.style.transform = 'translateX(100%)';

			setTimeout(() => {
				section_areaResults.style.transform = 'translateX(0%)';
				section_areaResults.style.transition = 'transform 0.6s ease-out';
			}, 100);
		}

		section_areaResults.innerHTML = `
		<h1> <span class="span-red span-bold"> ${new Intl.NumberFormat('ru-RU').format(
			this.result.toFixed(0)
		)} &#8381; </span> <span class="span-underscore"> (в т.ч. НДС 20%) </span> </h1> 
		${
			this.insurance !== 0 || this.gps !== 0
				? `
		<ul class="list">
		<li> <u> в том числе: </u> </li>
		${
			this.insurance !== 0
				? `<li> Страхование груза: <span class="span-red"> ${new Intl.NumberFormat('ru-RU').format(
						(this.insurance * this.distance).toFixed(0)
				  )} Р. </span>  </li>`
				: ''
		}
		${
			this.gps !== 0
				? `<li> GPS-трекинг: <span class="span-red"> ${new Intl.NumberFormat('ru-RU').format(
						this.gps.toFixed(0)
				  )} Р. </span>  </li>`
				: ''
		}
		</ul>
		`
				: ''
		}
		
		<p> Планируемый срок доставки: ${this.deliveryTime} суток. </p>
		<button class="btn btn-sm btn-getOffer" id="btn-getOffer"> ${
			!this.warehouseIsNeeded
				? 'Получить персональное предложение'
				: 'Получить персональное предложение и уточнить точку хранения'
		} </button>

		`;
	},
};
