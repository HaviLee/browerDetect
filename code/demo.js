






/*
	navigator对象是window对象下的
	alert(window.navigator);
	alert(navigator.appName);			//浏览器的名称，这个属性不能精确的取到浏览器的名称
	alert(navigator.userAgent);			//用户代理字符串，表示浏览器信息的东西
	alert(navigator.platform);			//操作系统,平台
	
	alert(BrowserDetect.browser);		//浏览器的名称
	alert(BrowserDetect.version);		//浏览器的版本
	alert(BrowserDetect.OS);			//所在的系统

	//给IE7一下的浏览器做特殊处理
	if (BrowserDetect.browser == 'Internet Explorer' && BrowserDetect.version < 7) {
		alert('需要做IE低版本的兼容！');
	}


//插件检测

for (var i = 0; i < navigator.plugins.length; i ++) {
	document.write('插件名：' + navigator.plugins[i].name + '<br />');
	document.write('文件名：' + navigator.plugins[i].filename + '<br />');
	document.write('描　述：' + navigator.plugins[i].description + '<br />');
	document.write('<br />');
}

//检测非IE浏览器插件是否存在

function hasPlugin(name) {
	var name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i ++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}


alert(hasPlugin('Flash'));


//检测IE浏览器的控件
function hasIEPlugin(name) {
	try {													//这里叫做尝试着去执行一段代码，如果有误，就去执行catch
		new ActiveXObject(name)			//这里的name必须是控件的唯一标识符ID
		return true;									//如果new 成功了，没有产生错误，那么就不去执行catch
	} catch (e) {
		return false;								//如果new 失败了，就执行catch里面的语句
	}
}


alert(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'));


//跨浏览器检测Flash是否存在

function hasPlugin(name) {
	var name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i ++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}


function hasIEPlugin(name) {
	try {													
		new ActiveXObject(name)		
		return true;								
	} catch (e) {
		return false;								
	}
}


function hasFlash() {
	//首先，先去检测非IE的浏览器
	var result = hasPlugin('Flash');			//如果返回true，说明检测到了，并且不是IE浏览器
	if (!result) {										//如果没有检测到，说明这个浏览器没有flash插件，或者它可能是IE浏览器
		result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
	}
	return result;
}

alert(hasFlash());


*/



//mime类型

//遍历非IE 下所有MIME 类型信息
for (var i = 0; i < navigator.mimeTypes.length; i++) {
	if (navigator.mimeTypes[i].enabledPlugin != null) {
	document.write('<dl>');
	document.write('<dd>类型名称：' + navigator.mimeTypes[i].type + '</dd>');
	document.write('<dd>类型引用：' + navigator.mimeTypes[i].enabledPlugin.name +'</dd>');
	document.write('<dd>类型描述：' + navigator.mimeTypes[i].description + '</dd>');
	document.write('<dd>类型后缀：' + navigator.mimeTypes[i].suffixes + '</dd>');
	document.write('</dl>')
	}
}

















