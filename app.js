Ext.application({
    name: 'AppExample',
    controllers: ['Users', 'Types', 'Images'],
    appFolder: 'app',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    afterInit: function () {
        Ext.tip.QuickTipManager.init();
    }
});