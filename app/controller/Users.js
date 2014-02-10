Ext.define('AppExample.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users', 'Types'], // , 'RelatedUsers', 'UnrelatedUsers',  'Images', 'RelatedImages'
//    models: ['User', 'Type'],
    views: ['Users'], // 'Cfg',  'Friends'
    refs: [{
        ref: 'UserGrid',
        selector: 'users'
    }],
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
            },
//            'users #typeSelector': {
//                change: this.typeChange
//            },
//            'users #addType': {
//                click: this.addType
//            },
//            'users #deleteType': {
//                click: this.deleteType
//            },
//            'cfg button[action=autoSync]': {
//                toggle: function (btn, pressed) {
//                    this.getUsersStore().autoSync = pressed;
//                },
//            },
//            'cfg button[action=batch]': {
//                toggle: function (btn, pressed) {
//                    this.getUsersStore().getProxy().batchActions = pressed;
//                }
//            },
//            'cfg button[action=writeAllFields]': {
//                toggle: function (btn, pressed) {
//                    this.getUsersStore().getProxy().getWriter().writeAllFields = pressed;
//                }
//            },
//            'cfg button[action=sync]': {
//                click: function (btn, pressed) {
//                    this.getUsersStore().sync();
//                },
//            },
//            'friends #friendsSelector': {
//                select: this.addFriend,
//            },
//            'friends actioncolumn': {
//                click: this.unFriend,
//            },
        });
    },// end init
    selected: null,
    selectUser: function (grid, record, index, eOpts){
        this.selected = record;
        console.log(record);
        console.log(record.getType());
//        var params = new Object(),
//            selection = (selected[0] || null);
//
//        //update stores affected to selection
//        if (selection) {
//            params.id = selected[0].data.user_id;
//            if (selection.data.user_id) {
//                this.getImagesStore().load({params: params}),
//                    this.getRelatedUsersStore().load({params: params}),
//                    this.getUnrelatedUsersStore().load({params: params}),
//                    this.getRelatedImagesStore().load({params: params});
//            }
//        }

//        this.getFriends().down('#friendsSelector').setDisabled(selected.length === 0);
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

//    addFriend: function (selModel, selected) {
//        var query = new Object(),
//            params = new Object(),
//            selected_user = this.getUsers().getSelectionModel().getSelection()[0],
//            selector = this.getFriends().down('#friendsSelector'),
//            related_users = this.getRelatedUsersStore(),
//            unrelated_users = this.getUnrelatedUsersStore();
//
//        query.first_id = selected_user.data.user_id;
//        query.second_id = selector.getValue();
//        params.id = selected_user.data.user_id;
//
//        Ext.Ajax.request({
//            url: 'users/relate',
//            params: {
//                query: Ext.JSON.encode(query)
//            },
//            success: function (response, opts) {
//                Ext.example.msg('Success', response.responseText);
//                related_users.load({params: params});
//                unrelated_users.load({params: params});
//            },
//            failure: function (response, opts) {
//                Ext.example.msg('Failure', response.responseText);
//            }
//        });
//    },// end addFriend

//    unFriend: function (grid, rowIndex, colIndex) {
//        var query = new Object(),
//            params = new Object(),
//            related_users = this.getRelatedUsersStore(),
//            unrelated_users = this.getUnrelatedUsersStore(),
//            selected_user1 = this.getUsers().getSelectionModel().getSelection()[0],
//            selected_user2 = related_users.getAt(colIndex);
//
//        query.first_id = selected_user1.data.user_id;
//        query.second_id = selected_user2.data.user_id;
//        params.id = selected_user1.data.user_id;
//
//        Ext.Ajax.request({
//            url: 'users/unrelate',
//            params: {
//                query: Ext.JSON.encode(query)
//            },
//            success: function (response) {
//                Ext.example.msg('Success', response.responseText);
//                related_users.load({
//                    params: params
//                })
//                unrelated_users.load({
//                    params: params
//                })
//            },
//            failure: function (response, opts) {
//                Ext.example.msg('Failure', response.responseText);
//            }
//        });
//    },// end unFriend
});