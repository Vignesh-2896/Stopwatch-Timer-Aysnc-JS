let started = false;
let timer = 0;
let interval;

function toggler() {
	if (!started) {
		started = true;
		interval = setInterval(function () {
			timer = timer + 0.01;
			document.getElementById("cur_time").innerHTML = timer.toFixed(2);
		}, 10);
	}
	else if (started) {
		started = false;
		clearInterval(interval);
	}
}
function reset_time() {
	started = false;
	clearInterval(interval);
	timer = 0.00;
	document.getElementById("cur_time").innerHTML = timer;

	let past_element = document.getElementById("past_list")
	while (past_element.firstChild)
		past_element.removeChild(past_element.firstChild);
}
function recorder() {
	let li = document.createElement("li");
	li.innerHTML = timer.toFixed(2);
	document.getElementById("past_list").appendChild(li);
}
document.addEventListener('keypress', function (event) {
	let key_val = event.key;
	if (key_val == 's') {
		toggler();
	}
	else if (key_val == 'r') {
		reset_time();
	}
	else if (key_val == 't') {
		recorder();
	}
	else {
		alert("Please use the following keys : \n s - Start/Stop , r - Reset , t - Record Time");
	}
});