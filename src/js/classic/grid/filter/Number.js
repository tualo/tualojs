
Ext.define('Tualo.grid.filters.filter.Number', {
    extend: 'Tualo.grid.filters.filter.QuadFilter',
    alias: ['grid.filter.tualonumber'],

    uses: ['Ext.form.field.Number'],

    type: 'number',

    config: {
        /**
         * @cfg {Object} [fields]
         * Configures field items individually. These properties override those defined
         * by `{@link #itemDefaults}`.
         *
         * Example usage:
         *
         *      fields: {
         *          // Override itemDefaults for one field:
         *          gt: {
         *              width: 200
         *          }
         *
         *          // "lt" and "eq" fields retain all itemDefaults
         *      },
         */
        fields: {
            gt: {
                iconCls: Ext.baseCSSPrefix + 'grid-filters-gt',
                margin: '0 0 3px 0'
            },
            lt: {
                iconCls: Ext.baseCSSPrefix + 'grid-filters-lt',
                margin: '0 0 3px 0'
            },
            eq: {
                iconCls: Ext.baseCSSPrefix + 'grid-filters-eq',
                margin: 0
            },
            neq: {
                iconCls: 'fa fa-solid fa-not-equal', //Ext.baseCSSPrefix + 'grid-filters-neq',
                margin: 0
            }
        }
    },

    /**
     * @cfg {String} emptyText
     * The empty text to show for each field.
     * @locale
     */
    emptyText: 'Enter Number...',

    itemDefaults: {
        xtype: 'numberfield',
        enableKeyEvents: true,
        hideEmptyLabel: false,
        labelSeparator: '',
        labelWidth: 29,
        selectOnFocus: false
    },

    menuDefaults: {
        // A menu with only form fields needs some body padding. Normally this padding
        // is managed by the items, but we have no normal menu items.
        bodyPadding: 3,
        showSeparator: false
    },

    createMenu: function () {
        var me = this,
            listeners = {
                scope: me,
                keyup: me.onValueChange,
                spin: {
                    fn: me.onInputSpin,
                    buffer: 200
                },
                el: {
                    click: me.stopFn
                }
            },
            itemDefaults = me.getItemDefaults(),
            menuItems = me.menuItems,
            fields = me.getFields(),
            field, i, len, key, item, cfg;

        me.callParent();

        me.fields = {};

        for (i = 0, len = menuItems.length; i < len; i++) {
            key = menuItems[i];

            if (key !== '-') {
                field = fields[key];

                cfg = {
                    labelClsExtra: Ext.baseCSSPrefix + 'grid-filters-icon ' + field.iconCls
                };

                if (itemDefaults) {
                    Ext.merge(cfg, itemDefaults);
                }

                Ext.merge(cfg, field);
                cfg.emptyText = cfg.emptyText || me.emptyText;
                delete cfg.iconCls;

                me.fields[key] = item = me.menu.add(cfg);

                item.filter = me.filter[key];
                item.filterKey = key;
                item.on(listeners);
            }
            else {
                me.menu.add(key);
            }
        }
    },

    getValue: function (field) {
        var value = {};

        value[field.filterKey] = field.getValue();

        return value;
    },

    /**
     * @private
     * Handler method called when there is a spin event on a NumberField
     * item of this menu.
     */
    onInputSpin: function (field, direction) {
        var value = {};

        value[field.filterKey] = field.getValue();

        this.setValue(value);
    },

    setFilterObject: function (filter) {
        var me = this,
            fields = me.fields,
            key;
        if (this.menu == null) {
            me.createMenu();
        }

        for (key in fields) {
            if (fields.hasOwnProperty(key)) {
                if (key == filter.operator) {
                    if (typeof fields[key].setValue == 'function') {
                        fields[key].setValue(filter.value);
                    } else {
                        console.error('setFilterObject', key, fields[key], filter.value);
                    }
                }
            }
        }
    },

    stopFn: function (e) {
        e.stopPropagation();
    }
});