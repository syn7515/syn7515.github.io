var items = document.querySelectorAll(".item");
var titles = document.querySelectorAll(".text-item-name");
var images = document.querySelectorAll(".title-image");
var projects = document.querySelectorAll(".projectCard");
var projectTitle = document.querySelectorAll(".project-title");
var projects2 = document.querySelectorAll(".projectCard-2");

for (let i=0; i < projects.length-1; i++){
	projects[i].addEventListener("mouseover", function(){
		// projects[i].classList.add("shadow");
		// projects[i].classList.add("outline");
		// projectTitle[i].classList.add("hover");
	});
}

for (let i=0; i < projects.length-1; i++){
	projects[i].addEventListener("mouseout", function(){
		// projects[i].classList.remove("shadow");
		// projects[i].classList.remove("outline");
		// projectTitle[i].classList.remove("hover");
	});
}


for (let i=0; i < projects2.length; i++){
	projects2[i].addEventListener("mouseover", function(){
		// projects2[i].classList.add("shadow");
	});
}

for (let i=0; i < projects2.length; i++){
	projects2[i].addEventListener("mouseout", function(){
		// projects2[i].classList.remove("shadow");
	});
}



// for (let i=0; i < items.length; i++){
// 	items[i].addEventListener("mouseover", function(){
// 		titles[i].classList.add("hover");
// 		images[i].classList.add("hover-animation");
// 	});
	
// 	items[i].addEventListener("mouseout", function(){
// 		titles[i].classList.remove("hover");
// 		images[i].classList.remove("hover-animation");
// 	});
// }

// for (let i=0; i<icons.length; i++){
// 	icons[i].addEventListener("mouseover", function(){
// 		icons[i].classList.add("turn");
// 	});

// 	icons[i].addEventListener("mouseout", function(){
// 		icons[i].classList.remove("turn")
// 	});
// }


// document.querySelector(".item-medee").addEventListener("mouseover", function(){
// 	document.querySelector(".text-item-name-medee").classList.add("hover");
// 	document.querySelector(".title-medee").classList.add("hover-animation");
// 	document.querySelector(".bubble-1").classList.add("bubble-animation");
// 	document.querySelector(".bubble-2").classList.add("bubble-animation-1s");
// 	document.querySelector(".bubble-3").classList.add("bubble-animation-3s");
// 	document.querySelector(".medeeUI").classList.add("vibrate");

// });

// document.querySelector(".item-medee").addEventListener("mouseout", function(){
// 	document.querySelector(".text-item-name-medee").classList.remove("hover");
// 	document.querySelector(".title-medee").classList.remove("hover-animation");
// 	document.querySelector(".bubble-1").classList.remove("bubble-animation");
// 	document.querySelector(".bubble-2").classList.remove("bubble-animation-1s");
// 	document.querySelector(".bubble-3").classList.remove("bubble-animation-3s");
// 	document.querySelector(".medeeUI").classList.remove("vibrate");

// })

// items[1].addEventListener("mouseover", function(){
// 	document.querySelector(".gif").classList.add("visible");
// 	document.querySelector(".static").classList.add("invisible");

// })

// items[1].addEventListener("mouseout", function(){
// 	document.querySelector(".gif").classList.remove("visible");
// 	document.querySelector(".static").classList.remove("invisible");
// })

// items[0].addEventListener("mouseover", function(){
// 	document.querySelector("#a-l11").classList.add("l11");
// 	document.querySelector("#a-l12").classList.add("l12");
// 	document.querySelector("#a-l22").classList.add("l22");
// })

// items[0].addEventListener("mouseout", function(){
// 	document.querySelector("#a-l11").classList.remove("l11");
// 	document.querySelector("#a-l12").classList.remove("l12");
// 	document.querySelector("#a-l22").classList.remove("l22");
// })

// items[3].addEventListener("mouseover", function(){
// 	document.querySelector("#l11").classList.add("l11");
// 	document.querySelector("#l12").classList.add("l12");
// 	document.querySelector("#l22").classList.add("l22");
// 	document.querySelector("#l13").classList.add("l13");
// 	document.querySelector("#l23").classList.add("l23");
// 	document.querySelector("#l14").classList.add("l14");
// 	document.querySelector("#l24").classList.add("l24");
// })

// items[3].addEventListener("mouseout", function(){
// 	document.querySelector("#l11").classList.remove("l11");
// 	document.querySelector("#l12").classList.remove("l12");
// 	document.querySelector("#l22").classList.remove("l22");
// 	document.querySelector("#l13").classList.remove("l13");
// 	document.querySelector("#l23").classList.remove("l23");
// 	document.querySelector("#l14").classList.remove("l14");
// 	document.querySelector("#l24").classList.remove("l24");
// })