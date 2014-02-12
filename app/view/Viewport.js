Ext.define('AppExample.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 5
    },
    items: [
        {
            title: 'Users',
            xtype: 'users',
            collapsible: false,
            region: 'center',
            margins: '10 0 5 10',
            bodyPadding: 0
        },
        {
            title: 'Related',
            region: 'east',
            floatable: false,
            margins: '10 10 5 0',
            width: '30%',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'images',
                    title: 'Images',
                    margin: '0 0 2 0',
                    itemId: 'images'
                },
                {
                    xtype: 'panel',
                    title: 'Friends',
                    margin: '2 0 0 0',
                    layout: 'fit',
                    frame: true,
                    flex: 1
                }
            ]
        }
    ]
})
;