;(function(){
	"use strict";

	var size = prompt("Please enter the size of the board:", 8);
	var row = [];
	var odd, even;

	for (var i = 0; i < size; i++) {
		(i % 2 == 0) ? (odd = "#", even = " ") : (odd = " ", even = "#");
		for (var j = 0; j < size; j++) {
			row[j] = (j % 2 == 0) ? (odd) : (even);
		}
	// console.log(i);
	console.log(row);
	console.log("\n");
	}

})();
