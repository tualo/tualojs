


/**
 * This feature is used to place a summary row at the bottom of the grid. If using a grouping,
 * see {@link Ext.grid.feature.GroupingSummary}. There are 2 aspects to calculating the summaries,
 * calculation and rendering.
 *
 * ## Calculation
 * The summary value needs to be calculated for each column in the grid. This is controlled
 * by the summaryType option specified on the column. There are several built in summary types,
 * which can be specified as a string on the column configuration. These call underlying methods
 * on the store:
 *
 *  - {@link Ext.data.Store#count count}
 *  - {@link Ext.data.Store#sum sum}
 *  - {@link Ext.data.Store#min min}
 *  - {@link Ext.data.Store#max max}
 *  - {@link Ext.data.Store#average average}
 *
 * Alternatively, the summaryType can be a function definition. If this is the case,
 * the function is called with an array of records to calculate the summary value.
 *
 * ## Rendering
 * Similar to a column, the summary also supports a summaryRenderer function. This
 * summaryRenderer is called before displaying a value. The function is optional, if
 * not specified the default calculated value is shown. The summaryRenderer is called with:
 *
 *  - value {Object} - The calculated value.
 *  - summaryData {Object} - Contains all raw summary values for the row.
 *  - field {String} - The name of the field we are calculating
 *  - metaData {Object} - A collection of metadata about the current cell; can be used or modified by the renderer.
 *
 * ## Example Usage
 *
 *     @example
 *     Ext.define('TestResult', {
 *         extend: 'Ext.data.Model',
 *         fields: ['student', {
 *             name: 'mark',
 *             type: 'int'
 *         }]
 *     });
 *
 *     Ext.create('Ext.grid.Panel', {
 *         width: 400,
 *         height: 200,
 *         title: 'Summary Test',
 *         style: 'padding: 20px',
 *         renderTo: document.body,
 *         features: [{
 *             ftype: 'summary'
 *         }],
 *         store: {
 *             model: 'TestResult',
 *             data: [{
 *                 student: 'Student 1',
 *                 mark: 84
 *             },{
 *                 student: 'Student 2',
 *                 mark: 72
 *             },{
 *                 student: 'Student 3',
 *                 mark: 96
 *             },{
 *                 student: 'Student 4',
 *                 mark: 68
 *             }]
 *         },
 *         columns: [{
 *             dataIndex: 'student',
 *             text: 'Name',
 *             summaryType: 'count',
 *             summaryRenderer: function(value, summaryData, dataIndex) {
 *                 return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
 *             }
 *         }, {
 *             dataIndex: 'mark',
 *             text: 'Mark',
 *             summaryType: 'average'
 *         }]
 *     });
 */
Ext.define('Ext.tualo.grid.features.FixedSummary', {
    /* Begin Definitions */

    extend: 'Ext.grid.feature.AbstractSummary',

    alias: 'feature.tualofixedsummary',
});

if (false) {
    Ext.define('Ext.tualo.grid.features.FixedSummaryX', {
        /**
         * @cfg {String} dock 
         * Configure `'top'` or `'bottom'` top create a fixed summary row either above or below the scrollable table.
         *
         */
        dock: undefined,

        summaryItemCls: Ext.baseCSSPrefix + 'grid-row-summary-item',
        dockedSummaryCls: Ext.baseCSSPrefix + 'docked-summary',

        summaryRowCls: Ext.baseCSSPrefix + 'grid-row-summary ' + Ext.baseCSSPrefix + 'grid-row-total',
        summaryRowSelector: '.' + Ext.baseCSSPrefix + 'grid-row-summary.' + Ext.baseCSSPrefix + 'grid-row-total',

        panelBodyCls: Ext.baseCSSPrefix + 'summary-',

        // turn off feature events. 
        hasFeatureEvent: false,


        'rendererFieldName': 'summaryRenderer',
        'summaryTypeFieldName': 'fixedSummaryType',

        onlySelected: false,
        getFNFromString: function (str) {
            var l = str.split('.');
            var current = window;
            for (var i = 0; i < l.length - 1; i++) {
                if (typeof current[l[i]] == 'object') {
                    current = current[l[i]];
                }
            }
            if (typeof current[l[l.length - 1]] == 'function') {
                return current[l[l.length - 1]];
            }
            return str;
        },

        createRenderer: function (column, record) {
            var me = this,
                ownerGroup = record.ownerGroup,
                summaryData = ownerGroup ? me.summaryData[ownerGroup] : me.summaryData,
                // Use the column.getItemId() for columns without a dataIndex. The populateRecord method does the same. 
                dataIndex = column.dataIndex || column.getItemId();

            if (typeof column[me.rendererFieldName] == 'string') {
                column[me.rendererFieldName] = me.getFNFromString(column[me.rendererFieldName]);
            }

            return function (value, metaData) {
                var fn = column[me.rendererFieldName];
                if (typeof fn != 'function') {
                    return record.data[dataIndex];
                }
                return fn ?
                    fn(record.data[dataIndex], summaryData, dataIndex, metaData) :
                    // For no summaryRenderer, return the field value in the Feature record. 
                    record.data[dataIndex];
            };
        },
        noRenderer: function (val) {
            return val;
        },

        outputSummaryRecord: function (summaryRecord, contextValues, out) {
            var view = contextValues.view,
                savedRowValues = view.rowValues,
                columns = contextValues.columns || view.headerCt.getVisibleGridColumns(),
                colCount = columns.length, i, column,
                // Set up a row rendering values object so that we can call the rowTpl directly to inject 
                // the markup of a grid row into the output stream. 
                values = {
                    view: view,
                    record: summaryRecord,
                    rowStyle: '',
                    rowClasses: [this.summaryRowCls, this.summaryItemCls],
                    itemClasses: [],
                    recordIndex: -1,
                    rowId: view.getRowId(summaryRecord),
                    columns: columns
                };

            // Because we are using the regular row rendering pathway, temporarily swap out the renderer for the summaryRenderer 
            for (i = 0; i < colCount; i++) {
                column = columns[i];
                column.savedRenderer = column.renderer;

                if (column[this.summaryTypeFieldName] || column[this.rendererFieldName]) {
                    column.renderer = this.createRenderer(column, summaryRecord);
                } else {
                    // console.log('empty', column);
                    column.renderer = this.noRenderer;
                }
            }

            // Use the base template to render a summary row 
            view.rowValues = values;
            view.self.prototype.rowTpl.applyOut(values, out, parent);
            view.rowValues = savedRowValues;

            // Restore regular column renderers 
            for (i = 0; i < colCount; i++) {
                column = columns[i];
                column.renderer = column.savedRenderer;
                column.savedRenderer = null;
            }
        },


        fullSummaryTpl: {
            fn: function (out, values, parent) {
                var me = this.summaryFeature,
                    record = me.summaryRecord,
                    view = values.view,
                    bufferedRenderer = view.bufferedRenderer;

                this.nextTpl.applyOut(values, out, parent);

                if (!me.disabled && me.showSummaryRow && !view.addingRows && view.store.isLast(values.record)) {
                    if (bufferedRenderer && !me.dock) {
                        bufferedRenderer.variableRowHeight = true;
                    }
                    me.outputSummaryRecord((record && record.isModel) ? record : me.createSummaryRecord(view), values, out, parent);
                }
            },

            priority: 300,

            beginRowSync: function (rowSync) {
                rowSync.add('fullSummary', this.summaryFeature.summaryRowSelector);
            },

            syncContent: function (destRow, sourceRow, columnsToUpdate) {
                destRow = Ext.fly(destRow, 'syncDest');
                sourceRow = Ext.fly(sourceRow, 'sycSrc');
                var summaryFeature = this.summaryFeature,
                    selector = summaryFeature.summaryRowSelector,
                    destSummaryRow = destRow.down(selector, true),
                    sourceSummaryRow = sourceRow.down(selector, true);

                // Sync just the updated columns in the summary row. 
                if (destSummaryRow && sourceSummaryRow) {

                    // If we were passed a column set, only update those, otherwise do the entire row 
                    if (columnsToUpdate) {
                        this.summaryFeature.view.updateColumns(destSummaryRow, sourceSummaryRow, columnsToUpdate);
                    } else {
                        Ext.fly(destSummaryRow).syncContent(sourceSummaryRow);
                    }
                }
            }
        },

        init: function (grid) {
            var me = this,
                view = me.view,
                dock = me.dock;

            me.callParent([grid]);

            if (dock) {
                grid.addBodyCls(me.panelBodyCls + dock);
                grid.headerCt.on({
                    add: me.onStoreUpdate,
                    // we need to fire onStoreUpdate afterlayout for docked items 
                    // to re-run the renderSummaryRow on show/hide columns. 
                    afterlayout: me.onStoreUpdate,
                    remove: me.onStoreUpdate,
                    scope: me
                });

                grid.on({

                    beforerender: function () {
                        var tableCls = [me.summaryTableCls];
                        if (view.columnLines) {
                            tableCls[tableCls.length] = view.ownerCt.colLinesCls;
                        }
                        me.summaryBar = grid.addDocked({
                            childEls: ['innerCt', 'item'],
                            renderTpl: [
                                '<div id="{id}-innerCt" data-ref="innerCt" role="presentation">',
                                '<table id="{id}-item" data-ref="item" cellPadding="0" cellSpacing="0" class="' + tableCls.join(' ') + '">',
                                '<tr class="' + me.summaryRowCls + '"></tr>',
                                '</table>',
                                '</div>'
                            ],
                            scrollable: {
                                x: false,
                                y: false
                            },
                            hidden: !me.showSummaryRow,
                            itemId: 'summaryBar',
                            cls: [me.dockedSummaryCls, me.dockedSummaryCls + '-' + dock],
                            xtype: 'component',
                            dock: dock,
                            weight: 10000000
                        })[0];
                    },
                    afterrender: function () {
                        grid.getView().getScrollable().addPartner(me.summaryBar.getScrollable(), 'x');
                        me.onStoreUpdate();
                        me.columnSizer = me.summaryBar.el;
                    },
                    single: true
                });
            } else {
                if (grid.bufferedRenderer) {
                    me.wrapsItem = true;
                    view.addRowTpl(me.fullSummaryTpl).summaryFeature = me;
                    view.on('refresh', me.onViewRefresh, me);
                } else {
                    me.wrapsItem = false;
                    me.view.addFooterFn(me.renderSummaryRow);
                }
            }

            grid.on('selectionchange', function () {
                console.log('selectionchange', this.summaryRecord);
                this.createSummaryRecord(this.view);
            }, this);

            grid.headerCt.on({
                afterlayout: me.afterHeaderCtLayout,
                scope: me
            });

            grid.ownerGrid.on({
                beforereconfigure: me.onBeforeReconfigure,
                columnmove: me.onStoreUpdate,
                scope: me
            });
            me.bindStore(grid, grid.getStore());
        },

        onBeforeReconfigure: function (grid, store) {
            this.summaryRecord = null;

            if (store) {
                this.bindStore(grid, store);
            }
        },

        bindStore: function (grid, store) {
            var me = this;

            Ext.destroy(me.storeListeners);
            me.storeListeners = store.on({
                scope: me,
                destroyable: true,
                update: me.onStoreUpdate,
                datachanged: me.onStoreUpdate
            });

            me.callParent([grid, store]);
        },

        renderSummaryRow: function (values, out, parent) {
            var view = values.view,
                me = view.findFeature('summary'),
                record;

            // If we get to here we won't be buffered 
            if (!me.disabled && me.showSummaryRow && !view.addingRows && !view.updatingRows) {
                record = me.summaryRecord;

                out.push('<table cellpadding="0" cellspacing="0" class="' + me.summaryItemCls + '" style="table-layout: fixed; width: 100%;">');
                me.outputSummaryRecord((record && record.isModel) ? record : me.createSummaryRecord(view), values, out, parent);
                out.push('</table>');
            }
        },

        toggleSummaryRow: function (visible, fromLockingPartner) {
            var me = this,
                bar = me.summaryBar;

            me.callParent([visible, fromLockingPartner]);
            if (bar) {
                bar.setVisible(me.showSummaryRow);
                me.onViewScroll();
            }
        },

        getSummaryBar: function () {
            return this.summaryBar;
        },

        configureAll: function () {
        },

        getSummaryRowPlaceholder: function (view) {
            var placeholderCls = this.summaryItemCls,
                nodeContainer, row;

            nodeContainer = Ext.fly(view.getNodeContainer());

            if (!nodeContainer) {
                return null;
            }

            row = nodeContainer.down('.' + placeholderCls, true);

            if (!row) {
                row = nodeContainer.createChild({
                    tag: 'table',
                    cellpadding: 0,
                    cellspacing: 0,
                    cls: placeholderCls,
                    style: 'table-layout: fixed; width: 100%',
                    children: [{
                        tag: 'tbody' // Ensure tBodies property is present on the row 
                    }]
                }, false, true);
            }

            return row;
        },

        vetoEvent: function (record, row, rowIndex, e) {
            return !e.getTarget(this.summaryRowSelector);
        },

        onViewScroll: function () {
            this.summaryBar.setScrollX(this.view.getScrollX());
        },

        onViewRefresh: function (view) {
            var me = this,
                record, row;
            /*
            // Only add this listener if in buffered mode, if there are no rows then 
            // we won't have anything rendered, so we need to push the row in here 
            if (!me.disabled && me.showSummaryRow && !view.all.getCount()) {
    
                console.log('------------------->>>>>>>>>>', me.summaryRowSelector);
                console.log('------------------->>>>>>>>>>', me.summaryRowSelector);
                setTimeout(
                    function () {
                        record = me.createSummaryRecord(view);
                        row = me.getSummaryRowPlaceholder(view);
                        console.log(row.tBodies);
                        try {
                            var v = view.createRowElement(record, -1);
                            var c = v.querySelector(me.summaryRowSelector);
                            console.log(record, v, c);
                            row.tBodies[0].appendChild(c);
                        } catch (e) {
                            console.log(e);
                        }
                    }.bind(this), 1000
                )
            }
                */
        },

        createSummaryRecord: function (view) {
            var me = this,
                columns = view.headerCt.getGridColumns(),
                remoteRoot = me.remoteRoot,
                summaryRecord = me.summaryRecord || (me.summaryRecord = new Ext.data.Model({
                    id: view.id + '-summary-record'
                })),
                colCount = columns.length, i, column,
                dataIndex, summaryValue;

            // Set the summary field values 
            summaryRecord.beginEdit();

            if (remoteRoot) {
                summaryValue = me.generateSummaryData();

                if (summaryValue) {
                    summaryRecord.set(summaryValue);
                }
            }
            else {
                for (i = 0; i < colCount; i++) {
                    column = columns[i];

                    // In summary records, if there's no dataIndex, then the value in regular rows must come from a renderer. 
                    // We set the data value in using the column ID. 
                    dataIndex = column.dataIndex || column.getItemId();

                    // We need to capture this value because it could get overwritten when setting on the model if there 
                    // is a convert() method on the model. 
                    summaryValue = me.getSummary(view.store, column[this.summaryTypeFieldName], dataIndex);
                    summaryRecord.set(dataIndex, summaryValue);

                    // Capture the columnId:value for the summaryRenderer in the summaryData object. 
                    me.setSummaryData(summaryRecord, column.getItemId(), summaryValue);
                }
            }

            summaryRecord.endEdit(true);
            // It's not dirty 
            summaryRecord.commit(true);
            summaryRecord.isSummary = true;

            return summaryRecord;
        },

        count: function (recs) {
            return recs.length;
        },
        sum: function (recs, field) {
            var sum = 0, i, m = recs.length;
            for (i = 0; i < m; i++) {
                sum += recs[i].get(field);
            }
            return sum;
        },
        average: function (recs, field) {
            return this.sum(recs, field) / recs.length;
        },

        getSummary: function (store, type, field, group) {
            var isGrouped = !!group,
                item = isGrouped ? group : store;

            if (type) {
                if (this.onlySelected === true) {

                    var recs = this.grid.getSelectionModel().getSelection();

                    switch (type) {
                        case 'count':
                            return this.count(recs, group);
                        case 'sum':
                            return this.sum(recs, field, group);
                        case 'average':
                            return this.average(recs, field, group);
                        default:
                            return '';
                    }
                } else {
                    if (Ext.isFunction(type)) {
                        if (isGrouped) {
                            return item.aggregate(field, type);
                        } else {
                            return item.aggregate(type, null, false, [field]);
                        }
                    }

                    switch (type) {
                        case 'count':
                            return item.count();
                        case 'min':
                            return item.min(field);
                        case 'max':
                            return item.max(field);
                        case 'sum':
                            return item.sum(field);
                        case 'average':
                            return item.average(field);
                        default:
                            return '';

                    }
                }
            }
        },


        onStoreUpdate: function () {
            var me = this,
                view = me.view,
                selector = me.summaryRowSelector,
                dock = me.dock,
                record, newRowDom, oldRowDom, p;

            if (!view.rendered) {
                return;
            }

            record = me.createSummaryRecord(view);
            newRowDom = Ext.fly(view.createRowElement(record, -1)).down(selector, true);


            if (!newRowDom) {
                return;
            }


            // Summary row is inside the docked summaryBar Component 
            if (dock) {
                p = me.summaryBar.item.dom.firstChild;
                oldRowDom = p.firstChild;

                p.insertBefore(newRowDom, oldRowDom);
                p.removeChild(oldRowDom);
            }
            // Summary row is a regular row in a THEAD inside the View. 
            // Downlinked through the summary record's ID 
            else {
                oldRowDom = view.el.down(selector, true);
                p = oldRowDom && oldRowDom.parentNode;

                if (p) {
                    p.removeChild(oldRowDom);
                }

                // We're always inserting the new summary row into the last rendered row, 
                // unless no rows exist. In that case we will be appending to the special 
                // placeholder in the node container. 
                p = view.getRow(view.all.last());

                if (p) {
                    p = p.parentElement;
                }
                // View might not have nodeContainer yet. 
                else {
                    p = me.getSummaryRowPlaceholder(view);
                    p = p && p.tBodies && p.tBodies[0];
                }

                if (p) {
                    p.appendChild(newRowDom);
                }
            }
        },

        // Synchronize column widths in the docked summary Component or the inline summary row 
        // depending on whether we are docked or not. 
        afterHeaderCtLayout: function (headerCt) {
            var me = this,
                view = me.view,
                columns = view.getVisibleColumnManager().getColumns(),
                column,
                len = columns.length, i,
                summaryEl,
                el, width, innerCt;

            if (me.showSummaryRow && view.refreshCounter) {
                if (me.dock) {
                    summaryEl = me.summaryBar.el;
                    width = headerCt.getTableWidth();
                    innerCt = me.summaryBar.innerCt;

                    // Stretch the innerCt of the summary bar upon headerCt layout 
                    me.summaryBar.item.setWidth(width);

                    // headerCt's tooNarrow flag is set by its layout if the columns overflow. 
                    // Must not measure+set in after layout phase, this is a write phase. 
                    if (headerCt.tooNarrow) {
                        width += Ext.getScrollbarSize().width;
                    }
                    innerCt.setWidth(width);
                } else {
                    summaryEl = Ext.fly(Ext.fly(view.getNodeContainer()).down('.' + me.summaryItemCls, true));
                }

                // If the layout was in response to a clearView, there'll be no summary element 
                if (summaryEl) {
                    for (i = 0; i < len; i++) {
                        column = columns[i];
                        el = summaryEl.down(view.getCellSelector(column), true);
                        if (el) {
                            Ext.fly(el).setWidth(column.width || (column.lastBox ? column.lastBox.width : 100));
                        }
                    }
                }
            }
        },

        destroy: function () {
            var me = this;
            me.summaryRecord = me.storeListeners = Ext.destroy(me.storeListeners);
            me.callParent();
        }
    });
}