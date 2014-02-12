Ext.define('AppExample.util.TemplateLoader', {
    singleton : true,

    render: function(loader, response) {
        var target = loader.getTarget();
        var templateConfig = {};

        if ((target.templateConfig != null)) {
            templateConfig = targetComponent.templateConfig;
        }

        target.tpl = new Ext.XTemplate(response.responseText, templateConfig);
        target.refresh();
    }
});