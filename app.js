Ext.application({
    name: 'AppExample',
//    stores: ['Types', 'Users', 'Images'],
    controllers: ['Users', 'Types', 'Images'],
    appFolder: 'app',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true
});