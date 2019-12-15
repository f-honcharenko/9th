console.info('Загрузка файлa [locations]');


locations = {
///////////////////////////////////////////////////////////////////////////
	//DONE
loc1 : {
  actions:{///time задержка до віполнения деййсвтия. 9thsnow
    0:{type:'img', add:'media/blackwhite.gif' , time:2000,},
    1:{type:'img', add:'img/9thsnow.jpg' , time:1000,},
    2:{type:'black', add: null , time:2000, },
    3:{type:'img', add:'img/white.jpg' , time:0,},
    4:{type:'black', add: null , time:1000,},
    5:{type:'text_bc', add:'. . .' , time:2000, speed:200,},
    6:{type:'text_bc', add:'. . .' , time:2000, speed:200,},
    7:{type:'text_bc', add:'. . .' , time:2000, speed:200,},
    8:{type:'text_bc', add:'Скорее всего, у тебя сейчас все очень болит.' , time:4000, speed:80,},
    9:{type:'black', add: null , time:5000,},

    10:{type:'text_bc', add:'' , time:100, speed:80,},
    11:{type:'black', add: null , time:500,},
    12:{type:'img', add:'media/parachute.gif' , time:100,},
    13:{type:'black', add: null , time:3200,},
    14:{type:'img', add:'img/white.jpg' , time:0,},
    15:{type:'black', add: null , time:300,},
    16:{type:'text_bc', add:'Я слышу как ты стискиваешь зубы.' , time:1500, speed:80,},
    17:{type:'text_bc', add:'Можешь не  притворяться.' , time:4000, speed:80,},
    18:{type:'text_bc', add:'Здесь ты в безопасности.' , time:3500, speed:80,},
    19:{type:'black', add: null , time:3500,},

    20:{type:'text_bc', add:'' , time:0, speed:80,},
  	21:{type:'img', add:'media/sickman.gif' , time:1000,},
    22:{type:'black', add: null , time:0,},
    23:{type:'whiter', add: null , time:6100,},
    24:{type:'img', add:'img/man-sit.jpg' , time:300,},
    25:{type:'whiter', add: null , time:1500,},
    26:{type:'bg_1', add: null , time:1000,},
    27:{type:'text_q', add:'Я бы даже сказала, это самое безопасное место на свете.' , time:1500, speed:80,},
    28:{type:'black', add: null , time:5000,},
    29:{type:'bg_1', add: null , time:0,},
    30:{type:'text_q', add:'' , time:1500, speed:80,},

    31:{type:'img', add:'media/someone.gif' , time:300,},
    32:{type:'black', add: null , time:400,},
    33:{type:'black', add: null , time:6200,},
    34:{type:'img', add:'media/sad-blink.gif' , time:300,},
    35:{type:'black', add: null , time:400,},
   	36:{type:'bg_1', add: null , time:500,},
   	37:{type:'type_control', add: null , time:0,},
   	38:{type:'btns', add: null , time:500,},
  },
  btns:{
    0:{phraze:'КТО ТЫ?',link: 2,},//+
    1:{phraze:'КТО Я?',link: 3,},//+
    2:{phraze:'ГДЕ Я?',link: 4,},//+
  },
},
///////////////////////////////////////////////////////////////////////////
loc2 : {
	actions:{
   	0:{type:'controls_f', add: null , time:0,},
   	1:{type:'btns_h', add: null , time:0,},
    2:{type:'profile', add:null , time:1000,},
    3:{type:'text_q', add:'Кто ты такая?' , time:300, speed:80},
    4:{type:'text_q', add:'' , time:1500, speed:80},
    5:{type:'profile', add:null , time:1500,},
    6:{type:'img', add:'img/smile-blink.png' , time:500,},
    7:{type:'text_q', add:'Твоя сестра.' , time:1000, speed:80},
    8:{type:'img', add:'img/black-smile.png' , time:1000,},
    9:{type:'text_q', add:'Твоя мать.' , time:1000, speed:60},
    10:{type:'text_q', add:'Твоя дочь.' , time:1000, speed:60},
    11:{type:'text_q', add:'Твоя любовь.' , time:1000, speed:50},
    12:{type:'img', add:'img/black.jpg' , time:0,},
    13:{type:'text_q', add:'Твоя жизнь.' , time:1000, speed:50},
    14:{type:'text_q', add:'Твое будущее.' , time:1000, speed:50},
    15:{type:'text_q', add:'Твое прошлое.' , time:1000, speed:50},
    16:{type:'text_q', add:'Я — твое все.' , time:1000, speed:140},
    17:{type:'text_q', add:'Ты предналежишь только мне.' , time:2500, speed:80},
    18:{type:'text_q', add:'' , time:3000, speed:80},
   	19:{type:'btns', add: null , time:500,},
},
  btns:{
    0:{phraze:'Я НИКОМУ НЕ ПРЕДНАЛЕЖУ',link: 6,},//+
    1:{phraze:'Я НИКОМУ НЕ ПРЕДНАЛЕЖУ',link: 6,},//+
    2:{phraze:'Я НИКОМУ НЕ ПРЕДНАЛЕЖУ',link: 6,},//+
  },
},
///////////////////////////////////////////////////////////////////////////
	//DON
loc3 : {
	actions:{
   	0:{type:'btns_h', add: null , time:0,},
    1:{type:'profile', add:null , time:500,},
    2:{type:'text_q', add:'Кто я?' , time:1000, speed:60},
    3:{type:'text_q', add:'' , time:3000, speed:80},
    4:{type:'profile', add:null , time:1000,},
    5:{type:'img', add:'media/merry-blink.gif' , time:500,},
    6:{type:'text_q', add:'Ты?' , time:1000, speed:150},
    7:{type:'text_q', add:'' , time:3000, speed:80},
    8:{type:'black', add:null , time:200,},
    9:{type:'img', add:'media/fly.gif' , time:200,},
    10:{type:'black', add:null , time:0,},
    11:{type:'text_q', add:'Еще один пластилин в руках чужой мести.' , time:200, speed:60},
    12:{type:'text_q', add:'Еще один пленник чужой мечты.' , time:3000, speed:60},
    13:{type:'black', add:null , time:3500,},
    14:{type:'text_q', add:'' , time:3000, speed:60},
   	15:{type:'bg_1', add: null , time:500,},
    16:{type:'img', add:'media/merry-blink.gif' , time:200,},
    17:{type:'black', add:null , time:0,},
   	18:{type:'bg_1', add: null , time:500,},
    19:{type:'text_q', add:'Ты пытался научиться летать.' , time:200, speed:80},
    20:{type:'text_q', add:'Вместо этого тебе показали где падать.' , time:4500, speed:80},
    21:{type:'text_q', add:'' , time:5000, speed:80},
   	22:{type:'btns', add: null , time:500,},
   	
},
  btns:{
    0:{phraze:'КТО ТЫ?',link: 2,},//+
    1:{phraze:'КТО Я?',link: 3,},//+
    2:{phraze:'ГДЕ Я?',link: 4,},//+
  },
},
///////////////////////////////////////////////////////////////////////////
//DONE
loc4 : {
	actions:{
    0:{type:'profile_set', add:'profiles/GG-profile2.png' , time:500,},
	1:{type:'btns_h', add: null , time:0,},
    2:{type:'profile', add:null , time:500,},
    3:{type:'text_q', add:'Где я нахожусь?' , time:1000, speed:80},
    4:{type:'profile', add:null , time:2000,},
    5:{type:'text_q', add:'' , time:300, speed:80},
   	6:{type:'bg_1', add: null , time:0,},
    7:{type:'img', add:'img/smile-blink.png' , time:0,},
    8:{type:'img', add:'media/whereiam.gif' , time:2000,},
    9:{type:'img', add:'img/black.jpg' , time:3200,},
   	10:{type:'bg_1', add: null , time:0,},
    11:{type:'text_q', add:'В самом свободном месте.' , time:1000, speed:80},
    12:{type:'text_q', add:'В месте выбора.' , time:3000, speed:80},
    13:{type:'text_q', add:'И я предлагаю выбрать смерть.' , time:2000, speed:80},
    14:{type:'text_q', add:'' , time:3500, speed:80},
   	15:{type:'btns', add: null , time:500,},

},
  btns:{
    0:{phraze:'Я НЕ ХОЧУ УМИРАТЬ',link: 7,},//+
    1:{phraze:'РАЗВЕ ЭТО ВЫБОР?',link: 7,},//+
    2:{phraze:'С УДОВОЛЬСИВЕМ',link: 7,},//+
  },
},
///////////////////////////////////////////////////////////////////////////
//DONE
loc6 : {
	actions:{
   	0:{type:'btns_h', add: null , time:0,},
    1:{type:'profile', add:null , time:500,},
    2:{type:'text_q', add:'Я никому не прин-' , time:1000, speed:80},
    3:{type:'text_q', add:'' , time:1500, speed:80},
    4:{type:'profile', add:null , time:0,},
    5:{type:'img', add:'media/imnotyour.gif' , time:500,},
    6:{type:'text_q', add:'Посмотри на свой баласт.' , time:1000, speed:60},
    7:{type:'text_q', add:'На свое спасение.' , time:2000, speed:60},
    8:{type:'text_q', add:'На свою жизнь во время войны.' , time:2000, speed:60},
    9:{type:'text_q', add:'' , time:2000, speed:60},
    10:{type:'img', add:'media/merry-blink.gif' , time:0,},
    11:{type:'text_q', add:'Чтобы выжить — нужно раскрыть свой парашют.' , time:1000, speed:60},
    12:{type:'text_q', add:'Я тебе скажу, чтобы выжить — нужно не летать на самолетах и не убивать других парашютистов.' , time:4500, speed:60},
    13:{type:'text_q', add:'' , time:6000, speed:60},
   	14:{type:'btns', add: null , time:500,},
   	},
  btns:{
    0:{phraze:'КТО ТЫ?',link: 2,},//+
    1:{phraze:'КТО Я?',link: 3,},//+
    2:{phraze:'ГДЕ Я?',link: 4,},//+
  },
},
///////////////////////////////////////////////////////////////////////////
//DONE
loc7 : {
	actions:{
   	0:{type:'btns_h', add: null , time:0,},
    1:{type:'img', add:'img/black-smile.png' , time:500,},
    2:{type:'text_q', add:'Ты уже умер.' , time:1500, speed:60},
    3:{type:'text_q', add:'Теперь тебе нечего терять.' , time:2000, speed:60},
    4:{type:'text_q', add:'' , time:2000, speed:80},
    5:{type:'img', add:'img/black.jpg' , time:0,},
    6:{type:'profile_set', add:'profiles/GG-profile3.png' , time:0,},
    7:{type:'profile', add:null , time:0,},
    8:{type:'text_q', add:'Это чистилище?' , time:500, speed:80},
    9:{type:'text_q', add:'' , time:2000, speed:80},
    10:{type:'profile', add:null , time:0,},
    11:{type:'img', add:'img/black-smile.png' , time:500,},
    12:{type:'text_q', add:'Это полет кота с девятого этажа.' , time:300, speed:70},
    13:{type:'img', add:'media/lonely.gif' , time:2000,},
    14:{type:'text_q', add:'Тебя хотят вернуть к жизни с таким же желанием, с какмим желают смерти.' , time:500, speed:50},
    15:{type:'text_q', add:'Оставайся со мной.' , time:5000, speed:140},
    16:{type:'img', add:'img/black.jpg' , time:2500,},
    17:{type:'text_q', add:'Мне было одиноко без тебя.' , time:1000, speed:110},
    18:{type:'text_q', add:'' , time:4000, speed:110},
   	19:{type:'btns', add: null , time:500,},

},
  btns:{
    0:{phraze:'Я НЕ МОГУ',link: 8,},//+
    1:{phraze:'ХОРОШО',link: 8,},//-
    2:{phraze:'МНЕ НУЖНО ПОДУМАТЬ',link: 8,},//-
  },
},
///////////////////////////////////////////////////////////////////////////
//DONE
loc8 : {
	actions:{
   	0:{type:'btns_h', add: null , time:0,},
    1:{type:'profile_set', add:'profiles/GG-profile3.png' , time:0,},
    2:{type:'profile', add:null , time:0,},
    3:{type:'text_q', add:'Я не могу.' , time:500, speed:100},
    4:{type:'text_q', add:'' , time:2500, speed:60},
    5:{type:'profile', add:null , time:0,},
   	6:{type:'bg_1', add: null , time:0,},
    7:{type:'img', add:'media/sad-blink.gif' , time:500,},
   	8:{type:'bg_1', add: null , time:300,},
    9:{type:'text_q', add:'. . .' , time:500, speed:160},
    10:{type:'text_q', add:'Посмотри направо.' , time:1500, speed:100},
    11:{type:'whiter', add:null , time:2000,},
    12:{type:'text_q', add:'' , time:300, speed:10},
    13:{type:'img', add:'img/home1.png' , time:300,},
    14:{type:'whiter', add:null , time:2000,},
    15:{type:'text_q', add:'Там стоит твой дом.' , time:1500, speed:100},
    16:{type:'img', add:'img/home2.png' , time:1700,},
    17:{type:'text_q', add:'Там тебя ждет твоя семья.' , time:1500, speed:100},
    18:{type:'img', add:'img/home3.png' , time:1000,},
    19:{type:'text_q', add:'Они были живы, пока такой же как ты не сбросил на этот дом свою бомбу.' , time:2000, speed:70},
    20:{type:'black', add:null , time:5000,},
    21:{type:'text_q', add:'' , time:300, speed:80},
    22:{type:'img', add:'media/door.gif' , time:500,},
    23:{type:'black', add:null , time:500,},
    24:{type:'text_q', add:'А теперь посмотри на лево.' , time:700, speed:100},
    25:{type:'text_q', add:'Пройдя через эту дверь, ты вернешся обратно.' , time:3000, speed:90},
    26:{type:'black', add:null , time:5000,},
    27:{type:'img', add:'img/black.jpg' , time:500,},
    28:{type:'text_q', add:'' , time:700, speed:300},
    29:{type:'black', add:null , time:1000,},
    30:{type:'text_q', add:'Как я и сказала, выбор за тобой.' , time:300, speed:90},
    31:{type:'text_q', add:'' , time:3000, speed:90},
   	32:{type:'btns', add: null , time:500,},
},
  btns:{
    0:{phraze:'ПОЙТИ К ДОМУ',link: 9,},//+
    1:{phraze:'ПОЙТИ К ДВЕРИ',link: 9,},//+
    2:{phraze:'',link: 9,},//+
  },
},
///////////////////////////////////////////////////////////////////////////
//DONE
loc9 : {
	actions:{
   	0:{type:'bigger', add: 'Выбора нет' , time:1,},
   	1:{type:'btns_h', add: null , time:500,},
    2:{type:'text_bc', add:'' , time:2000, speed:1,},
    3:{type:'text_q', add:'Ты встаешь.' , time:300, speed:170},
    4:{type:'text_q', add:'Ты тащишь за собой свой парашют.' , time:3000, speed:130},
    5:{type:'img', add:'img/goaway.png' , time:2000,},
    6:{type:'text_q', add:'Ты не имеешь права на жизнь.' , time:3000, speed:170},
    7:{type:'img', add:'media/door.gif' , time:3500,},
    8:{type:'img', add:'img/goaway.png' , time:500,},
    9:{type:'img', add:'media/door.gif' , time:250,},
    10:{type:'text_q', add:'Имеешь ли ты право на смерть?' , time:1000, speed:150},
    11:{type:'img', add:'img/goaway.png' , time:500,},
    12:{type:'img', add:'media/door.gif' , time:750,},
    13:{type:'img', add:'img/goaway.png' , time:500,},
    14:{type:'img', add:'media/door.gif' , time:750,},
    15:{type:'img', add:'img/goaway.png' , time:250,},
    16:{type:'img', add:'media/door.gif' , time:500,},
    17:{type:'img', add:'img/goaway.png' , time:750,},
    18:{type:'img', add:'media/door.gif' , time:500,},
    19:{type:'img', add:'img/goaway.png' , time:750,},
    20:{type:'black', add:null , time:3000,},
    21:{type:'img', add:'img/black.jpg' , time:500,},
    22:{type:'text_q', add:'' , time:100, speed:150},
    23:{type:'black', add:null , time:300,},
   	24:{type:'btns', add: null , time:500,},

},
  btns:{
    0:{phraze:'ПРОДОЛЖИТЬ',link: 'end',},//+
    1:{phraze:'',link: 'end',},//+
    2:{phraze:'',link: 'end',},//+
  },
},
///////////////////////////////////////////////////////////////////////////
//ENDLOCATION
locend : {
	actions:{
    0:{type:'black', add:null , time:3000,},
   	1:{type:'reload', add: '' , time:1000,},


},
},
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//DEBUGER-HUB
locpromo : {
  actions:{///time задержка до віполнения деййсвтия. 9thsnow
    // 0:{type:'type_control', add: null , time:0,},
    0:{type:'btns', add: null , time:1000,},
    1:{type:'text_q', add:'Куда ты пойдешь?' , time:1, speed:100},
    2:{type:'text_q', add:'' , time:2500, speed:100},
    3:{type:'btns', add: null , time:500,},
},
  btns:{
    0:{phraze:'Налево',link: 2,},
    1:{phraze:'Нправо',link: 7,},
    2:{phraze:'Прямо',link: 8,},
  },
},
///////////////////////////////////////////////////////////////////////////

// console.log(locations);
















///////////////////////////////////////////////////////////////////////////
//DEBUGER-HUB
loc0 : {
  actions:{///time задержка до віполнения деййсвтия. 9thsnow
    0:{type:'type_control', add: null , time:0,},
    1:{type:'bg_1', add: null , time:500,},
    2:{type:'btns', add: null , time:500,},
},
  btns:{
    0:{phraze:'loc2',link: 2,},
    1:{phraze:'loc7',link: 7,},
    2:{phraze:'loc8',link: 8,},
  },
},
///////////////////////////////////////////////////////////////////////////
};
// console.log(locations);
