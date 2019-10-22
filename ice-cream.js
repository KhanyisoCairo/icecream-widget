function FactoryIceCream() {
	var iceCream = [];
	var Vanilla = 0;
	var Chocolate = 0;
	var Strawberry = 0;
	var PlainCone = 0;
	var SugarCone = 0
	var papercup = 0;

	function addflavour(flavor, container, topping) {
		const flavorobj = {
			flavor,
			container,
			topping
		};

		iceCream.push(flavorobj);

	}
	function getIce() {
		return iceCream;
	}

	function culculatePrice(getPrice) {

		switch (getPrice) {
			case "vanilla":
				return Vanilla += 20;

			case "Chocolate":
				return Chocolate += 18;

			case "Strawberry":
				return Strawberry += 15;

			case "PlainCone":
				return PlainCone += 11;

			case "SugarCone":
				return SugarCone += 13;

			case "papercup":
				return papercup += 17;

			default:
				return;
		}

	}
	function getValues() {

		let total = 0;

		for (var i = 0; i < iceCream.length; i++) {
			if (iceCream[i].flavor === "Vanilla") {
				total = 20;
			}
			else if (iceCream[i].flavor === "Chocolate") {
				total += 18;
			}
			else if (iceCream[i].flavor === "Strawberry") {
				total += 15;
			}
		}
		return total;
	}

	function getContaner() {

		let total = 0;

		for (var i = 0; i < iceCream.length; i++) {


			if (iceCream[i].container === "PlainCone") {
				total += 11;
			}
			else if (iceCream[i].container === "SugarCone") {
				total += 13;
			}
			else if (iceCream[i].container === "papercup") {
				total += 17;
			}

		}
		return total;

	}
	function getTopping() {

		let total = 0;
		console.log('toppping');

		for (var i = 0; i < iceCream.length; i++) {
			var top = iceCream[i].topping;
			console.log(iceCream[i]);
			console.log(iceCream[i].topping);

			top.forEach(function (x) {

				if (x === "Crumbed peanuts") {
					total += 3;
				}
				else if (x === "Caramal dip") {

					total += 5;
				}
				else if (x === "Chocolate Dip") {

					total += 7;
				}
				else if (x === "Smarties") {

					total += 9;
				}
				else if (x === "Oreos") {

					total += 8;
				}
				else if (x === "Astros") {

					total += 10;
				}

			})
		}

		return total;
	}

	function getAllPrice() {

		return getTopping() + getContaner() + getValues();

	}

	return {
		addflavour,
		getIce,
		culculatePrice,
		getValues,
		getContaner,
		getTopping,
		getAllPrice
	}
}