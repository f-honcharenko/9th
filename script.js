console.info('Загрузка файлa [script]');

setTimeout(function(){
	btn_2();
	controls = true;
	change_loc(1);//start = 1 //hub = 0
},1000);//start = 1000

var controls = false;
var button_id_cor = 0;
var type_control = 'right';

document.addEventListener('keydown', function(event) {//Ивент на кн.вверх
  if (event.code == 'ArrowDown') {
  	if (controls==true) {
  		if (button_id_cor>1) {button_id_cor=2}else{button_id_cor++;}
  		console.log('Текущая кнопка:'+button_id_cor);
  			if (type_control == 'right') {
  				var btns = document.getElementsByClassName('menu-right-btns');
  				// console.log(btns);
				btns[0].classList.remove('active_btn_2');
				btns[1].classList.remove('active_btn_2');
				btns[2].classList.remove('active_btn_2');
				btns[button_id_cor].classList.add('active_btn_2');
  			}
  			if (type_control == 'main') {
  				var btns = document.getElementsByClassName('menu-cetntral-btns');
  				console.log(btns);
				btns[0].classList.remove('active_btn_1');
				btns[1].classList.remove('active_btn_1');
				btns[2].classList.remove('active_btn_1');
				btns[button_id_cor].classList.add('active_btn_1');
  			}
	
  	}
  }
});
document.addEventListener('keydown', function(event) {//Ивент на кн.вниз
  if (event.code == 'ArrowUp') {
  	if (controls==true) {
  		if (button_id_cor<1) {button_id_cor=0}else{button_id_cor--;}
  		console.log('Текущая кнопка:'+button_id_cor);
  		if (type_control == 'right') {
  				var btns = document.getElementsByClassName('menu-right-btns');
  				// console.log(btns);
				btns[0].classList.remove('active_btn_2');
				btns[1].classList.remove('active_btn_2');
				btns[2].classList.remove('active_btn_2');
				btns[button_id_cor].classList.add('active_btn_2');
  			}
  		if (type_control == 'main') {
  				var btns = document.getElementsByClassName('menu-cetntral-btns');
  				// console.log(btns);
  				console.log(btns);
				btns[0].classList.remove('active_btn_1');
				btns[1].classList.remove('active_btn_1');
				btns[2].classList.remove('active_btn_1');
				btns[button_id_cor].classList.add('active_btn_1');
  			}
  	}
  }
});
document.addEventListener('keydown', function(event) {
  				var btns = document.getElementsByClassName('menu-right-btns');
  if (event.code == 'Enter') {
  	if (controls==true) {
  		// console.log('Enter pressed');
  		if (type_control == 'right') {
  		switch(button_id_cor){
			case 0://0
				controls =false;
							console.log('Клавиатура: '+controls);

				btns[0].classList.remove('active_btn_2');
				console.log('START NEW GAME');
				document.getElementById("btn_r_0").style = "animation: coloring 0.46s linear 0s 4     alternate";
				setTimeout(btn_2,1850);
				controls = false;
				test_start();
			break;
			case 1://1
				controls =false;
				btns[1].classList.remove('active_btn_2');
				document.getElementById("btn_r_1").style = "animation: coloring 0.46s linear 0s 4     alternate";
				setTimeout(btn_2,1850);
				console.log('RESUME GAME');
				continue_();
				
			break;
			case 2://2
				controls =true;
				// btns[2].classList.remove('active_btn_2');
				// document.getElementById("btn_r_2").style = "animation: coloring 0.46s linear 0s 4     alternate";
				// setTimeout(btn_2,1850);
				console.log('HELP');
				slidebar2();
			break;
		}
  }
}
  if (type_control == 'main') {
  		console.log('Кнопка ведет на локацию: '+locations[now_local_id].btns[button_id_cor].link);
  		change_loc(locations[now_local_id].btns[button_id_cor].link);
  		controls = false;
  		test_start();
  }
}
});

function change_loc(_id){//Изменяет ид локации, в которой "стоит" пользователь локально, и в ЛС.
	now_local_id ='loc'+ _id;
	localStorage['id']='loc'+_id;
	console.log('Текущая локация - '+now_local_id);
}

function test_start(argument) {
	
	var act_length = Object.keys(locations[now_local_id].actions).length;
	// console.log(act_length);
	var time_count = 1000;
	var test_div = document.getElementById('id-tester');
	var textbox= document.getElementById('main-image-text_q-background-style');
	console.log('Кол-во действий: ' + act_length);
	for (var i = 0; i <act_length; i++) {
		// console.log(i);
		switch(locations[now_local_id].actions[i].type){
			case 'text_bc'://Текст Большй Центральный
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Вывод текста на [text_b]: '+locations[now_local_id].actions[i].add );
							messeger_bg(locations[now_local_id].actions[i].add,locations[now_local_id].actions[i].speed);
						},time_count);
				},0,i)
			break;
			case 'text_q'://Текст Вопрос
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Вывод текста на [text_q]: '+locations[now_local_id].actions[i].add );
							messeger_q(locations[now_local_id].actions[i].add,locations[now_local_id].actions[i].speed);
							// console.log(time_count);
							// test_div.innerHTML = '<div id="id-tester"><i>'+locations[now_local_id].actions[i].add+'</i></div>';
						},time_count);
				},0,i)

			break;
			case 'img'://Изменение Фона
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Смена изображения-фона');
							img_setter(i);
						},time_count);
				},0,i)
			break;
			case 'profile_set'://Изменение GG-profile
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Смена изображения-профиля');
							profile_setter(i);
						},time_count);
				},0,i)
			break;
			case 'black'://Затемнение
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Затемнение(blacker)');
							blacker();

						},time_count);
				},0,i)

			break;
			case 'whiter'://Затемнение(Белое)
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Затемнение(whiter)');
							whiter();
						},time_count);
				},0,i)
			break;
			case 'bg_1'://Баграунд1
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Проявление БГ_1');
							bg_1();
						},time_count);
				},0,i)
			break;
			case 'type_control'://Изменеие менбшки
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Переключение управления на ср. меню');
								type_control = 'main';//Режим меню.

						},time_count);
				},0,i)
			break;
			case 'profile'://!GG-prfile
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							// console.log(time_count);
								profile();//Режим меню.
								console.log('[log] Профильное изображение - '+profile_flag);

						},time_count);
				},0,i)
			break;
			case 'btns'://Проявление кнопок + корекция содержимого 
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Проявление кнопок');
							btn_main_setter();
							button_id_cor = 0;
							controls = true;
							console.log('Клавиатура: '+controls);

							btn_1();
						},time_count);
				},0,i)
				
			break;
			case 'controls_f'://keyboard = false 
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							controls = false;
							console.log('[log] !Клавиатура'+i);
						},time_count);
				},0,i)
				
			break;
			case 'bigger'://Изменеие стилей Див_Бг 
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
						var bg_q = document.getElementById('main-image-text_bc-content');
							bg_q.style = "color:#f00; font-size: xxx-large; animation: blink 0.46s linear 0s 8     alternate";
							messeger_bg(locations[now_local_id].actions[i].add,locations[now_local_id].actions[i].speed);
						
						},time_count);
				},0,i)
				
			break;
			case 'btns_h'://hide кнопок 
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('[log] Исчезновение кнопок');
							btn_1();
							controls = false;
							console.log('Клавиатура: '+controls);
						},time_count);
				},0,i)
				
			break;
			case 'reload'://hide кнопок 
				setTimeout(function(i){
					time_count=time_count+locations[now_local_id].actions[i].time;
						setTimeout(function(){
							console.log('GAME END');
							document.location.reload(true);
						},time_count);
				},0,i)
				
			break;
		}
	}
	// console.log(time_count);
}

// var evnetFlag = true;;
// var evnetCount = -1;

 
// document.addEventListener('keydown', function(event) {
//   if (event.code == 'Enter') {
//   	if (evnetFlag==true) {
//   		evnetCount++;
//   		console.log(evnetCount);
//   		evnetFlag=false;
//   	}
//   }
// });


var bg_1flag = false; //done
function bg_1(argument) {
	var bg_q = document.getElementById('main-image-text_q-background');
	if (bg_1flag==true){
		bg_q.style.opacity  = "0.0";
		bg_1flag = false;
	}else{
		bg_q.style.opacity  = "1.0";
		bg_1flag = true;
	}
}

var messger = document.getElementById('main-image-text_bc-content');
var messger_q = document.getElementById('main-image-text_q-background-style');

var bg_2flag = true; //done
function bg_2(argument) {
	var bg_q = document.getElementById('main-image-text_bc-content');
	if (bg_2flag==true){
		bg_q.style.opacity  = "0.0";
		bg_2flag = false;
	}else{
		bg_q.style.opacity  = "1.0";
		bg_2flag = true;
	}
}

var btn_1flag = false; //done
function btn_1(argument) {
	var bg_q = document.getElementById('menu-content-cetntral');
	if (btn_1flag==true){
		bg_q.style.opacity  = "0.0";
		btn_1flag = false;
	}else{
		bg_q.style.opacity  = "1.0";
		btn_1flag = true;
	}
}

var btn_2flag = false; //done
function btn_2(argument) {
	var bg_q = document.getElementById('menu-content-right');
	if (btn_2flag==true){
		bg_q.style.opacity  = "0.0";
		btn_2flag = false;
	}else{
		bg_q.style.opacity  = "1.0";
		btn_2flag = true;
	}
}
function btn_main_setter(){//Не знаю почему, но через классы не получается, пусть буде через ид-шник.
	var btn0 = document.getElementById('btn_m_0');
	var btn1 = document.getElementById('btn_m_1');
	var btn2 = document.getElementById('btn_m_2');
	btn0.innerHTML=locations[now_local_id].btns[0].phraze;
	btn1.innerHTML=locations[now_local_id].btns[1].phraze;
	btn2.innerHTML=locations[now_local_id].btns[2].phraze;
}
// function btn_main_setter_for_options(){//Не знаю почему, но через классы не получается, пусть буде через ид-шник.
// 	var btn0 = document.getElementById('btn_m_0');
// 	var btn1 = document.getElementById('btn_m_1');
// 	var btn2 = document.getElementById('btn_m_2');
// 	btn0.innerHTML='Громкость :'+'<input type="range" id="range1"></div>';
// 	btn1.innerHTML=locations[now_local_id].btns[1].phraze;
// 	btn2.innerHTML=locations[now_local_id].btns[2].phraze;
// }
function img_setter(index) {
	var img = document.getElementById('main-content-image-element');
	img.src=locations[now_local_id].actions[index].add;
}
function profile_setter(index) {
	var img = document.getElementById('main-content-image-profile');
	img.src=locations[now_local_id].actions[index].add;
}
var profile_flag = false;
function profile(argument) {
	var bg_q = document.getElementById('main-content-image-profile');
	if (profile_flag==true){
		bg_q.style = "opacity: 0.0";
		profile_flag = false;
	}else{
		bg_q.style = "opacity: 1.0";
		profile_flag = true;
	}
}

var black_flag = false;
function blacker(argument) {
	var bg_q = document.getElementById('main-content-blacker');
	if (black_flag==true){
		bg_q.style = "background-color: none";
		black_flag = false;
	}else{
		bg_q.style = "background-color: black";
		black_flag = true;
	}
}

function whiter(argument) {
	var bg_q = document.getElementById('main-content-blacker');
	if (black_flag==true){
		bg_q.style = "background-color: none";
		black_flag = false;
	}else{
		bg_q.style = "background-color: white";
		black_flag = true;
	}
}

var slidebar_flag = false;
function open_slidebar(){
	var el = document.getElementById('options-2');
	el.style="transform: translateX(-300px);";
	setTimeout(function(){
		el.style="transform: translateX(-300px); z-index:10000;";
	},300);
}
function close_slidebar(){
	var el = document.getElementById('options-2');
	el.style="z-index:-10000; transform: translateX(0px);";
}
function slidebar(){
	if (slidebar_flag==false) {
		open_slidebar();
		slidebar_flag= !slidebar_flag;
	}else{
		close_slidebar();
		slidebar_flag= !slidebar_flag;
	}
}

var slidebar2_flag = false;
function open_slidebar2(){
	var el = document.getElementById('options-3');
	el.style="transform: translateX(300px);";
	setTimeout(function(){
		el.style="transform: translateX(300px); z-index:10000;";
	},300);
}
function close_slidebar2(){
	var el = document.getElementById('options-3');
	el.style="z-index:-10000; transform: translateX(0px);";
}
function slidebar2(){
	if (slidebar2_flag==false) {
		open_slidebar2();
		slidebar2_flag= !slidebar2_flag;
	}else{
		close_slidebar2();
		slidebar2_flag= !slidebar2_flag;
	}
}

document.addEventListener('keydown', function(event) {//Ивент на Escape
   if (event.code == 'Escape') {
    slidebar();
}});

function gowaway(){
	var ch_beta_loc = document.getElementById('goinloca').value;
	close_slidebar();
	slidebar_flag=!slidebar_flag;
	change_loc(ch_beta_loc);
	test_start();
	type_control = 'main';

	bg_1();
	btn_1();
	btn_2();
}

function continue_(){

	change_loc(localStorage["save"]);
	test_start();
	type_control = 'main';

	bg_1();
	btn_1();
	// btn_2();
}
function saver01(){
	
	localStorage["save"]=now_local_id.slice(3);
	alert('Ближайшая точка выход сохранена');
}