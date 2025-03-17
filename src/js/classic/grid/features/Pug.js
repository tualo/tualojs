Ext.define('Tualo.pug.Component', {
    extend: 'Ext.Component',
    alias: 'widget.tualopug',
    html: 'nothing done!',
    config: {
        record: null
    },
    applyRecord: function (record) {
        console.log('getSize tualopug', this.getSize());
        console.log('applyRecord tualopug', record);
        this.refreshRecordData(record);
    },
    updateRecord: function (record) {
        console.log('getSize tualopug', this.getSize());
        console.log('updateRecord tualopug', record);
    },

    refreshRecordData: function (record) {
        var me = this;
        if (typeof me.setHtml == 'function') {

            if (me.getSize().height > 0) {
                console.log('refreshRecordData', record);

                fetch('./pug/local/html/' + record.get('__table_name') + '/' + (record.get('using_pug_template') || 'plain') + '/' + record.get('__id'), {
                    method: 'POST',
                    body: JSON.stringify(record.data)
                })
                    .then(response => response.text())
                    .then(text => {
                        me.setHtml(text);
                    }
                    );
            };
        }
    }
});

Ext.define('Tualo.grid.plugin.Linker', {
    extend: 'Ext.grid.plugin.RowWidget',
    alias: 'plugin.tualopug',
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
                    ? 'fa-eye-slash'
                    : 'fa-eye');
                try {
                    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', record.internalId);
                    // me.refreshRecordData(record);
                } catch (e) {
                    console.error(e);
                }


                return '<div class="fa fas ' + cls + '" role="presentation" tabIndex="-1"></div>';
            },
            processEvent: function (type, view, cell, rowIndex, cellIndex, e, record) {
                var isTouch = e.pointerType === 'touch',
                    isExpanderClick = !!e.getTarget('.fa-eye');

                console.log('processEvent', arguments);
                if ((type === "click" && isExpanderClick) ||
                    (type === 'keydown' && e.getKey() === e.SPACE)) {

                    // Focus the cell on real touch tap.
                    // This is because the toggleRow saves and restores focus
                    // which may be elsewhere than clicked on causing a scroll jump.
                    if (isTouch) {
                        cell.focus();
                    }
                    //me.refreshRecordData(record);

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
    /*
        }
    },*/
    widget: {
        xtype: 'tualopug',
        bind: {
            record: {
                deep: true,
                bindTo: '{record}'
            }
        },
        height: 200,
    },
});
