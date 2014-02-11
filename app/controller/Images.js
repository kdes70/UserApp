Ext.define('AppExample.controller.Images', {
    extend: 'Ext.app.Controller',
    stores: ['Images'],
    views: ['Images'],
    refs: [{
        ref: 'ImageGrid',
        selector: 'images'
    }]
});