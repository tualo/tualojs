Ext.define('Tualo.grid.plugin.Linker', {
    extend: 'Ext.grid.plugin.RowWidget',
    alias: 'plugin.tualolinker',
    getHeaderConfig: function () {
        var me = this,
            lockable = me.grid.lockable && me.grid;

        return {
            width: me.headerWidth,
            ignoreExport: true,
            lockable: false,
            autoLock: true,
            sortable: false,
            resizable: false,
            draggable: false,
            hideable: false,
            menuDisabled: true,
            tdCls: Ext.baseCSSPrefix + 'grid-cell-special',
            innerCls: Ext.baseCSSPrefix + 'grid-cell-inner-row-expander',
            renderer: function (value, metaData, record) {
                var cls = (record.isNonData
                    ? 'fa-link-slash'
                    : 'fa-link');

                return '<div class="fa fas ' + cls + '" role="presentation" tabIndex="-1"></div>';
            },
            processEvent: function (type, view, cell, rowIndex, cellIndex, e, record) {
                var isTouch = e.pointerType === 'touch',
                    isExpanderClick = !!e.getTarget('.fa-link');

                if ((type === "click" && isExpanderClick) ||
                    (type === 'keydown' && e.getKey() === e.SPACE)) {

                    // Focus the cell on real touch tap.
                    // This is because the toggleRow saves and restores focus
                    // which may be elsewhere than clicked on causing a scroll jump.
                    if (isTouch) {
                        cell.focus();
                    }

                    me.toggleRow(rowIndex, record, e);
                    e.stopSelection = !me.selectRowOnExpand;
                }
                else if (e.type === 'mousedown' && !isTouch && isExpanderClick) {
                    e.preventDefault();
                }
            },

            // This column always migrates to the locked side if the locked side is visible.
            // It has to report this correctly so that editors can position things correctly
            isLocked: function () {
                return lockable && (lockable.lockedGrid.isVisible() || this.locked);
            },

            // In an editor, this shows nothing.
            editRenderer: function () {
                return '&#160;';
            }
        };
    },
    setCmp: function (grid) {
        var me = this;
        me.__grid = grid;
        console.log('setCmp', grid);
        me.widget = {
            xtype: 'dataview',
            itemTpl: [
                '<tpl for=".">',
                '<div style="margin-bottom: 10px;" class="thumb-wrap">',
                '<img src="{src}" />',
                '<br/>',
                '<span>Link{caption}</span>',
                '</div>',
                '</tpl>'
            ],
            store: {
                type: 'array',
                fields: ['caption', 'src'],
                data: [
                    {
                        src: 'http://www.sencha.com/img/20110215-feat-drawing.png',
                        caption: 'Drawing & Charts'
                    },
                    {
                        src: 'http://www.sencha.com/img/20110215-feat-data.png',
                        caption: 'Advanced Data'
                    },
                    {
                        src: 'http://www.sencha.com/img/20110215-feat-html5.png',
                        caption: 'Overhauled Theme'
                    },
                    {
                        src: 'http://www.sencha.com/img/20110215-feat-perf.png',
                        caption: 'Performance Tuned'
                    }
                ]
            },


            itemSelector: 'div.thumb-wrap',
            emptyText: 'No data available',
            height: 200,
        };
        me.callParent(arguments);
    },
    widget: {
        xtype: 'panel',

        html: 'Hello, World!',
        height: 200,
    }
    /*
    plugins: {
        rowwidget: {
            // The widget definition describes a widget to be rendered into the
            // expansion row. It has access to the application's ViewModel
            // hierarchy. Its immediate ViewModel contains a record and
            // recordIndex property. These, or any property of the record
            // (including association stores) may be bound to the widget.
            //
            // See the Order model definition with the association declared to
            // Company. Every Company record will be decorated with an "orders"
            // method which, when called yields a store containing associated
            // orders.
            
        }
    }*/
});
