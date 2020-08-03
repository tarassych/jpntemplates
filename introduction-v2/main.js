let collapse = document.querySelector(".introduction__collapse");

collapse.onclick = function (e) {
	if (e.target.classList.contains("introduction__toggler")) {
		e.target.classList.toggle("open");
	} else {
		e.target.parentNode.parentNode.classList.toggle("open");
	}
};