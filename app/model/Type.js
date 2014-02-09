Ext.define('AppExample.model.Type', {
    extend: 'Ext.data.Model',
    idgen: 'sequential',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'alias', type: 'string' }
    ],
    proxy: {
        type: 'localstorage',
        id: 'types'
    }
});