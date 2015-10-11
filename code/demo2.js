




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

	
*/



//用户代理字符串
document.write(navigator.userAgent);



	
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
	
	//系统
	
	//核心检测程序区
	if (window.opera) {
		engine.opera = true;				//表示确定opera浏览器
		engine.ver = window.opera.version();
	}
	
	return {										//返回一个对象，可以同时返回引擎，浏览器和系统的对象
		engine : engine						//前一个engine是属性，后一个engine是对象值
	}
	
}();													//自我执行，并赋值


















