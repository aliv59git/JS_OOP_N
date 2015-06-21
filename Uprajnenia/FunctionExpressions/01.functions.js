function sum(items) {
	var i,
		itemsSum;

	itemsSum = 0;
	for (i = 0; i < items.length; i += 1) {
		itemsSum += +items[i];
	}
	return itemsSum;
}


items = ['12', '5'];
console.log(sum(items));
console.log(sum(['1', '2']));