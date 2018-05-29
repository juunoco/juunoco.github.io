$(document).ready(function() {
	$('.progress-bar').waypoint(function() {
		//updateValues();
		$('.progress-bar').css({
		animation: "animate-positive 3s",
		opacity: "1"
		});
	}, { offset: '75%' }); //height from top of viewpoint to trigger animation


	//delayreveal until scroled here
	$('#reveal-div').waypoint(function(){
		$('#s1').addClass('front');
		$('#s2').addClass('back');
		$('#s3').addClass('side');
	});

	//background color changing
	var $target = $('.wrapper');
	inView('.b-section, transition-div').on('enter', function(el){
		//console.log("section entered");
	  var color = $(el).attr('data-background-color');
	  //TODO, buggy, so removed
	  //updateColors(color);
	});
	// inView('.transition-div').on('exit', function(el){
	// 	console.log("section exited");
	//   var color = $(el).attr('data-background-color');
	//   updateColors(color);
	// });

	//for detecting the very top
	// $(function() {
	//    $(window).scroll(function () {
	//       // if ($(this).scrollTop() > 50) {
	//       //    $('body, div, section').addClass('changeToTransition');
	//       //    $('body, div, section').removeClass('changeToNormal');
	//       // }
	//       //if ($(this).scrollTop() < 200) {
	//       	console.log("less");
	//          //$('body, div, section').addClass('changeToNormal');
	//          //$('body, div, section').removeClass('changeToTransition');
	//          updateColors("normal");
	//       //}
	//    });
	// });


	//scroll reveal library
	window.sr = ScrollReveal({ reset: true});
	sr.reveal('.scroll-reveal', { duration: 500, scale: 0.75, afterReveal: function (element) { splitReveal(); }  });
});


	function updateColors(color){	
		if (color == "transition") {
			if($(window).scrollTop() > 1){
				console.log("entered TRANSITION");
	        	$('body, div, section').not('.progress-bar, .progress, .progress-value').addClass('changeToTransition');
	        	$('body, div, section').not('.progress-bar, .progress, .progress-value').removeClass('changeToNormal');
	        	createTransitionBlobs();
	    	}
	    }
    	else if (color == "normal") {
    		console.log("entered NORMAL");
	        $('body, div, section').not('.progress-bar, .progress, .progress-value').addClass('changeToNormal');
	        $('body, div, section').not('.progress-bar, .progress, .progress-value').removeClass('changeToTransition');
	        clearAllTransitionBlobs();
	    }
	}
//reveal the screenshots when the scroll is approached
function splitReveal(){

}


function createTransitionBlobs(){
	//get the transition object
	var transitionDivs = document.getElementsByClassName('transition-div');
	console.log(transitionDivs.length);
	//add the row to each div
	for(var t = 0; t < transitionDivs.length; t++){
		var row = document.createElement('div');
		row.classList.add('row');
		transitionDivs[t].appendChild(row);

		for(var col = 0; col < 5; col++){
			var column = document.createElement("div");
			column.classList.add("col-sm-2");
			


			//create transition-blob in document,
			for(var i = 0; i < 20; i++){
				var blob = document.createElement("div");
				blob.classList.add('transition-blob');
				blob.classList.add('scroll-reveal');
				$(blob).css("background-color", getRandomBlobColor());
				$(blob).css("margin-top", getRandomNumber(75, 1));
				$(blob).css("margin-bottom", getRandomNumber(75, 1));
				$(blob).css("padding-bottom", getRandomNumber(50, 1));
				$(blob).css("margin-left", getRandomColumn());
				var rand = getRandomNumber(50, 55);
				//console.log(rand);
				$(blob).css("min-height", rand);
				column.appendChild(blob);
				
			}

			for(var s = 0; s < transitionDivs.length; s++){
				row.appendChild(column);
			}
		}
	}
	
	sr.reveal('.scroll-reveal', { duration: 500, scale: 0.75, afterReveal: function (element) { splitReveal(); }  });
}

function getRandomColumn(){
	var column = Math.floor(Math.random() * 3);
	switch(column){
		case 0: return '-2vw';
		case 1: return '0vw';
		default: return '2vw';
	}
}

function getRandomNumber(no, min){
	return Math.floor(Math.random() * no) + min; //returns a number between 0 and 9.
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomBlobColor(){
	var rand = Math.floor(Math.random() * 12);
	switch(rand){
		case 1: return '#CCCCCC';            //0
	    case 2 : return '#F26E51';          //1
	    case 3 : return '#F7AD41';   //2
	    case 4 : return '#F8D733';   //3
	    case 5 : return '#8AC76E';          //4
	    case 6 : return '#64C29E';    //5
	    case 7 : return '#54A1D8';           //6
	    case 8 : return '#737FBD';            //7
	    case 9 : return '#8F68AB';      //8
	    case 10 : return '#FBF5FA4';            //9
	    case 11 : return '#EE508C'; 
	}
	           //10
}

function clearAllTransitionBlobs(){
	var transitionDivs = document.getElementsByClassName('transition-div');
	for(var i = 0; i < transitionDivs.length; i++){
		var transitionDiv = transitionDivs[i];
		while(transitionDiv.firstChild){
			transitionDiv.removeChild(transitionDiv.firstChild);
		}
	}
}

/*
function updateValues(){
	//update progress value innerHTML as css animates
	var pv1 = document.getElementById('pv1'),
		pv2 = document.getElementById('pv2'),
		pv3 = document.getElementById('pv3'),
		pb1 = document.getElementById('pb1'),
		pb2 = document.getElementById('pb2'),
		pb3 = document.getElementById('pb3');

	var progressValueUpdate = setInterval(function(){
		console.log(pb1.style.width);
		pv1.innerHTML = pb1.style.width;

		pv2.innerHTML = pb2.style.width;
		pv3.innerHTML = pb3.style.width;

	}, 300);

	setTimeout(function(){
		clearInterval(progressValueUpdate);
	}, 3000);
}
*/