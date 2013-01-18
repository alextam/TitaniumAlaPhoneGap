function HeaderView() {
	var self = Ti.UI.createView({
		color:'#000000',
		height:'45dip',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		width:'auto',
		backgroundColor:'#000000',
		top:0
	});
	
	var label = Ti.UI.createLabel({
		font: { 
			fontSize:'15dip',
			fontFamily:'Arial Rounded MT Bold', 
		},
		shadowColor: '#aaa',
  		shadowOffset: {x:0, y:-1},
		color:'#ffffff',
		text:"App Name",
		height:'auto',
		width:'auto'
	});
	
	self.add(label);
	
	// ------------ Add behavior/Event for UI ------------------- //
	return self;
}

module.exports = HeaderView;
