let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	  document.documentElement.scrollHeight -
	  document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
	  scrollProgress.style.display = "grid";
	} else {
	  scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
	  document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#3F00FF ${scrollValue}%, #2f70e0 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;




window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
  
	loader.classList.add("loader--hidden");
  
	loader.addEventListener("transitionend", () => {
	  document.body.removeChild(loader);
	});
  });

  
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click" , ()=>{
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click", ()=>{
	hamburger.classList.remove("active");
	menu.classList.remove("active");
}
))

const myslide = document.querySelectorAll('.myslide');
dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 6000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 4000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


function validateForm(){
	let form = document.getElementById('form');
	let emri = document.getElementById('emri').value;
	let email = document.getElementById('email').value;
	let mesazhi = document.getElementById('message').value;
	let tel = document.getElementById('tel').value;
	let qyteti = document.getElementById('qyteti').value;
	let textEmail = document.getElementById('text-email');
	let textTel = document.getElementById('text-tel');
	let textQ = document.getElementById('text-qyteti');
	let textName = document.getElementById('text-name');
	let textMessage = document.getElementById('text-message');
	let formText = document.getElementById('form-text')
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if(emri != ""){
		form.classList.add("valid");
		form.classList.remove("invalid");
		textName.innerHTML = "";
	}if(emri ==""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textName.innerHTML = "Emri duhet te plotesohet";
		textName.style.color = "#ff0000"
	}
	if(email.match(pattern)){
		form.classList.add("valid");
		form.classList.remove("invalid");
		textEmail.innerHTML = "";
	}else{
		form.classList.remove("valid");
		form.classList.add("invalid");
		textEmail.innerHTML = "Enter a valid email address";
		textEmail.style.color = "#ff0000"
	}
	if(email == ""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textEmail.innerHTML = "Email duhet te plotesohet";
		textEmail.style.color = "#ff0000"
	}
	if(tel == ""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textTel.innerHTML = "Numri telefonit duhet te plotesohet";
		textTel.style.color = "#ff0000"
	}
	if(qyteti == ""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textQ.innerHTML = "Qyteti telefonit duhet te plotesohet";
		textQ.style.color = "#ff0000"
	}
	if(mesazhi != ""){
		form.classList.add("valid");
		form.classList.remove("invalid");
		textMessage.innerHTML = "";
	}if(mesazhi == ""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		textMessage.innerHTML = "Mesazhi duhet te plotesohet";
		textMessage.style.color = "#ff0000"
	}else{
		form.addEventListener('submit', (e) => {
		formText.innerHTML = "Faleminderit qe na kontaktuat!";
		formText.style.color = "#00ff00"
	})
	}
}