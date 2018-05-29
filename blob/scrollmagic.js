//init controller
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene ({
	duration: 100, //the scene starts after a scroll distance of 100px
	offset: 50 //start this scene after scrolling for 50px
	})
	.setPin("#sticky-element") //pins the element for the scenes duration
	.addTo(controller); //assign the scene to the controller

