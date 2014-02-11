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
                    itemId: 'open_store',
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