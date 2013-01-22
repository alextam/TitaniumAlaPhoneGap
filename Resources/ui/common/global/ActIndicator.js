function ActIndicator() {
	var osname = Ti.Platform.osname;
	var isIos = (osname === 'iphone' || osname === 'ipad');
	var isAndroid = (osname === 'android');
	var ActivityIndicatorStyle;
	
	if (isIos) {
		ActivityIndicatorStyle = Titanium.UI.iPhone.ActivityIndicatorStyle.DARK;
	} else {
		ActivityIndicatorStyle = Titanium.UI.ActivityIndicatorStyle.PLAIN;
	}
	
	var self = Ti.UI.createActivityIndicator({
		message:' Loading...',
		style:ActivityIndicatorStyle,
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE 
	});
	// ------------ Add behavior/Event for UI ------------------- //
	return self;
}

module.exports = ActIndicator;
