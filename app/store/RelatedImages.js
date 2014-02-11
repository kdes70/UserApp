Ext.define('AM.store.RelatedImages', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Image',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        api: {
            create: 'images/create',
            read: 'images/read',
            update: 'images/update',
            destroy: 'images/destroy'
        },
        reader: {
            type: 'json',
            root: 'related_images',
            successProperty: 'success',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            root: 'related_images'
        },
        listeners: {
            exception: function(proxy, request, operation) {
                Ext.example.msg('error',operation.error);
            }
        }
    },
    listeners: {
            write: function (proxy, operation) {
                Ext.example.msg(operation.action, operation.resultSet.message);
            }
    }
});