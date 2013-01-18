(function(){
	//var AppBtnNavRoute = [];
	
	Ti.App.addEventListener('from:BtnNav', function(e){
		// This Event will be lost when changeRoute navigates to another view. Check with Android LogCat
		// Phone used in Android Xperia Play 2.3.4 
		Ti.API.info('Received Clicked Event : '+e.origin);
		changeRoute(e.origin);
	});

	function changeRoute(btnNavId) {
		switch(btnNavId) {
			case "btnNavRight":
				Ti.API.info('Changing Route');
				app.navigate('#welcome',{trigger:true});
			break;
			
			case "btnNavLeft":
				Ti.API.info('Changing Route');
				app.navigate('#last',{trigger:true});
			break;
		}
	}
})();
