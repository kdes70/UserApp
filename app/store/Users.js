Ext.define('AppExample.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AppExample.model.User',
    autoLoad: true,
    autoSync: true,
    listeners: {
        load: function (store) {
            // load associations data
            store.each(function (user) {
                typeStore = Ext.getStore('Types');
                type = typeStore.getById(user.data.type_id);
                user.setType(type);
            })
        }
    }
});