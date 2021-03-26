var x = 0;

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
