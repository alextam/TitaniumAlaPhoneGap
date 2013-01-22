var app;
var AppRouter = Backbone.Router.extend({
    routes:{
        "":"home",
        "welcome":"welcome",
        "last":"last"
    },

    initialize:function () {
        // Handle back button throughout the Application
        var self = this; 
        this.firstPage = true;
    },
    
    home:function () {
        console.log('#home');
        this.changePage(new IndexPageView(),'home');
    },

    welcome:function(){
        console.log('#welcome');
        this.changePage(new WelcomePageView(),'welcome');
    },

    last: function(){
        console.log('#last');
        this.changePage(new LastPageView(),'last');
    },

    changePage:function (page,id) {
    	$(page.el).attr('data-role', 'page');
        $(page.el).attr('id', id+"Page");
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page.
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }

});

$(document).ready(function () {
   	app = new AppRouter();
   	Backbone.history.start();
   	TitaniumBridge.initRoute(); 
	
	/* 
	TEST Internal WebView Ajax
	 
    TitaniumBridge.ajax('http://localhost',{data:'text'}, onSuccess,onFail);
    function onSuccess(e){
        console.log('OK');
    }

    function onFail(){
        console.log('FAILED');
    }
    */
});