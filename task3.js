var x = 0;
var main_state = 1;

function disp() {
	x++;
	document.getElementById("mcount").innerHTML = x;

}

function get_time() {
	var d = new Date();
	var z = document.getElementsByClassName("post-time");
	z[0].innerHTML = d;

	var text = document.getElementById("post_text").value;
	document.getElementsByClassName("post-content")[0].innerHTML = text;

 
}
function hide_main() {
	if (main_state == 1) {
		document.getElementById("main").style.display = "none";
		document.getElementById("menu").style.display = "";
		main_state = 0;
	}
	else if (main_state == 0) {
		document.getElementById("main").style.display = "";
		document.getElementById("menu").style.display = "none";

		main_state = 1;
	}
}