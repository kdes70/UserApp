Ext.define('AppExample.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users', 'Types'],
    views: ['Users'],
    refs: [
        {
            ref: 'UserGrid',
            selector: 'users'
        },
        {
            ref: 'UserImages',
            selector: 'images dataview'
        }
    ],
    selected: null,
    init: function () {
        this.control({
            'users': {
                select: this.selectUser
            },
            'users #addUser': {
                click: this.addUser
            },
            'users #deleteUser': {
                click: this.deleteUser
            }
        });
    },

    selectUser: function (grid, record) {
        var delBtn = this.getUserGrid().down('#deleteUser'),
            imageStore = record.images()
        ;
        this.getUsersStore().setActiveUser(record);
        this.getUserImages().bindStore(imageStore);
        delBtn.setDisabled(!record);
    },

    addUser: function () {
        var user = new AppExample.model.User(),
            edit = this.getUserGrid().getPlugin('cellediting')
        ;
        this.getUsersStore().add(user);
        edit.cancelEdit();
        edit.startEdit(user, 0);
    },

    deleteUser: function () {
        this.getUsersStore().removeUser();
    }
});