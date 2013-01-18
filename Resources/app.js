/****************************************************************************************
 * goIngenious Titanium Mobile Wrapper Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 *****************************************************************************************/

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

(function() {
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (osname === 'android') {
		Window = require('ui/handheld/android/ApplicationWindow');
	} else {
		Window = require('ui/handheld/ApplicationWindow');
	}
	
	var actIndicator = require('ui/common/global/ActIndicator');
	var btnNav 		 = require('ui/common/global/BtnNav');
	
	var appActIndicator = new actIndicator();
	var appWindow 		= new Window();
	var appBtnNavRight  = new btnNav({text:'Right',right:0,id:'btnNavRight'});
	var appBtnNavLeft   = new btnNav({text:'Left',left:0,id:'btnNavLeft'});
	
	appWindow.add( appBtnNavRight );
	appWindow.add( appBtnNavLeft );
	
	appWindow.add( appActIndicator );
	appWindow.open();
	appActIndicator.show();
	
	Ti.App.addEventListener('domAllLoaded', function(e){
		appActIndicator.hide();
	});
	
	// Web Developers can issue commands to control btnNav Elements
	Ti.App.addEventListener('command', function(e){
		switch(e.param){
			case "btnNavLeftHide":
				appBtnNavLeft.hide();
			break;
			
			case "btnNavRightHide":
				appBtnNavRight.hide();
			break;
			
			case "btnNavRightShow":
				appBtnNavRight.show();
			break;
			
			case "btnNavLeftShow":
				appBtnNavLeft.show();
			break;
			
			case "btnNavHideBoth":
				appBtnNavRight.hide();
				appBtnNavLeft.hide();
			break;
			
			case "btnNavShowBoth":
				appBtnNavRight.show();
				appBtnNavLeft.show();
			break;
		}
	});
	
	Ti.App.addEventListener('debugLog', function(e){
		alert('ok');
		//Ti.API.info(e.log);
	});	
})();
