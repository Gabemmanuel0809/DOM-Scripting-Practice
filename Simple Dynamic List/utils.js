export function TotalValue(vehicles) {
	 let result = 0;
	 vehicles.forEach(vehicles => {
		result += vehicles.price * vehicles.quantity;
	 });
	 return result;
}

export function lowStock(vehicles) {
	return vehicles.filter(vehicle => vehicle.quantity <= 3 && vehicle.quantity != 0);
}

export function noStock(vehicles) {
	return vehicles.filter(vehicle => vehicle.quantity == 0);
}

export function inStock(vehicles) {
	return vehicles.filter(vehicle => vehicle.quantity >= 4);
}

export function cheapProduct(vehicles) {
	return vehicles.filter(vehicle => vehicle.price <= 80000);
}

export function rareProduct(vehicles) {
	return vehicles.filter(vehicle => vehicle.quantity == 1);
}
