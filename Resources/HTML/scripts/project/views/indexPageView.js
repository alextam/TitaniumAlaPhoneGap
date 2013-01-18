IndexPageView = Backbone.View.extend({
        initialize: function(){
            //Do Nothing
        },
        events: {
            //Insert events here e.g. button id in template is #btnNav
            //"click #btnNav":"functionName"
        },
     	template:EJSHomeTemplate,
        navBarTemplate:EJSNavBarTemplate,

        render: function(){
            $(this.el).html(this.template.render());
            // This is how you pass in values to your template in json format.
            $(this.el).find('#navBarDiv').html(this.navBarTemplate.render( { title: 'Index' } ));
            return this;
        }

});