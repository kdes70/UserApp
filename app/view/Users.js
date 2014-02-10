Ext.define('AppExample.view.Users', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users',
    store: 'Users',
    stripeRows: true,
    title: 'All Users',
    frame: true,
    plugins: [{
        ptype: 'cellediting',
        pluginId: 'cellediting'
    }],
    columns: [
        {
            header: 'Name',
            dataIndex: 'name',
            flex: 1,
            field: {allowBlank: false}
        },
        {
            header: 'Price',
            dataIndex: 'price',
            renderer: 'usMoney',
            flex: 1,
            field: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 100000
            }
        },
        {
            header: 'Type',
            dataIndex: 'type_id',
            itemId: 'comboColumn',
            flex: 1,
            field: {
                xtype: 'combo',
                store: 'Types',
                valueField: 'id',
                displayField: 'alias',
                name: 'type',
                mode: 'local',
                forceSelection: true,
                selectOnTab: true,

                typeAhead: true,
                allowBlank: false,
                lazyRender: true
            },
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                console.log(value, metaData, record.getType());
                return record.getType().alias;
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    itemId: 'addUser',
                    text: 'Add User',
                    iconCls: 'icon-add'
                },
                {
                    xtype: 'button',
                    text: 'Remove User',
                    disabled: true,
                    itemId: 'deleteUser',
                    iconCls: 'icon-delete'
                }, '->',
                {
                    xtype: 'tbtext',
                    text: '<b>User Types</b>'
                }, '|',
                {
                    xtype: 'combo',
                    store: 'Types',
                    itemId: 'typeSelector',
                    valueField: 'id',
                    displayField: 'alias',
//                    mode: 'local',
                    forceSelection: false,
                    selectOnTab: true,
                    emptyText: 'select available types or write new',
                    typeAhead: false,
                    allowBlank: true,
                    lazyRender: true
                },
                {
                    xtype: 'button',
                    iconCls: 'icon-add',
                    itemId: 'addType',
                    disabled: true
                },
                {
                    xtype: 'button',
                    disabled: true,
                    itemId: 'deleteType',
                    iconCls: 'icon-delete'
                }
            ]
        }
//        {
//            xtype: 'cfg',
//        }
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});