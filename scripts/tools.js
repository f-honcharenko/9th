console.info('Загрузка файлa [tools]');

var machineType;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   machineType = 'mobile';
}else{machineType = 'computer'};
console.log('machineType : '+machineType);

setTimeout(function(){
					// document.getElementById('machineType').innerHTML ='<div id="machineType">'+machineType+'</div>';
	},100);
function machineType_change(argument) {
	if (machineType=='mobile'){
		machineType='computer';
		localStorage['machineType'] ='computer';
	}else{
		machineType='mobile';
		localStorage['machineType'] ='mobile';
	};
	location.href=location.href;
}
