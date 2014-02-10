Ext.define('AppExample.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AppExample.model.User',
    autoLoad: true,
    autoSync: true,
    listeners: {
        load: function(me, records) {

            console.log(me, records);
        }
    }
});