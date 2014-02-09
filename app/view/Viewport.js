//cellEditing = Ext.create('Ext.grid.plugin.CellEditing');

Ext.define('AppExample.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'fit',
    items: [
        {
            xtype: 'users',
//            margin: 5,
//            flex: 2,
        },
//        {
//            xtype: 'users',
//            margin: 5,
//            flex: 2,
//            plugins: [cellEditing]
//        },
//        {
//            xtype: 'panel',
//            margin: 5,
//            flex: 1,
//            border: 0,
//            layout: {
//                type: 'vbox',
//                align: 'stretch'
//            }
//            items: [
//                {
//                    xtype: 'panel',
//                    margin: '0 0 2 0',
//                    title: 'Related images',
//                    itemId: 'related_images',
//                    flex: 1,
//                    frame: true,
//                    items: [
//                        {
//                            xtype: 'images'
//                        }
//                    ],
//                    dockedItems: [
//                        {
//                            dock: 'bottom',
//                            xtype: 'toolbar',
//                            items: [
//                                {
//                                    xtype: 'button',
//                                    itemId: 'open_store',
//                                    text: 'Add from store',
//                                    iconCls: 'icon-store',
//                                },
//                                '->',
//                                {
//                                    xtype: 'button',
//                                    text: 'Unassign selected',
//                                    disabled: true,
//                                    itemId: 'unassign_images',
//                                    iconCls: 'icon-delete',
//                                }
//                            ]
//                        }
//                    ],
//                },
//                {
//                    xtype: 'friends',
//                    title: 'Friends',
//                    margin: '2 0 0 0',
//                    layout: 'fit',
//                    frame: true,
//                    flex: 1
//                }
//            ]
//        }
    ]
})
;