var x = 0;
var main_state = 1;


// Task 3-1
function disp() {
	x++;
	document.getElementById("mcount").innerHTML = x;

}

// Task 3-2
function get_time() {


	/*var d = new Date();
	var z = document.getElementsByClassName("post-time");
	z[0].innerHTML = d;

	var text = document.getElementById("post_text").value;
	document.getElementsByClassName("post-content")[0].innerHTML = text;*/


	var ammount = document.getElementById("quantity").value;
	for (var i = 0;i < parseInt(ammount); i++) {
		var d = document.createElement("p");
		d.innerHTML = new Date();
		d.className = "post-time";
		var z = document.getElementById("posts");
		z.appendChild(d);


		var text_disp = document.createElement("p");
		var text = document.getElementById("post_text").value;
		text_disp.innerHTML = text;
		text_disp.className = "post-content";
		if (document.getElementById('Blue').checked) {
			text_disp.style.color = "Blue";

		}
		else if (document.getElementById('Red').checked) {
			text_disp.style.color = "Red";

		}
		z.appendChild(text_disp);
	}


	
	

 
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