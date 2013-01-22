IndexPageView = Backbone.View.extend({
        initialize: function(){
            //Do Nothing
         },
        events: {
            //Insert events here e.g. button id in template is #btnNav
            //"click #btnNav":"functionName"
            "click #getCam": "callGetCamera"
        },
     	template:EJSHomeTemplate,
        navBarTemplate:EJSNavBarTemplate,
        callGetCamera: function(){
            TitaniumBridge.getCamera(this,this.getCameraData);
        },
        getCameraData: function(data){
            alert("getCamera: "+data);
        },
        render: function(){
            $(this.el).html(this.template.render());
            // This is how you pass in values to your template in json format.
            $(this.el).find('#navBarDiv').html(this.navBarTemplate.render( { title: 'Index' } ));
            return this;
        }

});