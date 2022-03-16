import { requestByCity, requestByTonnage, requestByTruckType } from './functions';
import { dataObj } from './dataObj';
import {
	selector_cityOnLoad,
	selector_cityOffLoad,
	btn_getResults,
	checkbox_insurance,
	checkbox_tracking,
	checkbox_warehouseIsNeeded,
} from './DOM';
import { setAlert } from './alert';

document.body.addEventListener('change', (e) => {
	if (e.target.id === 'select-city-onloading' || e.target.id === 'select-city-offloading') {
		requestByCity();
	}

	if (e.target.id === 'select-truck-transport-body') {
		requestByTruckType();
	}

	if (e.target.id === 'select-truck-transport-tonnage') {
		requestByTonnage();
	}
});

btn_getResults.addEventListener('click', () => {
	if (selector_cityOnLoad.value === selector_cityOffLoad.value) {
		setAlert('err-fillDetails', 'Города погрузки и выгрузки должны отличаться!');
	} else {
		dataObj.returnResult();
		dataObj.returnDeliveryTime();

		if (dataObj.result === 0) {
			setAlert('err-fillDetails', 'Сначала выберите основные опции!');
		} else {
			dataObj.printData();
		}
	}
});

checkbox_insurance.addEventListener('change', () => {
	dataObj.setInsurance();
});

checkbox_tracking.addEventListener('change', () => {
	dataObj.setGPS();
});

checkbox_warehouseIsNeeded.addEventListener('change', (e) => {
	dataObj.checkIfWarehouseIsNeeded(e.target.checked);
});
