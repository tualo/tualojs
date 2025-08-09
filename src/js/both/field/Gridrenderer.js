Ext.define('Tualo.tualojs.form.field.Gridrenderer', {
    extend: 'Ext.form.field.ComboBox',
    alias: ['widget.tualogridrenderer'],
    valueField: 'id',
    displayField: 'id',
    anchor: '100%',
    queryMode: 'local',
    initComponent: function () {
        var hide = [
            [
                "self"
            ],
            [
                "statics"
            ],
            [
                "callParent"
            ],
            [
                "callSuper"
            ],
            [
                "initConfig"
            ],
            [
                "beforeInitConfig"
            ],
            [
                "getConfig"
            ],
            [
                "destroyMembers"
            ],
            [
                "freezeConfig"
            ],
            [
                "setConfig"
            ],
            [
                "getConfigWatcher"
            ],
            [
                "watchConfig"
            ],
            [
                "getCurrentConfig"
            ],
            [
                "hasConfig"
            ],
            [
                "getInitialConfig"
            ],
            [
                "link"
            ],
            [
                "unlink"
            ],
            [
                "$reap"
            ],
            [
                "destroy"
            ],
            [
                "callOverridden"
            ]
        ]

        var data = [];
        for (var key in Tualo.tualojs.Format.Renderer) {
            if (key === 'singleton' || key === 'prototype') continue;
            if (typeof Tualo.tualojs.Format.Renderer[key] !== 'function') continue;
            if (hide.find(function (e) { return e[0] === key })) continue;
            data.push([key]);
        }
        this.store = Ext.create('Ext.data.ArrayStore', {
            autoLoad: false,
            autoSync: false,
            remoteFilter: false,
            remoteSort: false,
            pageSize: 5000,
            fields: [
                { name: 'id', type: 'string' }
            ],
            data: data
        });
        this.callParent(arguments);
    }

});
