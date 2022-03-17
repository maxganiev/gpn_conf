import { requestByCity, requestByTonnage, requestByTruckType } from './functions';
import { dataObj } from './dataObj';
import { selector_cityOnLoad, selector_cityOffLoad, checkbox_insurance, checkbox_tracking, checkbox_warehouseIsNeeded } from './DOM';
import { setAlert } from './alert';

document.body.addEventListener('change', (e) => {
	if (e.target.id === 'select-city-onloading' || e.target.id === 'select-city-offloading') {
		if (selector_cityOnLoad.value === selector_cityOffLoad.value) {
			setAlert('err-fillDetails', 'Города погрузки и выгрузки должны отличаться!');
			Array.from(e.target.children)[0].selected = true;
		} else {
			requestByCity();
		}
	}

	if (e.target.id === 'select-truck-transport-body') {
		requestByTruckType();
	}

	if (e.target.id === 'select-truck-transport-tonnage') {
		requestByTonnage();
	}
});

checkbox_insurance.addEventListener('change', () => {
	dataObj.setInsurance();
	dataObj.returnResult();
	dataObj.returnDeliveryTime();
	dataObj.printData();
});

checkbox_tracking.addEventListener('change', () => {
	dataObj.setGPS();
	dataObj.returnResult();
	dataObj.returnDeliveryTime();
	dataObj.printData();
});

checkbox_warehouseIsNeeded.addEventListener('change', (e) => {
	dataObj.checkIfWarehouseIsNeeded(e.target.checked);
	dataObj.returnResult();
	dataObj.returnDeliveryTime();
	dataObj.printData();
});
