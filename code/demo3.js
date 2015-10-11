




/*
	能力检测
	var width = window.innerWidth;

	if (typeof width != 'number') {
		width = document.documentElement.clientWidth;
	}

	alert(width);

	
	//怪癖检测bug(缺陷)

	var box = {
		toString : function () {},			//IE的小 BUG
		toString2 : function () {}
	};


	for (var o in box) {
		alert(o);
	}

	
	//window对象支持opera属性
	//alert(window.opera);

	for (var o in window.opera) {
		document.write(o + '<br />'); 
	}
	
	alert(window.opera.version());	//opera浏览器的版本号
	
	if (client.engine.opera) {
		alert("目前使用的是Opera浏览器，版本为：" + client.engine.ver);
	}

	if (client.engine.webkit) {
		alert('WebKit引擎的版本为：' + client.engine.ver);
	}	
	
	if (client.engine.ie) {
		alert('ie引擎的版本为：' + client.engine.ver);
	}

	
*/



//用户代理字符串
document.write(navigator.userAgent);
document.write('<br />');
document.write(navigator.platform);


	
var client = function () {					//创建一个对象
	
	//引擎
	var engine = {
		ie : false,									//这个属性用于确定是否是IE引擎
		gecko : false,
		webkit : false,
		khtml : false,
		opera : false,
		
		//引擎的版本
		ver : 0
	};
	
	//浏览器
	var browser = {
		ie : false,
		firefox : false,
		chrome : false,
		safari : false,
		opera : false,
		
		//浏览器的版本号
		ver : 0,
		//浏览器通用名称
		name : ''
	};
	
	//系统
	var system = {
		win : false,
		mac : false,
		x11 : false,
		
		//系统名称
		sysname : ''
	};
	
	
	
	//核心检测程序区
	var ua = navigator.userAgent;
	var p = navigator.platform;
	
	if (p.indexOf('Win') == 0) {
		system.win = true;						//用于确定是windows系统
		system.sysname = 'Windows';
	} else if (p.indexOf('Mac') == 0) {
		system.mac = true;						//用于确定是Mac系统
		system.sysname = 'Macintosh';
	} else if (p == 'X11' || p.indexOf('Linux') == 0) {
		system.x11 = true;						//用于确定是Mac系统
		system.sysname = 'Linux';
	}
	
	
	if (window.opera) {
		engine.opera = browser.opera = true;				//表示确定opera引擎
		engine.ver = browser.ver = window.opera.version();
		browser.name = 'Opera';
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {
		engine.webkit = true;				//表示确定webkit引擎
		engine.ver = RegExp['$1'];
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.chrome = true;
			browser.ver = RegExp['$1'];
			browser.name = 'Chrome';
		} else {
			browser.safari = true;
			if (/Version\/(\S+)/.test(ua)) browser.ver = RegExp['$1'];
			browser.name = 'Safari';
		}
	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
		engine.gecko = true;				//表示确定gecko引擎
		engine.ver = RegExp['$1'];
		if (/Firefox\/(\S+)/.test(ua)) {
			browser.firefox = true;
			browser.ver = RegExp['$1'];
			browser.name = 'Firefox';
		}
	} else if (/MSIE ([^;]+)/.test(ua)) {
		engine.ie = browser.ie = true;						//表示确定ie引擎
		engine.ver = browser.ver = RegExp['$1'];
		browser.name = 'Internet Explorer';
	}
	
	return {										//返回一个对象，可以同时返回引擎，浏览器和系统的对象
		engine : engine,						//前一个engine是属性，后一个engine是对象值
		browser : browser,
		system : system
	}
	
}();													//自我执行，并赋值





alert(client.system.sysname + '|' +client.browser.name + client.browser.ver);













