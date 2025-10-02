
Ext.define('Tualo.js.grid.filters.filter.TagFieldFilter', {
    extend: 'Ext.grid.filters.filter.SingleFilter',
    alias: ['grid.filter.tualo_tagfield_filter'],

    uses: ['Ext.form.field.Tag'],

    type: 'list',


    operator: 'in',

    emptyText: 'Enter Filter Text...',

    itemDefaults: {
        xtype: 'tagfield',
        enableKeyEvents: true,
        hideEmptyLabel: false,
        iconCls: Ext.baseCSSPrefix + 'grid-filters-find',
        labelSeparator: '',
        labelWidth: 29,
        margin: 0,

        valueField: '__id',
        displayField: '__displayfield',
        store: {
            type: 'ds_store',
        },
        selectOnFocus: true
    },

    config: {
        "tablename": null,
        "fieldname": null,
        "valueField": "__id",
        "displayField": "__displayfield",

    },

    constructor: function (config) {
        var me = this;

        console.log('TagFieldFilter constructor', config);
        config = config || {};
        config.itemDefaults = config.itemDefaults || {};

        config.itemDefaults.valueField = config.valueField || config.itemDefaults.valueField;
        config.itemDefaults.displayField = config.displayField || config.itemDefaults.displayField;
        if (config.store) {
            config.itemDefaults.store = config.store;
        } else {
            if (config.storeConfig) {
                config.itemDefaults.store = Ext.create('Ext.data.Store', config.storeConfig);
            }
        }

        me.callParent([config]);
    },


    menuDefaults: {
        // A menu with only form fields needs some body padding. Normally this padding
        // is managed by the items, but we have no normal menu items.
        bodyPadding: 3,
        showSeparator: false
    },

    /**
     * @private
     * Template method that is to initialize the filter and install required menu items.
     */
    createMenu: function () {
        var me = this,
            config;

        me.callParent();

        config = Ext.apply({}, me.getItemDefaults());
        console.log('TagFieldFilter createMenu', config, me);

        if (config.iconCls && !('labelClsExtra' in config)) {
            config.labelClsExtra = Ext.baseCSSPrefix + 'grid-filters-icon ' + config.iconCls;
        }

        delete config.iconCls;

        config.emptyText = config.emptyText || me.emptyText;

        config.valueField = me.idField || '__id';
        config.displayField = me.labelField || '__displayfield';
        config.maxWidth = 300;
        if (me.store) {
            config.store = me.store;
        }

        me.inputItem = me.menu.add(config);

        me.inputItem.on({
            scope: me,
            change: me.onChange,
            el: {
                click: function (e) {
                    e.stopPropagation();
                }
            }
        });
    },

    onChange: function () {
        console.log('TagFieldFilter onChange', this.inputItem.getValue());
        this.setValue(this.inputItem.getValue());
    },
    /**
     * @private
     * Template method that is to set the value of the filter.
     * @param {Object} value The value to set the filter.
     */
    setValue: function (value) {
        var me = this;

        /*
        if (me.inputItem) {
            me.inputItem.setValue(value);
        }
        */
        console.log('TagFieldFilter setValue', value);
        me.filter.setValue(value);

        if (value.length && me.active) {
            me.value = value;
            me.updateStoreFilter();
        }
        else {
            me.setActive(!!value.length);
        }
    },

    activateMenu: function () {
        this.inputItem.setValue(this.filter.getValue());
    },


    getFilterConfig: function (config, key) {
        // List filter needs to have its value set immediately or else could will fail
        // when filtering since its _value would be undefined.
        var value = config.value;

        if (Ext.isEmpty(value)) {
            value = [];
        }
        else if (!Ext.isArray(value)) {
            value = [value];
        }

        config.value = value;
        let f = this.callParent([config, key])
        console.log('TagFieldFilter getFilterConfig', f);
        return f;
    },
    // serializer

    addStoreFilter: function () {
        var me = this;

        console.log('TagFieldFilter addStoreFilter', arguments);
        me.callParent(arguments);
    },
    createFilter: function (config, key) {
        var filter = new Ext.util.Filter(this.getFilterConfig(config, key));

        console.log('TagFieldFilter createFilter', arguments);
        filter.isGridFilter = true;

        return filter;
    }
});


