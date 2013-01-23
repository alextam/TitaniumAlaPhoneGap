/****************************************************************************************
 * goIngenious Titanium Mobile Wrapper Window Application Template:
 * A basic starting point for your application. 
 * 
 *****************************************************************************************/

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	//Bootstrap to avoid older sdk from compiling.
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
		Window = require('ui/handheld/ios/ApplicationWindow');
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
	
	// Web Developers can issue fireEvent commands to control stuff
	Ti.App.addEventListener('exec', function(e){
		switch(e.param){
			case "navControlUpdate":
				navControlUpdate(e.index);
			break;
			
			case "debugLog":
				Ti.API.info(e.log);	
			break;
			
			case "getCamera":
				/*
				 * Ti.Media.showCamera
				Titanium.Media.showCamera({
				    success:function(event){
				        var cropRect = event.cropRect;
				        var image    = event.media;
				 		var imgString = Ti.Utils.base64encode(image.toString());
				       	Ti.App.fireEvent('sendToWebView',{param:imgString,callback:e.callback});
				    },
				    cancel:function(){
				 		// Do Nothing
				    },
				    error:function(error){
				        // create alert
				        var alertMsg = Titanium.UI.createAlertDialog({title:'Camera'});
				        if (error.code == Titanium.Media.NO_CAMERA){
				            alertMsg.setMessage('Device does not have video recording capabilities');
				        }else{
				            alertMsg.setMessage('Unexpected error: ' + error.code);
				        }
				        alertMsg.show();
				    },
				    allowEditing:true
				});
				*/
			break;
			
			case "getGPS":
				Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
				Titanium.Geolocation.distanceFilter = 10;
 
				Titanium.Geolocation.getCurrentPosition(function(e){
				    if (e.error)
				    {
				        console.log('HFL cannot get your current location');
				        return;
				    }
				 	/*
				    var longitude = e.coords.longitude;
				    var latitude = e.coords.latitude;
				    var altitude = e.coords.altitude;
				    var heading = e.coords.heading;
				    var accuracy = e.coords.accuracy;
				    var speed = e.coords.speed;
				    var timestamp = e.coords.timestamp;
				    var altitudeAccuracy = e.coords.altitudeAccuracy;
				    */
				    var returnedResult = JSON.stringify(e.coords);
				 	Ti.App.fireEvent('sendToWebView',{param:returnedResult,callback:e.callback});
				    
				});
			break;
		}
	});
	
	function navControlUpdate (param){
		//Reads properties settings and update navControlButtons.
		var AppNavRoute = Ti.App.Properties.getList('navRoute');
		if (AppNavRoute[param].btnNavLeft == null){
			appBtnNavLeft.hide();	
		} else {
			appBtnNavLeft.show();
		}
		
		if (AppNavRoute[param].btnNavRight == null){
			appBtnNavRight.hide();	
		} else {
			appBtnNavRight.show();
		}
	}
})();
