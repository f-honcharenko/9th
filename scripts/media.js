console.info('Загрузка файлa [media]');

// var audio = new Audio('media/background.m4a');
var player1 = document.getElementById('player1');
var range1 = document.getElementById('range1');
var save_controls;

player1.play();
player1.volume = range1.value/100;
// var vlume_count = range1.value;
// console.log(vlume_count);
// audio.volume();

range1.addEventListener('mousemove', function(event) {
	var vlume_count = range1.value;
	player1.volume = range1.value/100;

});



