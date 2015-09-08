window.onload = function (){

	var 
		blurExOne = document.getElementById('blurExOne'),
		blurExTwo = document.getElementById('blurExTwo'),
		dropExOne = document.getElementById('dropExOne');

	function init() {
		//initBlurExamples();
		initDSExamples();

		console.log('css: ' + JSON.stringify(document.styleSheets[0]));
	};

	function initBlurExamples() {
		TweenFilter.blur(blurExOne, 2, { blur: 10, delay: 2, onComplete: function(){
			console.log('Blur is complete.');
		}});

		TweenFilter.blur(blurExTwo, 1, { start: 10, blur: 0, delay: 2, ease: Bounce.easeIn })
	};

	function initDSExamples() {
		TweenFilter.dropShadow(dropExOne, 2, { offsetX: 10, offSetY: 10, blur: 0, color: '#cecece', onComplete: function(){
			console.log('Drop shadow is complete.')
		} })
	};

	init();
};