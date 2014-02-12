Ext.application({
    name: 'AppExample',
    controllers: ['Users', 'Types', 'Images'],
    appFolder: 'app',
    requires: 'AppExample.util.TemplateLoader',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    init: function () {
//        AppExample.util.TemplateLoader.init();
    }
});