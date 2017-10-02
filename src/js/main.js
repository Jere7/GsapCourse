
		// jQuery
// (function($) {			

// 	var header = $('#header'),  
// 			h1 = $("h1"),  
// 			intro = $(".intro"),  
// 			firstItem = $("li:first-child"),  
// 			secondItem = $("li:nth-child(2)"), 
// 			lastItem = $("li:last-child");  
	
		// JavaScript did not need a function declaration

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
// })(jQuery);

// (function($) {		

// 	var img = $ ('img');
// 		h1 = $ ("h1");
// 		intro = $(".intro");  
// 		list = $(".list");
// 		h2 = $("h2");
// 		i = 0;

		// firstItem = $("li:first-child"),  
		// secondItem = $("li:nth-child(2)"), 
		// lastItem = $("li:last-child");  

	// TweenLite.from(h1, 1,{autoAlpha: 0});
	// TweenLite.from(img, 1, {
	// 	x: -200,
	// 	ease:Power2.easeInOut
	// });	

	// TweenLite.from(intro, 4, {autoAlpha: 1});
	// TweenLite.from(list, 3, {autoAlpha: 0});

	// TweenLite.to(h1, 2,{autoAlpha: 0, x: 200, delay: 2, ease:Power1.easeInOut,
	// 	onStart: onStart,
	// 	onUpdate: onUpdate,
	// 	onComplete: onComplete
	// });
	
	//  function onStart() {
	// 	 console.log("Animation Started");
	//  }

	//  function onUpdate() {
	// 	//  console.log("Animation is in Progress!");
	// 	h2.text(i++);
	//  }

	//  function onComplete() {
	// 	 console.log("Animation Complete");
	//  }

	// TweenLite.from(img, 1, {autoAlpha: 1} );

	// DIFFERENCE BETWEEN META AND autoAlpha

			// CHECH BOTH

// EXAMPLE BELOW WITH A SIMPLE TWEEN 
	// TweenLite.from(h1, 2,{autoAlpha: 2, x: 200 , delay: 2});


// EXAMPLE FOR TIMELINELITE.MIN.JS CDNJS

	(function($) {		
		
			var img = $ ("img"),
				h1 = $ ("h1"),
				intro = $(".intro"),  
				list = $(".list"),
				h2 = $("h2"),
				tl = new TimelineLite();
				

			tl
				  .from(h2, .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut })
				  .from(h1, .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut })
				  .from(intro, .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut })
				  .from(list, .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut })
				  .from(img, .3, { y: -15, autoAlpha: 0, ease:Power1.easeOut });

						
}(jQuery));

	
	
				


							






