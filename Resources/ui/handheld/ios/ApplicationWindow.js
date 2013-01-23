//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var webView = require('ui/common/WebView');
	var headerView = require('ui/common/HeaderView');
	var tabView = require('ui/common/TabView');
	
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
	
	//construct UI
	var webView = new webView();
	var headerView = new headerView();
	var tabView = new tabView();
	self.add( webView );
	self.add( headerView );
	self.add( tabView );
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
