Ext.define('AppExample.view.ImageStore', {
    extend: 'Ext.window.Window',
    alias: 'widget.image-store',
    title: 'Image Store',
    store: 'Images',
    width: 800,
    height: 500,
    layout: 'fit',
    autoShow: true,
    items: [{
        xtype: 'panel',
        title: false,
        border: 0,
        frame: false,
        items: [
            {
                xtype: 'dataview',
                store: 'Images',
                border: false,
                emptyText: 'No images to display',
                itemSelector: 'div.thumb-wrap',
                multiSelect: true,
                autoScroll: true,
                tpl: AppExample.util.TemplateLoader.getTemplate('image')
            }
        ],
        dockedItems: [
            {
                xtype: 'form',
                title: false,
                buttonAlign: 'right',
                labelWidth: 50,
                fileUpload: true,
                frame: true,
                border: 0,
                items: [
                    {
                        xtype: 'filefield',
                        name: 'photo',
                        labelWidth: 50,
                        msgTarget: 'side',
                        allowBlank: false,
                        buttonOnly: true,
                        hideLabel: true,
                        anchor: '100%',
                        buttonText: 'Upload New Image'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                dock: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'assign',
                        text: 'assign selected Images',
                        iconCls: 'icon-link',
                        disabled: true
                    },
                    {
                        xtype: 'button',
                        disabled: true,
                        text: 'delete selected Images',
                        itemId: 'delete',
                        iconCls: 'icon-delete'
                    },
                    '->',
                    {
                        xtype: 'button',
                        text: 'close',
                        scope: this,
                        itemId: 'closeStore',
                        handler: this.close
                    }
                ]
            }
        ]}
    ]
});