console.info('Загрузка файлa [printmachine]');
function printed_fun( el ){
	var text =document.getElementById('loc_stat01');
		i = 0,
		__print = function (){
			i++;
			if( i <= text.length ){
				el.innerHTML = text.substr(0, i);
				setTimeout( __print, 40 );
			}
		};
		__print();
};

function printed_king( el,tim ){
	var text = el.innerHTML,
		i = 0,
		__print = function (){
			i++;
			if( i <= text.length ){
				el.innerHTML = text.substr(0, i);
				setTimeout( __print, tim );
			}
		};
		__print();
};

function messeger_bg(text,time) {
	messger.textContent = text;
	printed_king(messger,time)
}
function messeger_q(text,time) {
	messger_q.textContent = text;
	printed_king(messger_q,time)
}




