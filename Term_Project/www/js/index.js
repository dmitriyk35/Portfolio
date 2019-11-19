function getNumber(id) {
	return parseInt(document.getElementById(id).value);
}

function calculate() {
	document.getElementById('results').value = getNumber('number1') / getNumber('number2');
}