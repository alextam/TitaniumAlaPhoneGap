var TitaniumBridge = {};

(function(){
	TitaniumBridge.initRoute = function (){
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
		if(typeof Ti != 'undefined') {
			Ti.App.fireEvent('initWebClient', {navRoute:AppBtnNavRoute});
		}
	 	
	};

	TitaniumBridge.ajax = function(url , payLoad, callBackSuccessFunc, callBackFailFunc){
				// Conduct JSON ajax to destination. 
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
})();