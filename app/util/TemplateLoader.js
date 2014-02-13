Ext.define('AppExample.util.TemplateLoader', {
    singleton : true,
    config: {},
    templates: [
        {name: 'image', url: "resources/templates/image.tpl"}
    ],

    constructor: function() {
        var me = this,
            loader = new Ext.ComponentLoader()
        ;

        Ext.Array.forEach(this.templates, function(item) {
            loader.load({
                url: item.url,
                renderer: function(loader, response) {
                    var template =  new Ext.XTemplate(response.responseText);
                    me.setTemplate(item.name, template);
                    return true;
                }
            });
        });

        return this;
    },

    setTemplate: function(name, template) {
        this.config[name] = template;
    },

    getTemplate: function(name) {
        return this.config[name] || '';
    }
});