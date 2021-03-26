var x = 0;
var main_state = 1;


// Task 3-1
function disp() {
	x++;
	document.getElementById("mcount").innerHTML = x;

}

// Task 3-2
function get_time() {



	var d = document.createElement("div");
	d.innerHTML = new Date();
	d.className = "post-time";
	var z = document.getElementById("posts");
	z.appendChild(d);


	/*  OLD CODE
	var date = document.createElement("div");
	var node = document.createTextNode("This is new.")
	date.appendChild = node;
	var d = new Date();
	date.innerHTML = d;
	date.setAttributes("class") =  "post-time";
	document.getElementById("posts").appendChild(date);
	*/


	var text_disp = document.createElement("div");
	var text = document.getElementById("post_text").value;
	text_disp.innerHTML = text;
	text_disp.className = "post-content";
	z.appendChild(text_disp);

 
}
// Task 3-3
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