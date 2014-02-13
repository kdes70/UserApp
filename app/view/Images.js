Ext.define('AppExample.view.Images', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.images',
    title: 'User Images',
    frame: true,
    layout: 'fit',

    items: [
        {
            xtype: 'dataview',
//            store: 'Images',
            title: 'User Images',
            multiSelect: true,
            autoScroll: true,
            frame: true,
            emptyText: 'No images to display',
            itemSelector: 'div.thumb-wrap',
            tpl: AppExample.util.TemplateLoader.getTemplate('image'),
            header: 'Name',
            dataIndex: 'name'
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
}, function(){});