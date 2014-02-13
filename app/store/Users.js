Ext.define('AppExample.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AppExample.model.User',
    autoLoad: true,
    autoSync: true,
    activeUser: null,

    listeners: {
        // todo: implement lazy-loading approach?
        load: function (store) {
            // load associations data
            store.each(function (user) {
                var typeStore = Ext.getStore('Types'),
                    type = typeStore.getById(user.get('type_id'))
                ;
                user.setType(type);
            });
        }
    },

    setActiveUser: function(user) {
        this.activeUser = user;
    },

    getActiveUser: function() {
        return this.activeUser;
    },

    removeUser: function(user) {
        var userToRemove = user || this.activeUser;
        if (userToRemove) {
            this.remove(userToRemove);
        }
    }

});