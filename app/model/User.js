Ext.define('AppExample.model.User', {
    extend: 'Ext.data.Model',
    idgen: 'sequential',
    requires: 'AppExample.model.Type',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'type_id', type: 'int' }
    ],
    validations: [{
        type: 'length',
        field: 'name',
        min: 3
    }],
    belongsTo: [{
        name: 'type',
        instanceName:'type',
        model: 'AppExample.model.Type',
        getterName: 'getType',
        setterName: 'setType',
        foreignKey: 'type_id'
    }],
    proxy: {
        type: 'localstorage',
        id: 'users'
    }
});