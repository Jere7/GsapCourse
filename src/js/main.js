
		// jQuery
	
// 	var header = $('#header'),  
// 			h1 = $("h1"),  
// 			intro = $(".intro"),  
// 			firstItem = $("li:first-child"),  
// 			secondItem = $("li:nth-child(2)"), 
// 			lastItem = $("li:last-child");  
	
		// JavaScript 

// 	// var header = document.getElementById('header'), 
// 	// 	h1 = document.getElementsByTagName("h1"),
// 	// 	intro = document.getElementsByClassName("intro"),
// 	// 	firstItem = document.getElementsByClassName("list")[0].firstElementChild,
// 	// 	secondItem = document.getElementsByClassName("list")[0].children[1],
// 	// 	lastItem = document.getElementsByClassName("list")[0].lastElementChild;
		


// 	TweenLite.to(header, 1, { opacity: 0, y: 50});
// 	TweenLite.to(h1, 1, { opacity: 0, x: 250});
// 	TweenLite.to(intro, 1, { opacity: 0, x: 250});
// 	TweenLite.to(firstItem, 1, { opacity: 0, x: 250});
// 	TweenLite.to(secondItem, 1, { opacity: 0, x: 250});



(function($) {

	// Simple Tween
	// Position the image to the center belong the top "Y"
	// TweenLite.from(img, 3, {width: 50, x: 200, y: -200 } )
	//  Add Scale Animation
	// TweenLite.from(img, 1,{ opacity: 5, scale: 25 });


	// left to right began in the "x" position set
	// TweenLite.from(img, 1, {x: -200});

	// right to left finish in the "x" position set
	// TweenLite.to(img, 1, {x: -200});
	

	// TweenLite.fromTo(img, 1, {x: -400},{x: 200});
	//  Also 
	// TweenLite.set(img, {x: 400});

		
	var img = $ ('img');
		h1 = $ ("h1");
		intro = $(".intro"),  
		list = $(".list");
		// firstItem = $("li:first-child"),  
		// secondItem = $("li:nth-child(2)"), 
		// lastItem = $("li:last-child");  

	TweenLite.from(h1, 1,{autoAlpha: 0});
	TweenLite.from(img, 1, {x: -200, ease:Power2.easeOut} );	

	// TweenLite.from(img, 1, {autoAlpha: 1} );
	TweenLite.from(h1, 2,{x: 200});
	
	TweenLite.from(intro, 4, {autoAlpha: 0});
	TweenLite.from(list, 3, {autoAlpha: 0});
	
})(jQuery);

				


							






