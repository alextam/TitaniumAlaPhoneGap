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
	
	Ti.App.addEventListener('initWebClient', function( e ){
		Ti.App.Properties.setInt( 'currentIndex', 0 );
		Ti.App.Properties.setList( 'navRoute', e.navRoute );
		//Ti.API.info(Ti.App.Properties.getList('navRoute'));	
		Ti.App.fireEvent('initNav');
	});
	
	Ti.App.addEventListener('initNav', function(e){
		Ti.API.info('navIsReady');
		Ti.App.addEventListener('from:BtnNav',function(e){
			switch(e.origin){
				case "btnNavLeft":
					var currentIndex = Ti.App.Properties.getInt('currentIndex');
					var navRoute = Ti.App.Properties.getList('navRoute');
					Ti.API.info("currentIndex : "+currentIndex);
					Ti.API.info("section : "+JSON.stringify(navRoute[currentIndex]));
					
					if (navRoute[currentIndex].btnNavLeft != null ){
						//self.url = String(navRoute[currentIndex].btnNavLeft); 
						self.evalJS('window.location="'+String(navRoute[currentIndex].btnNavLeft)+'"');
						if(currentIndex <= 0) {
							currentIndex = 0;
						} else {
							currentIndex--;
						}
						Ti.App.Properties.setInt('currentIndex', currentIndex);
					}
				break;
				case "btnNavRight":
					
					var currentIndex = Ti.App.Properties.getInt('currentIndex');
					var navRoute = Ti.App.Properties.getList('navRoute');
					Ti.API.info("currentIndex x : "+currentIndex);
					Ti.API.info("section x : "+JSON.stringify(navRoute[currentIndex]));
					
					if (navRoute[currentIndex].btnNavRight != null ){
						Ti.API.info('goto: ' + navRoute[currentIndex].btnNavRight);
						//self.url = String(navRoute[currentIndex].btnNavRight);
						self.evalJS('window.location="'+String(navRoute[currentIndex].btnNavRight)+'"');
						if(currentIndex > (navRoute.length - 1)) {
							currentIndex = (navRoute.length - 1);
						} else {
							currentIndex++;
						}
						Ti.App.Properties.setInt('currentIndex', currentIndex);									
					}
					
				break;
				
			}		
		});	
	});
	
	return self;
}

module.exports = WebView;
