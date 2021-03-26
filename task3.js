var x = 0;

function disp() {
	x++;
	document.getElementById("mcount").innerHTML = x;

}

function get_time() {
	var d = new Date();
	var z = document.getElementsByClassName("post-time");
	z[0].innerHTML = d;
 
}
