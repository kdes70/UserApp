Ext.define('AppExample.store.Images', {
    extend: 'Ext.data.Store',
    model: 'AppExample.model.Image',
    autoLoad: true,
    autosync: true
});