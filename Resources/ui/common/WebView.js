function WebView() {
	
	var self = Ti.UI.createWebView({
		url : '/HTML/index.html',
		height:'auto',
		width:'auto',
		enableZoomControls : false,
		bottom:"45dip",
		top:"45dip"
	});
	
	var JSString = "Ti.App.addEventListener('from:BtnNav', function(e){ TitaniumBridge.changeRoute(e.origin) });";
	self.addEventListener('load', function(e){
		Ti.App.fireEvent('domAllLoaded');
		self.evalJS(JSString);
	});
	
	return self;
}

module.exports = WebView;
