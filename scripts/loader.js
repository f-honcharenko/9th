console.info('Загрузка файлa [loader]');

var now_local_id;

if ((localStorage['id']==null)) {
	console.log('LS пуст.');
	console.log('Установка базового занчения.');
	localStorage['id']='0';
}
	else{
		if (localStorage['id']!='0') {
	console.log('Найдено сохранение ['+localStorage['id']+']');
	console.log('Запрос на выемку из LS.');
	var result = confirm("Найдено сохранение. Желаеете загрузить?");
		if (result==true) {
			now_local_id ='loc' +  JSON.parse(localStorage['id']);
			console.log('Произведена выемка');
		}else{
			localStorage['id']='0';
			now_local_id ='loc' +  JSON.parse(localStorage['id']);
			console.log('Отказ. Установка базового занчения.');
		}
	}else{
		console.log('Значение LS: [0]');
		now_local_id ='loc' + JSON.parse(localStorage['id']);

	}
};

console.log('Текущее значение вне LS: ['+now_local_id+']');

// if ((localStorage['machineType']!=null)) {
// 	machineType=localStorage['machineType'];
// }else{
// 	localStorage['machineType'] =machineType;
// }