Ext.define('Tualo.js.lazy.Testfilter2', {
    extend: 'Tualo.grid.filters.filter.QuadFilter',
    //    extend: 'Ext.grid.filters.filter.Base',

    alias: 'grid.filter.tualo_search_list',
    type: 'list',



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
    emptyText: 'Eingabe...',

    itemDefaults: {
        xtype: 'tagfield',
        enableKeyEvents: true,
        hideEmptyLabel: false,
        labelSeparator: '',
        labelWidth: 29,
        selectOnFocus: false,
        store: {
            fields: ['id', 'text'],
            type: 'array',
            data: []
        },
    },

    /**
     * @property {String[]} menuItems
     * The items to be shown in this menu.  Items are added to the menu
     * according to their position within this array.
     * Defaults to:
     *      menuItems : ['lt', 'gt', '-', 'eq']
     * @private
     */
    menuItems: ['in', 'not in'],


    bindMenuStore: function (options) {
        var me = this;
        console.log('bindMenuStore', options);
        if (me.grid.destroyed || me.preventFilterRemoval) {
            return;
        }

        // me.createListStore(options);
        // me.createMenuItems(me.store);
        me.loaded = true;
    },


    menuDefaults: {
        // A menu with only form fields needs some body padding. Normally this padding
        // is managed by the items, but we have no normal menu items.
        bodyPadding: 3,
        showSeparator: false
    },

    onCheckChange: function () {
        // Note that we don't care about the checked state here because #setValue
        // will sort this out. #setValue will get the values of the currently-checked items
        // and set its filter value from that.
        var me = this,
            updateBuffer = me.updateBuffer;

        if (updateBuffer) {
            me.task.delay(updateBuffer);
        }
        else {
            me.setValue();
        }
    },

    createMenu: function () {
        var me = this;
        console.log('createMenu');

        var me = this,
            listeners = {
                scope: me,
                change: me.onCheckChange,
                /*
                spin: {
                    fn: me.onInputSpin,
                    buffer: 200
                },
                el: {
                    click: me.stopFn
                }
                    */
            },
            itemDefaults = me.getItemDefaults(),
            menuItems = me.menuItems,
            fields = me.getFields(),
            field, i, len, key, item, cfg;

        me.callParent();

        me.fields = {};

        for (i = 0, len = menuItems.length; i < len; i++) {
            key = menuItems[i];
            console.log('createMenu', key);

            if (key !== '-') {
                field = fields[key];

                cfg = {
                    // labelClsExtra: Ext.baseCSSPrefix + 'grid-filters-icon ' + field.iconCls
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

    constructor: function (config) {
        var me = this,
            stateful = false,
            filter = {},
            filterIn, filterNotIn, value, operator;

        me.callParent([config]);

        value = me.value;

        filterIn = me.getStoreFilter('in');
        filterNotIn = me.getStoreFilter('not in');

        if (filterIn || filterNotIn) {
            // This filter was restored from stateful filters on the store so enforce it as active.
            stateful = me.active = true;

            if (filterIn) {
                me.onStateRestore(filterIn);
            }

            if (filterNotIn) {
                me.onStateRestore(filterNotIn);
            }

        }
        else {
            // Once we've reached this block, we know that this grid filter doesn't have a stateful
            // filter, so if our flag to begin saving future filter mutations is set we know
            // that any configured filter must be nulled out or it will replace our stateful filter.
            if (me.grid.stateful && me.getGridStore().saveStatefulFilters) {
                value = undefined;
            }

            // TODO: What do we mean by value === null ?
            me.active = me.getActiveState(config, value);
        }

        // Note that stateful filters will have already been gotten above. If not, or if all filters
        // aren't stateful, we need to make sure that there is an actual filter instance created,
        // with or without a value.
        //
        // Note use the alpha alias for the operators ('gt', 'lt', 'eq') so they map
        // in Filters.onFilterRemove().
        filter.in = filterIn || me.createFilter({
            operator: 'in',
            value: (!stateful && value && Ext.isDefined(value.in))
                ? value.in
                : null
        }, 'in');

        filter.notIn = filterNotIn || me.createFilter({
            operator: 'not in',
            value: (!stateful && value && Ext.isDefined(value.notIn))
                ? value.notIn
                : null
        }, 'not in');


        me.filter = filter;

        if (me.active) {
            me.setColumnActive(true);

            if (!stateful) {
                for (operator in value) {
                    me.addStoreFilter(me.filter[operator]);
                }
            }
            // TODO: maybe call this.activate?
        }
    },

    /**
     * @private
     * This method will be called when a column's menu trigger is clicked as well as when a filter
     * is activated. Depending on the caller, the UI and the store will be synced.
     */
    activate: function (showingMenu) {
        var me = this,
            filters = me.filter,
            fields = me.fields,
            filter, field, operator, value, isRootMenuItem;

        if (me.preventFilterRemoval) {
            return;
        }

        for (operator in filters) {
            filter = filters[operator];
            field = fields[operator];
            value = filter.getValue();

            if (value || value === 0) {
                if (field.isComponent) {
                    field.setValue(value);

                    // Some types, such as Date, have additional menu check items in their Filter
                    // menu hierarchy. Others, such as Number, do not. Because of this,
                    // it is necessary to make sure that the direct menuitem ancestor of the fields
                    // is not the rootMenuItem (the "Filters" menu item), which has its
                    // checked state controlled elsewhere.
                    //
                    // In other words, if the ancestor is not the rootMenuItem, check it.
                    if (isRootMenuItem === undefined) {
                        isRootMenuItem = me.owner.activeFilterMenuItem === field.up('menuitem');
                    }

                    if (!isRootMenuItem) {
                        field.up('menuitem').setChecked(true, /* suppressEvents */ true);
                    }
                }
                else {
                    field.value = value;
                }

                // Note that we only want to add store filters when they've been removed,
                // which means that when Filter.showMenu() is called
                // we DO NOT want to add a filter as they've already been added!
                if (!showingMenu) {
                    me.addStoreFilter(filter);
                }
            }
        }
    },

    /**
     * @private
     * This method will be called when a filter is deactivated. The UI and the store will be synced.
     */
    deactivate: function () {
        var me = this,
            filters = me.filter,
            f, filter, value;

        if (!me.countActiveFilters() || me.preventFilterRemoval) {
            return;
        }

        me.preventFilterRemoval = true;

        for (f in filters) {
            filter = filters[f];

            value = filter.getValue();

            if (value || value === 0) {
                me.removeStoreFilter(filter);
            }
        }

        me.preventFilterRemoval = false;
    },

    countActiveFilters: function () {
        var filters = this.filter,
            filterCollection = this.getGridStore().getFilters(),
            prefix = this.getBaseIdPrefix(),
            i = 0,
            filter;

        if (filterCollection.length) {
            for (filter in filters) {
                if (filterCollection.get(prefix + '-' + filter)) {
                    i++;
                }
            }
        }

        return i;
    },

    onFilterRemove: function (operator) {
        var me = this,
            value;

        // Filters can be removed at any time, even before a column filter's menu has been created
        // (i.e., store.clearFilter()). So, only call setValue() if the menu has been created
        // since that method assumes that menu fields exist.
        if (!me.menu && me.countActiveFilters()) {
            me.active = false;
        }
        else if (me.menu) {
            value = {};
            value[operator] = null;
            me.setValue(value);
        }
    },

    onStateRestore: Ext.emptyFn,

    setValue: function (value) {
        var me = this,
            filters = me.filter,
            add = [],
            remove = [],
            active = false,
            filterCollection = me.getGridStore().getFilters(),
            filter, v, i, rLen, aLen;

        if (me.preventFilterRemoval) {
            return;
        }

        me.preventFilterRemoval = true;

        if ('in' in value) {
            v = filters.in.getValue();

            if (v || v === 0) {
                remove.push(filters.in);
            }

            v = filters.notIn.getValue();

            if (v || v === 0) {
                remove.push(filters.notIn);
            }

            v = value.in;

            if (v || v === 0) {
                add.push(filters.in);
                filters.in.setValue(v);
            }
            else {
                remove.push(filters.in);
            }
        }
        else {
            v = filters.in.getValue();

            if (v || v === 0) {
                remove.push(filters.in);
            }

            if ('not in' in value) {
                v = value.notIn;

                if (v || v === 0) {
                    add.push(filters.notIn);
                    filters.notIn.setValue(v);
                }
                else {
                    remove.push(filters.notIn);
                }
            }

        }

        // Note that we don't want to update the filter collection unnecessarily, so we must know
        // the current number of active filters that this TriFilter has +/- the number of filters
        // we're adding and removing, respectively. This will determine the present active state
        // of the TriFilter which we can use to not only help determine if the condition below
        // should pass but (if it does) how the active state should then be updated.
        rLen = remove.length;
        aLen = add.length;
        active = !!(me.countActiveFilters() + aLen - rLen);

        if (rLen || aLen || active !== me.active) {
            // Begin the update now because the update could also be triggered if #setActive
            // is called. We must wrap all the calls that could change the filter collection.
            filterCollection.beginUpdate();

            if (rLen) {
                for (i = 0; i < rLen; i++) {
                    filter = remove[i];

                    me.fields[filter.getOperator()].setValue(null);
                    filter.setValue(null);
                    me.removeStoreFilter(filter);
                }
            }

            if (aLen) {
                for (i = 0; i < aLen; i++) {
                    me.addStoreFilter(add[i]);
                }
            }

            me.setActive(active);
            filterCollection.endUpdate();
        }

        me.preventFilterRemoval = false;
    }
});












