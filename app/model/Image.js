Ext.define('AppExample.model.Image', {
    extend: 'Ext.data.Model',
    idgen: 'sequential',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'src', type: 'string' }
    ],
    proxy: {
        type: 'localstorage',
        id: 'images'
    }
});