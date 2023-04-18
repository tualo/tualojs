Ext.define('Ext.grid.column.ColumnEdit', {
    extend: 'Ext.plugin.Abstract',
    mixins: [
        'Ext.util.StoreHolder'
    ],

    alias: 'plugin.columneditors',
    pluginId: 'defaultcolumneditors',



    /**
     * @property {String} [filterCls="x-grid-filters-filtered-column"]
     * The CSS applied to column headers with active filters.
     */
    filterCls: Ext.baseCSSPrefix + 'grid-filters-filtered-column',

    //<locale>
    /**
     * @cfg {String} [menuFilterText="Filters"]
     * The text for the filters menu.
     */
    menuFilterText: 'Set Value',
    //</locale>

    /**
     * @cfg {Boolean} showMenu
     * Defaults to true, including a filter submenu in the default header menu.
     */
    showMenu: true,

    /**
     * @cfg {String} stateId
     * Name of the value to be used to store state information.
     */
    stateId: undefined,

    init: function (grid) {
        var me = this,
            store, headerCt;



        me.grid = grid;
        grid.columneditors = me;

        if (me.grid.normalGrid) {
            me.isLocked = true;
        }

        //grid.clearFilters = me.clearFilters.bind(me);

        store = grid.store;
        headerCt = grid.headerCt;

        headerCt.on({
          scope: me,
          add: me.onAdd,
          menucreate: me.onMenuCreate
        });

        grid.on({
          scope: me,
          destroy: me.onGridDestroy,
          reconfigure: me.onReconfigure
        });

        me.bindStore(store);

        me.initColumns();
    },

    /**
     * Creates the Filter objects for the current configuration.
     * Reconfigure and on add handlers.
     * @private
     */
    initColumns: function () {
        var grid = this.grid,
            store = grid.getStore(),
            columns = grid.columnManager.getColumns(),
            len = columns.length,
            i, column,
            filter, filterCollection;


        // We start with filters defined on any columns.
        for (i = 0; i < len; i++) {
            column = columns[i];
            editor = column.editor;

            if (editor) {
                this.createColumnEditor(column);
            }
        }


    },

    createColumnEditor: function (column) {
        var me = this,
            columnEditor = column.editor,
            editor = {
              column: column,
              grid: me.grid,
              owner: me
            },
            field, model, type;

        if (Ext.isString(columnEditor)) {
            editor.xtype = columnEditor;
        } else {
            Ext.apply(editor, columnEditor);
        }

        if (!editor.xtype) {
            model = me.store.getModel();
            // If no filter type given, first try to get it from the data field.
            //field = model && model.getField(column.dataIndex);
            //type = field && field.type;

            editor.xtype = 'textfield';
        }
        //column.editor = Ext.Factory.gridFilter(filter);
    },

    onAdd: function (headerCt, column, index) {
        var editor = column.editor;

        if (editor) {
            this.createColumnEditor(editor);
        }
    },

    /**
     * @private
     * Handle creation of the grid's header menu.
     */
    onMenuCreate: function (headerCt, menu) {
      menu.on({
        beforeshow: this.onMenuBeforeShow,
        scope: this
      });
    },

    /**
     * @private
     * Handle showing of the grid's header menu. Sets up the filter item and menu
     * appropriate for the target column.
     */
    onMenuBeforeShow: function (menu) {
        var me = this,
            menuItem, editor, parentTable, parentTableId;

        if (me.showMenu) {
            // In the case of a locked grid, we need to cache the 'Filters' menuItem for each grid since
            // there's only one Filters instance. Both grids/menus can't share the same menuItem!
            if (!me.editorMenuItem) {
                me.editorMenuItem = {};
            }

            // Don't get the owner panel if in a locking grid since we need to get the unique filterMenuItem key.
            // Instead, get a ref to the parent, i.e., lockedGrid, normalGrid, etc.
            parentTable = menu.up('tablepanel');
            parentTableId = parentTable.id;

            menuItem = me.editorMenuItem[parentTableId];

            if (!menuItem || menuItem.destroyed) {
                menuItem = me.createMenuItem(menu, parentTableId);
            }

            // Save a ref to the root "Filters" menu item, column filters make use of it.
            me.activeEditorMenuItem = menuItem;

            editor = me.getMenuEditor(parentTable.headerCt);
            if (editor) {
              editor.showMenu(menuItem);
            }

            menuItem.setVisible(!!editor);
            me.sep.setVisible(!!editor);
        }
    },

    createMenuItem: function (menu, parentTableId) {
        var me = this,
            item;

        me.sep = menu.add('-');

        item = menu.add({
          itemId: 'editors',
          text: me.menuEditorText,
          listeners: {
            scope: me,
            checkchange: me.onCheckChange
          }
        });

        return (me.editorMenuItem[parentTableId] = item);
    },

    /**
     * Handler called by the grid 'beforedestroy' event
     */
    onGridDestroy: function () {
        var me = this,
            editorMenuItem = me.editorMenuItem,
            item;

        me.bindStore(null);
        me.sep = Ext.destroy(me.sep);

        for (item in editorMenuItem) {
            editorMenuItem[item].destroy();
        }

        me.grid = null;
    },

    onUnbindStore: function(store) {
      //  store.getFilters().un('remove', this.onFilterRemove, this);
    },

    onBindStore: function(store, initial, propName) {
      //  this.local = !store.getRemoteFilter();
      //  store.getFilters().on('remove', this.onFilterRemove, this);
    },

    /**
     * @private
     * Get the filter menu from the filters MixedCollection based on the clicked header.
     */
    getMenuEditor: function (headerCt) {
        return headerCt.getMenu().activeHeader.editor;
    },

    /**
     * @private
     *
     */
    onCheckChange: function (item, value) {
        // Locking grids must lookup the correct grid.
        var parentTable = this.isLocked ? item.up('tablepanel') : this.grid,
            editor = this.getMenuEditor(parentTable.headerCt);

        filter.setActive(value);
    },

    getHeaders: function () {
        return this.grid.view.headerCt.columnManager.getColumns();
    },

    /**
     * Checks the plugin's grid for statefulness.
     * @return {Boolean}
     */
    isStateful: function () {
        return this.grid.stateful;
    },

    /**
     * Adds a filter to the collection and creates a store filter if has a `value` property.
     * @param {Object/Object[]/Ext.util.Filter/Ext.util.Filter[]} filters A filter
     * configuration or a filter object.
     */
    addEditor: function (editors) {
        var me = this,
            grid = me.grid,
            store = me.store,
            hasNewColumns = false,
            suppressNextFilter = true,
            dataIndex, column, i, len, editor, columnFilter;

        if (!Ext.isArray(editors)) {
            editors = [editors];
        }
        for (i = 0, len = editors.length; i < len; i++) {
            editor = editors[i];
            dataIndex = editor.dataIndex;
            column = grid.columnManager.getHeaderByDataIndex(dataIndex);

            // We only create filters that map to an existing column.
            if (column) {
                hasNewColumns = true;

                // Don't suppress active filters.
                if (editor.value) {
                    suppressNextFilter = false;
                }

                columnEditor = column.editor;

                // If already a gridfilter, let's destroy it and recreate another from the new config.
                if (columnEditor) {
                    columnEditor.deactivate();
                    columnEditor.destroy();

                    if (me.activeEditorMenuItem) {
                        me.activeEditorMenuItem.menu = null;
                    }
                }

                column.editor = editor;
            }
        }

        // Batch initialize all column filters.

        if (hasNewColumns) {
            //store.suppressNextFilter = suppressNextFilter;
            me.initColumns();
            //store.suppressNextFilter = false;
        }
    },

    /**
     * Adds filters to the collection.
     * @param {Array} editors An Array of filter configuration objects.
     */
    addEditors: function (editors) {
        if (editors) {
            this.addEditor(editors);
        }
    },



    onReconfigure: function(grid, store, columns, oldStore) {
        var editorMenuItem = this.editorMenuItem,
            key;

        // The Filters item's menu should have already been destroyed by the time we get here but
        // we still need to null out the menu reference.
        for (key in editorMenuItem) {
            editorMenuItem[key].setMenu(null);
        }

        if (store && oldStore !== store) {
            this.bindStore(store);
        }
    }
});
