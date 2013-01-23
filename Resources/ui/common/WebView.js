function WebView() {
	var firstTime = true; 
	var self = Ti.UI.createWebView({
		url : '/HTML/index.html',
		height:'auto',
		width:'auto',
		enableZoomControls : false,
		bottom:"45dip",
		top:"45dip"
	});
	
	self.addEventListener('load', function(e){
		Ti.App.fireEvent('domAllLoaded');
	});
	
	Ti.App.addEventListener('deviceReady', function( e ){
		Ti.App.Properties.setInt( 'currentIndex', 0 );
		Ti.App.Properties.setList( 'navRoute', e.navRoute );
		Ti.App.fireEvent('initNav');
	});
	
	Ti.App.addEventListener('sendToWebView', function(e){
		// All object must be stringify before fireEvent starts
		var payLoad = String(e.param);
		self.evalJS('TitaniumBridge.receiveCallBack('+payLoad+')');
	});
	
	Ti.App.addEventListener('initNav', function(e){
		Ti.API.info( 'navIsReady' );
		Ti.App.fireEvent('exec', {param:'navControlUpdate',index:0} );
		Ti.App.addEventListener('from:BtnNav',function(e){
			switch(e.origin){
				case "btnNavLeft":
					var currentIndex = Ti.App.Properties.getInt('currentIndex');
					var navRoute = Ti.App.Properties.getList('navRoute');
					
					if (navRoute[currentIndex].btnNavLeft != null ){
						self.evalJS('window.location="'+String(navRoute[currentIndex].btnNavLeft)+'"');
						if(currentIndex <= 0) {
							currentIndex = 0;
						} else {
							currentIndex--;
						}
						Ti.App.Properties.setInt('currentIndex', currentIndex);
						Ti.App.fireEvent('exec', {param:'navControlUpdate',index:currentIndex} );
					}
				break;
				case "btnNavRight":
					var currentIndex = Ti.App.Properties.getInt('currentIndex');
					var navRoute = Ti.App.Properties.getList('navRoute');
					
					if (navRoute[currentIndex].btnNavRight != null ){
						self.evalJS('window.location="'+String(navRoute[currentIndex].btnNavRight)+'"');
						if(currentIndex > (navRoute.length - 1)) {
							currentIndex = (navRoute.length - 1);
						} else {
							currentIndex++;
						}
						Ti.App.Properties.setInt('currentIndex', currentIndex);
						Ti.App.fireEvent('exec', {param:'navControlUpdate',index:currentIndex} );									
					}
				break;
				
			}		
		});	
	});
	
	return self;
}

module.exports = WebView;
