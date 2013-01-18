function WebView() {
	
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
		
		/*
		var scriptTxt = "Ti.App.addEventListener('from:BtnNav', function(e){";
		scriptTxt += "alert('ok')";
		scriptTxt +=  "})";
		self.evalJS(scriptTxt);
		*/
	});
	
	self.addEventListener('from:BtnNav', function(e){
		self.evalJS('TitaniumBridge.changeRoute('+e.source.id+');')
	});
	return self;
}

module.exports = WebView;
