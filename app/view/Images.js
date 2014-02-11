Ext.define('AppExample.view.Images', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.images',
    store: 'Images',
    stripeRows: true,
    title: 'User Images',
    frame: true,
    columns: [
        {
            header: 'Name',
            dataIndex: 'name',
            flex: 1,
            field: {allowBlank: false}
        }
    ],
    dockedItems: [
        {
            dock: 'bottom',
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Store',
                    itemId: 'open-store',
                    iconCls: 'icon-store'
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Unassign selected',
                    disabled: true,
                    itemId: 'unassign_images',
                    iconCls: 'icon-delete'
                }
            ]
        }
    ]
});

//Ext.define('AM.view.Images', {
//    extend: 'Ext.DataView',
//    activeRecord: null,
//    alias: 'widget.images',
//    store: 'RelatedImages',
//    frame: true,
//    multiSelect: true,
//    autoScroll: true,
//    emptyText: 'No images to display',
//    itemSelector: 'div.thumb-wrap',
//    tpl: ['<tpl for=".">',
//        '<div class="thumb-wrap">',
//        '<div class="thumb">',
//        '<img src="public/images/store/thumbs/thumb_{image_src}" />',
//        '</div>',
//        '<span>{image_name}</span>',
//        '</div>',
//        '</tpl>'],
//
//    initComponent: function () {
//        this.callParent(arguments);
//    },
//
//    updateDetail: function (record) {
//        this.activeRecord = record;
//    }
//
//});