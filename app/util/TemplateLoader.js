Ext.define('AppExample.util.TemplateLoader', {
    singleton : true,
    config: {},
    templates: [
        {name: 'image', url: "resources/templates/image.tpl"}
    ],

    constructor: function(config) {
        config = config || {};
        var loader = new Ext.ComponentLoader();
        var me = this;

        Ext.Array.forEach(this.templates, function(item) {
            console.log(item.name);
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