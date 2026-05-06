Ext.define('Tualo.project.form.field.Anschprechpartner', {
    extend: 'Ext.form.field.ComboBox',
    alias: ['widget.tualo_job_ansprechpartner'],

    valueField: 'id',
    displayField: 'anzeige_name',
    anchor: '100%',
    maxLength: 255,
    // queryMode: 'local',
    minChars: 2,

    triggers: {
        openphone: {
            cls: 'x-fa fa-phone',
            tooltip: "Telefonieren",
            handler: function (btn) {
                if (btn.getSelectedRecord() == null) {
                    btn.getStore().load({
                        callback: function () {
                            if (btn.getSelectedRecord().get('telefon')) {
                                window.open('tel:' + btn.getSelectedRecord().get('telefon'), '_blank');
                            }
                        }
                    })

                } else {
                    if (btn.getSelectedRecord().get('telefon')) {
                        window.open('tel:' + btn.getSelectedRecord().get('telefon'), '_blank');
                    }
                }
            }
        },

        openmail: {
            cls: 'x-fa fa-envelope',
            tooltip: "E-Mail senden",
            handler: function (btn) {
                if (btn.getSelectedRecord() == null) {
                    btn.getStore().load({
                        callback: function () {
                            if (btn.getSelectedRecord().get('email')) {
                                window.open('mailto:' + btn.getSelectedRecord().get('email'), '_blank');
                            }
                        }
                    })

                } else {
                    if (btn.getSelectedRecord().get('email')) {
                        window.open('mailto:' + btn.getSelectedRecord().get('email'), '_blank');
                    }
                }
            }
        },
        opends: {
            cls: 'x-fa fa-link',
            tooltip: "Den Datensatz öffnen",
            handler: function (btn) {
                let route = "#ds/ansprechpartner/id/" + btn.getValue();
                if (btn.getSelectedRecord() == null) {
                    btn.getStore().load({
                        callback: function () {
                            window.open(route, '_blank');
                        }
                    })
                } else {
                    window.open(route, '_blank');
                }
            }
        }
    },

    constructor: function (config) {
        this.store = Ext.create('Tualo.DataSets.store.Ansprechpartner', {});
        this.callParent([config]);
        this.store.on('beforeload', this.onStoreBeforeLoad, this);
        this.getStore().load();
    },
    onStoreBeforeLoad: function (store, operation, eOpts) {
        let extraParams = store.getProxy().getExtraParams(),
            reference = {},
            r = this.getCurrentRecord();

        if (Ext.isEmpty(extraParams)) { extraParams = {}; };
        if (r) {
            //( store, operation, eOpts ) 
            reference = {
                kundennummer: r.get('kundennummer'),
                kostenstelle: r.get('kostenstelle')
            }
            extraParams.reference = Ext.JSON.encode(reference);
        }
        store.getProxy().setExtraParams(extraParams);
    },

    getCurrentRecord: function () {
        var fld = this;
        if (fld.column) {
            console.log('initComponent', 'tualo_job_ansprechpartner', 'column', fld.column);
            if (fld.column.view) {
                console.log('initComponent', 'tualo_job_ansprechpartner', 'view', fld.column.view);
                if (fld.column.view.grid) return fld.column.view.grid.getSelection()[0];
            }
        } else {
            if (fld.up('form')) return fld.up('form').getRecord();
        }
        return null;
    },

    initComponent: function () {
        var fld = this;

        console.log('initComponent', 'tualo_job_ansprechpartner', fld);
        this.callParent();
        this.on('focus', function () {
            console.log('focus', 'tualo_job_ansprechpartner', fld);
            var r = fld.getCurrentRecord();
            if (r) {
                var v = r.data;
                fld.store.load();
                console.log('focus', 'tualo_job_ansprechpartner', fld, v);

            }
        });

    }
})