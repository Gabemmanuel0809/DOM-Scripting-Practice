import { vehicles } from './Fakedata/data.js';
import { TotalValue, lowStock, inStock } from './utils.js';
import { cheapProduct, rareProduct, noStock } from './utils.js';

let prods = document.querySelector("#products");
let button = document.querySelector("#btn");

button.addEventListener("click", function(event) {
	event.preventDefault();
	const selectedOption = document.querySelector('input[name="selection"]:checked');
	const option = selectedOption.value;
	
	if(option == "lowstk") {
		let lowStck = lowStock(vehicles);
		prods.innerHTML = lowStck.map(vehicles => `
		    <div class = "vehicleCard">
			  <h3><b>Low Stock</b></h3>
			  <p>Name:${vehicles.name} - Price:$${vehicles.price} - Quantity:${vehicles.quantity}</p>
			</div>
		`).join('');
	} else if(option == "instk") {
		let inStck = inStock(vehicles);
		prods.innerHTML = inStck.map(vehicles => `
		    <div class = "vehicleCard">
			  <h3><b>In-Stock</b></h3>
			  <p>Name:${vehicles.name} - Price:$${vehicles.price} - Quantity:${vehicles.quantity}</p>
			</div>
		`).join('');
	} else if(option == "nostk") {
		let none = noStock(vehicles);
		prods.innerHTML = none.map(vehicles => `
		    <div class = "vehicleCard">
			  <h3><b>Out of stock</b></h3>
			  <p>Name:${vehicles.name} - Price:$${vehicles.price} - Quantity:${vehicles.quantity}</p>
			</div>
		`).join('');
	} else if(option == "chProd") {
		let cheap = cheapProduct(vehicles);
		prods.innerHTML = cheap.map(vehicles => `
		    <div class = "vehicleCard">
			  <h3><b>Cheap Product</b></h3>
			  <p>Name:${vehicles.name} - Price:$${vehicles.price} - Quantity:${vehicles.quantity}</p>
			</div>
		`).join('');
	} else if(option == "rProd") {
		let rare = rareProduct(vehicles);
		prods.innerHTML = rare.map(vehicles => `
		    <div class = "vehicleCard">
			  <h3><b>Rare Product</b></h3>
			  <p>Name:${vehicles.name} - Price:$${vehicles.price} - Quantity:${vehicles.quantity}</p>
			</div>
		`).join('');
	} else if(option == "total") {
        let result = TotalValue(vehicles);
        prods.innerHTML = `Total Value: $${result}`;		
	} else {
		prods.innerHTML = "I dont know what you click lol";
	}
});