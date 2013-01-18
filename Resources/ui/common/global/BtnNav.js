function BtnNav(arg) {
	var buttonText;
	var arguments = arg; 
	// Ti.API.info(arguments.text);
	if (arguments.text != null) {
		buttonText = arguments.text;
	} else {
		buttonText = "Ok";
	}
	 
	var self = Ti.UI.createButton({
		width:"80dip",
		height:"35dip",
		title:buttonText,
		font:{
			fontSize:'14dip',
			fontFamily:'Arial Rounded MT Bold', 
		},
		color:'#ffffff',
		top:"5dip",
		borderWidth: 2, 
		borderRadius: 6,
		backgroundImage:'none',
		backgroundColor:'#6699CC'
	});
	
	if (arguments.right != null) {
		self.right = arguments.right; 		
	} else {
		self.left = arguments.left;
	}
	
	if (arguments.id != null){
		self.id = arguments.id;
	}
	
	self.addEventListener('click', function(e){
		Ti.API.info('BtnNav is clicked');
		Ti.App.fireEvent('from:BtnNav',{origin:e.source.id});
	});
	
	
	return self;
}

module.exports = BtnNav;
