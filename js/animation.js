var items = document.querySelectorAll(".item");
var titles = document.querySelectorAll(".text-item-name");
var images = document.querySelectorAll(".title-image");



for (let i=0; i < items.length; i++){
	items[i].addEventListener("mouseover", function(){
		// console.log("over aline");
		titles[i].classList.add("hover");
		images[i].classList.add("hover-animation");
	});
	
	items[i].addEventListener("mouseout", function(){
		// console.log("out aline");
		titles[i].classList.remove("hover");
		images[i].classList.remove("hover-animation");
	});
}


document.querySelector(".item-medee").addEventListener("mouseover", function(){
	console.log("I'm over medee");
	document.querySelector(".text-item-name-medee").classList.add("hover");
	document.querySelector(".title-medee").classList.add("hover-animation");
	document.querySelector(".bubble-1").classList.add("bubble-animation");
	document.querySelector(".bubble-2").classList.add("bubble-animation-1s");
	document.querySelector(".bubble-3").classList.add("bubble-animation-3s");
	document.querySelector(".medeeUI").classList.add("vibrate");

});

document.querySelector(".item-medee").addEventListener("mouseout", function(){
	document.querySelector(".text-item-name-medee").classList.remove("hover");
	document.querySelector(".title-medee").classList.remove("hover-animation");
	document.querySelector(".bubble-1").classList.remove("bubble-animation");
	document.querySelector(".bubble-2").classList.remove("bubble-animation-1s");
	document.querySelector(".bubble-3").classList.remove("bubble-animation-3s");
	document.querySelector(".medeeUI").classList.remove("vibrate");

})

items[0].addEventListener("mouseover", function(){
	document.querySelector(".gif").classList.add("visible");
	document.querySelector(".static").classList.add("invisible");

})

items[0].addEventListener("mouseout", function(){
	document.querySelector(".gif").classList.remove("visible");
	document.querySelector(".static").classList.remove("invisible");
})

items[1].addEventListener("mouseover", function(){
	document.querySelector("#l11").classList.add("l11");
	document.querySelector("#l12").classList.add("l12");
	document.querySelector("#l22").classList.add("l22");
	document.querySelector("#l13").classList.add("l13");
	document.querySelector("#l23").classList.add("l23");
	document.querySelector("#l14").classList.add("l14");
	document.querySelector("#l24").classList.add("l24");
})

items[1].addEventListener("mouseout", function(){
	document.querySelector("#l11").classList.remove("l11");
	document.querySelector("#l12").classList.remove("l12");
	document.querySelector("#l22").classList.remove("l22");
	document.querySelector("#l13").classList.remove("l13");
	document.querySelector("#l23").classList.remove("l23");
	document.querySelector("#l14").classList.remove("l14");
	document.querySelector("#l24").classList.remove("l24");
})