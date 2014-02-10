Ext.define('AppExample.model.User', {
    extend: 'Ext.data.Model',
    idgen: 'sequential',
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
//        associationKey: 'types',
        foreignKey: 'type_id'
    }],
    proxy: {
        type: 'localstorage',
        id: 'users'
    }
});