var TitaniumBridge = {};

(function(){
	TitaniumBridge.checkTi = function (){
		if(typeof Ti != 'undefined') {
 			return true;
		} else {
			console.log('Function running but need to compile with Titanium for function to work');
			return false;
		}
	}

	TitaniumBridge.initRoute = function (){
		// Use initWebClient to initiate handshake device Ready
		var AppBtnNavRoute = [
			{
				btnNavRight:"#welcome"
			},
			{
				btnNavLeft:"#",
				btnNavRight:"#last"
			},
			{
				btnNavLeft:"#welcome"
			}
		];
		
		if( TitaniumBridge.checkTi() ) {
			Ti.App.fireEvent('deviceReady', {navRoute:AppBtnNavRoute});
		}
	 	
	};

	TitaniumBridge.ajax = function(url , payLoad, callBackSuccessFunc, callBackFailFunc){
			// Conduct JSON AJAX to destination. 
			var connection = $.ajax({
			  	url:url,
			  	type:'GET',
			  	data:payLoad,
			  	timeout:3000,
			  	contentType:'application/json'
		 	});
		 	
		 	connection.done( function( response ) { 
				callBackSuccessFunc.call(this , response);
			});
			
			connection.fail( function( error ) { 
				callBackFailFunc.call(this , error);
			}); 
	};
	
	TitaniumBridge.getCamera = function(viewObj,callBack){
		if( TitaniumBridge.checkTi() ) {
			TitaniumBridge.receivedFunction = function(data){
				callBack.call(viewObj,data);
			};
			Ti.App.fireEvent('exec', {param:'getCamera'});
		} 
	};
	
	TitaniumBridge.getGPS = function(viewObj,callBack){
		if( TitaniumBridge.checkTi() ) {
			TitaniumBridge.receivedFunction = function(data){
				callBack.call(viewObj,data);
			};
			Ti.App.fireEvent('exec', {param:'getGPS'});
		} 
	};

	TitaniumBridge.sendComplexObject = function(object){
		if( TitaniumBridge.checkTi() ) {
			Ti.App.fireEvent('exec', {param:'sendComplexObject',data:object});
		}	
	};

	TitaniumBridge.receiveCallBack = function(data){
		TitaniumBridge.receivedFunction(data);
	};


	
})();