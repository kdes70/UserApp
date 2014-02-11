Ext.define('AppExample.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users', 'Types'],
    views: ['Users'],
    refs: [
        {
            ref: 'UserGrid',
            selector: 'users'
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
        this.selected = record;
        var delBtn = this.getUserGrid().down('#deleteUser');
        delBtn.setDisabled(!record);
    },

    addUser: function () {
        var user = new AppExample.model.User();
        this.getUsersStore().add(user);
        var edit = this.getUserGrid().getPlugin('cellediting');
        edit.cancelEdit();
        edit.startEdit(user, 0);
    },

    deleteUser: function () {
        if (this.selected) {
            this.getUsersStore().remove(this.selected);
        }
    }
});