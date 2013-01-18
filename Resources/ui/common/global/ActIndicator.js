function ActIndicator() {
	var self = Ti.UI.createActivityIndicator({
		message:' Loading...', 
		height:80, 
		width:'160dp' 
	});
	// ------------ Add behavior/Event for UI ------------------- //
	return self;
}

module.exports = ActIndicator;
