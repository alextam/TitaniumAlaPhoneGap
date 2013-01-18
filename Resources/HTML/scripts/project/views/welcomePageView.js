WelcomePageView = Backbone.View.extend({
        initialize: function(){
            //Do Nothing
         },
        events: {
            'click #specialButton':'testEvent'
        },
     	template:EJSWelcomeTemplate,
        navBarTemplate:EJSNavBarTemplate,
        testEvent: function(e){
            alert('Event Trigger Successful');
            Ti.App.fireEvent('debugLog');
        },
        render: function(){
            $(this.el).html(this.template.render());
            // This is how you pass in values to your template in json format.
            $(this.el).find('#navBarDiv').html(this.navBarTemplate.render( { title: 'Welcome' } ));
            return this;
        }

});