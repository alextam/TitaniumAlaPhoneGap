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
	 	Ti.App.fireEvent('initWebClient', {navRoute:AppBtnNavRoute});
	};
})();