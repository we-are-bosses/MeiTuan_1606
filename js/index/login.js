function my$(id) {
    return document.getElementById(id);
}
// s
my$("meilogin").onclick = function(){
	my$("meilogin").style.borderBottom = "4px solid #06C1AE";
	my$("phologin").style.borderBottom = "none";
	my$("bd1").style.display = "block";
	my$("bd2").style.display = "none";
	my$("btn1").style.display = "block";
	my$("btn2").style.display = "none";
}

my$("phologin").onclick = function(){
	my$("phologin").style.borderBottom = "4px solid #06C1AE";
	my$("meilogin").style.borderBottom = "none";
	my$("bd2").style.display = "block";
	my$("bd1").style.display = "none";
	my$("btn2").style.display = "block";
	my$("btn1").style.display = "none";
}

my$("header-nav").onclick = function(){
	if(my$("nav").style.display == "none"){
		my$("nav").style.display = "block";
	}
	else{
		my$("nav").style.display = "none";
	}
}