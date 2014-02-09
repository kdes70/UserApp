Ext.application({
    name: 'AppExample',
    stores: ['Types', 'Users'],
    controllers: ['Users', 'Types'], //,'Images'
//    views: ['Users'],

    appFolder: 'app',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true
});