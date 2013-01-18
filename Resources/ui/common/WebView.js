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
	});
	return self;
}

module.exports = WebView;
