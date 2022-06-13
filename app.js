// main header navbar open on click
function classToggle() {
	const navs = document.querySelectorAll('.navbar-links')

	navs.forEach(nav => nav.classList.add('navbar-links-active'));
}

document.querySelector('.toggle-buttons')
	.addEventListener('click', classToggle);

// drowdown open and close on click

function myfunction1() {
	document.getElementById("myDropdown").classList.toggle("show1");
	if (document.getElementById("myDropdown1").classList.contains("show1")) {
		document.getElementById("myDropdown1").classList.remove("show1");
	}
	if (document.getElementById("myDropdown2").classList.contains("show1")) {
		document.getElementById("myDropdown2").classList.remove("show1");
	}

}

function myfunction2() {
	document.getElementById("myDropdown1").classList.toggle("show1");
	if (document.getElementById("myDropdown").classList.contains("show1")) {
		document.getElementById("myDropdown").classList.remove("show1");
	}
	if (document.getElementById("myDropdown2").classList.contains("show1")) {
		document.getElementById("myDropdown2").classList.remove("show1");
	}

}

function myfunction3() {
	document.getElementById("myDropdown2").classList.toggle("show1");
	if (document.getElementById("myDropdown1").classList.contains("show1")) {
		document.getElementById("myDropdown1").classList.remove("show1");
	}
	if (document.getElementById("myDropdown").classList.contains("show1")) {
		document.getElementById("myDropdown").classList.remove("show1");
	}
}