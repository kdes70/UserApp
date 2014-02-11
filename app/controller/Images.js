Ext.define('AppExample.controller.Images', {
    extend: 'Ext.app.Controller',
    stores: ['Images'],
    views: ['Images', 'ImageStore'],
    refs: [
        {
            ref: 'ImageGrid',
            selector: 'images'
        },
        {
            ref: 'ImageStore',
            selector: 'image-store'
        }
    ],
    init: function () {
        this.control({
            'images #open-store': {
                click: this.openStore
            },
//            '#assign_images': {
//                click: this.assignImages
//            },
//            'image_store dataview': {
//                selectionchange: this.selectImages
//            },
//            'images': {
//                selectionchange: function (btn, selected) {
//                    this.getRelated_images().down('#unassign_images').setDisabled(selected.length === 0);
//                }
//            },
//            '#unassign_images': {
//                click: this.unassignImages
//            },
//            'image_store #delete_images': {
//                click: this.deleteImage
//            },
            'image-store filefield': {
                change: this.uploadImage
            },
//            'image_store #UploadForm_reset': {
//                click: this.resetForm
//            }
        });
    },
    openStore: function () {
        var view = Ext.widget('image-store');
    },
//
//    selectImages: function (btn, selected) {
//        var user_selection = (this.getUsers().getSelectionModel().getSelection()[0] || null);
//
//        this.getImagestore().down('#delete_images').setDisabled(selected.length === 0);
//        this.getImagestore().down('#assign_images').
//            setDisabled((user_selection === null) || (selected.length === 0));
//    }, // end selectImages

    uploadImage: function (elm, src) {
        var input = elm.extractFileInput();
        var me = this;
        if (input.files && input.files[0]) {
            var file = input.files[0];
            console.log(file);
            var reader = new FileReader();
            reader.onload = function(e) {
                var image = new AppExample.model.Image();
                image.set('name', file.name);
                image.set('src', e.target.result);
                me.getImagesStore().add(image);
                me.getImagesStore().sync();
            };
            reader.readAsDataURL(file);
        }
    }
//
//    deleteImage: function () {
//        var selection = this.getImagestore().down('dataview').getSelectionModel().getSelection();
//
//        if (selection) {
//            this.getImagesStore().remove(selection);
//        }
//    }, //end deleteImage
//
//    assignImages: function () {
//
//        var win = this.getImagestore(),
//            query = new Object(),
//            params = new Object(),
//            selected_images = new Array();
//        selected_user = this.getUsers().getSelectionModel().getSelection()[0],
//            selection = this.getImagestore().down('dataview').getSelectionModel().getSelection(),
//            images = this.getImagesStore(),
//            related_images = this.getRelatedImagesStore();
//
//        for (var id in selection) {
//            selected_images[id] = selection[id].data.image_id;
//        }
//
//        query.id = selected_user.data.user_id;
//        query.images = selected_images;
//        params.id = selected_user.data.user_id;
//
//        Ext.Ajax.request({
//            url: 'images/relate',
//            params: {
//                query: Ext.JSON.encode(query)
//            },
//            success: function (response) {
//                Ext.example.msg('Success', response.responseText);
//                images.load({params: params});
//                related_images.load({params: params});
//                win.close();
//            },
//            failure: function(response) {
//                Ext.example.msg('Failure', response.responseText);
//            }
//        });
//    },//end assignImage
//
//    unassignImages: function () {
//
//        var query = {},
//            params = {},
//            selected_images = [];
//        selected_user = this.getUsers().getSelectionModel().getSelection()[0],
//            selection = this.getRelated_images().down('dataview').getSelectionModel().getSelection(),
//            images = this.getImagesStore(),
//            related_images = this.getRelatedImagesStore();
//
//        for (var id in selection) {
//            selected_images[id] = selection[id].data.image_id;
//        }
//
//        query.id = selected_user.data.user_id;
//        query.images = selected_images;
//        params.id = selected_user.data.user_id;
//
//        Ext.Ajax.request({
//            url: 'images/unrelate',
//            params: {
//                query: Ext.JSON.encode(query)
//            },
//            success: function (response) {
//                Ext.example.msg('Success', response.responseText);
//                related_images.load({params: params});
//                images.load({params: params});
//            },
//            failure: function(response) {
//                Ext.example.msg('Failure', response.responseText);
//            }
//        });
//    },//end unassignImage
});

//Ext.define('AM.controller.Images', {
//    extend: 'Ext.app.Controller',
//    stores: ['Images', 'RelatedImages'],
//    models: ['User', 'Image'],
//    views: ['Users', 'Images', 'ImageStore'],
//    emptyText: 'No users to display',
//    refs: [{
//        ref: 'users',
//        selector: 'users'
//    },{
//        ref: 'imagestore',
//        selector: 'image_store'
//    },{
//        ref: 'related_images',
//        selector: '#related_images'
//    },{
//        ref: 'uploadform',
//        selector: 'image_store #UploadForm'
//    }],
//