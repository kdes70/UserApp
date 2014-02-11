Ext.define('AppExample.controller.Types', {
    extend: 'Ext.app.Controller',
    stores: ['Types'],
    refs: [
        {
            ref: 'UserGrid',
            selector: 'users'
        }
    ],
    init: function () {
        this.control({
            'users #typeSelector': {
                change: this.typeChange
            },
            'users #addType': {
                click: this.addType
            },
            'users #deleteType': {
                click: this.deleteType
            }
        });
    },
    typeChange: function (selModel, selected) {
        var check = this.getTypesStore().findExact('type_id', selected);

        this.getUserGrid().down('#addType').setDisabled(check >= 0);
        this.getUserGrid().down('#deleteType').setDisabled(check < 0);
    },
    addType: function () {
        var typesStore = this.getTypesStore();
        var userType = new AppExample.model.Type({
            alias: this.getUserGrid().down('#typeSelector').getRawValue()
        });

        typesStore.add(userType);
        typesStore.sync();

        this.getUserGrid().down('#addType').setDisabled(true);
    },
    deleteType: function () {
        var combo_value = this.getUsers().down('#typeSelector').getValue()
        var selection = this.getTypesStore().getById(combo_value);

        if (selection) {
            this.getTypesStore().remove(selection);
        }

        this.getTypesStore().sync();
        this.getUsersStore().load();
        this.getUserGrid().down('#addType').setDisabled(true);
    }
});