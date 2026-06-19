

Ext.define('Ext.tualo.grid.features.FixedSummary', {
    /* Begin Definitions */

    extend: 'Ext.grid.feature.AbstractSummary',

    alias: 'feature.tualofixedsummary',




    init: function (grid) {

        this.rendererField = this.rendererFieldName || 'fixedSummaryRenderer';
        this.summaryTypeField = this.summaryTypeFieldName || 'fixedSummaryType';

        //this.rendererField = this.rendererFieldName || 'summaryRenderer';
        //this.summaryTypeField = 'summaryType';

        this.xid = 'fixedsummarygrid-' + Ext.id();
        var cnf = {
            xtype: 'grid',
            dock: 'bottom',
            height: 30,
            itemId: this.xid,
            hideHeaders: true,
            store: Ext.create('Ext.data.ArrayStore', {
                fields: ['id'],
                data: [[
                    1, 2, 3, 4
                ]]
            }),
            columns: [

            ]
        };
        this.grid = grid;
        this.grid.dockedItems = this.grid.dockedItems || [];
        this.grid.dockedItems.push(cnf);
        this.isConfigured = false;
        this.grid.on({
            scope: this,
            boxready: this.onBoxReady,
            viewready: this.onSummarize
        });
    },
    onBoxReady: function () {


        this.sumGrid = this.grid.getDockedItems('grid[itemId="' + this.xid + '"]');
        if (this.sumGrid) {
            this.sumGrid = this.sumGrid[0];
            this.sumGrid.view.el.dom.style.overflowX = 'hidden';
            this.grid.on({
                scope: this,
                columnresize: this.onColumnResize,
                columnmove: this.onColumnMove,
                columnhide: this.onColumnHide,
                columnshow: this.onColumnShow,
                scroll: this.onScroll,
                reconfigure: this.onGridReconfigure
            });
            this.onGridReconfigure();

            if (this.onlySelected === true) {
                this.grid.on({
                    scope: this,
                    selectionchange: this.onSummarize
                });
            }

            this.grid.view.el.on({
                scope: this,
                scroll: this.onScroll
            });

            this.configureAll();
        }

    },
    onGridReconfigure: function () {
        this.isConfigured = false;
        this.configureAll();
        this.grid.getStore().on({
            scope: this,
            datachanged: this.onSummarize,
            load: this.onSummarize,
            refresh: this.onSummarize
        });
    },
    configureAll: function () {
        if (this.sumGrid) {
            if (this.isConfigured === false) {
                this.sumGrid.reconfigure(this.createSumStore(), this.getGridColumns());
                this.sumGrid.on('reconfigure', function () { });
                this.isConfigured = true;
            }
        }
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
                if (Ext.isFunction(type))
                    return store.aggregate(type, null, group, [field]);


                switch (type) {
                    case 'count':
                        return store.count(group);
                    case 'min':
                        return store.min(field, group);
                    case 'max':
                        return store.max(field, group);
                    case 'sum':
                        return store.sum(field, group);
                    case 'average':
                        return store.average(field, group);
                    default:
                        return group ? {} : '';
                }
            }
        }
        return '';
    },

    onSummarize: function () {
        this.configureAll();
        if (this.sumGrid) {
            var i, store = this.grid.getStore(), gridcolumns = this.grid.columns, m = gridcolumns.length;
            var summaryModel = Ext.create(this.sumGrid.getStore().model);
            //console.log(summaryModel);
            //summaryModel summaryTypeField
            for (i = 0; i < m; i++) {
                if (typeof gridcolumns[i][this.summaryTypeField] !== 'undefined') {
                    summaryModel.set(gridcolumns[i].dataIndex, this.getSummary(store, gridcolumns[i].fixedSummaryType, gridcolumns[i].dataIndex));
                }
            }
            var sumStore = this.sumGrid.getStore();
            sumStore.removeAll();
            summaryModel.commit();
            sumStore.add(summaryModel);
        }
        return true;
    },
    createSumStore: function () {
        var i, gridcolumns = this.grid.columns, m = gridcolumns.length, cnf = [];
        for (i = 0; i < m; i++) {
            var item = {
                name: gridcolumns[i].dataIndex,
                type: 'number'
            };
            cnf.push(item);
        }


        return Ext.create('Ext.data.ArrayStore', {
            fields: cnf,
            data: []
        });
    },
    getGridColumns: function () {
        var i, gridcolumns = this.grid.columns, m = gridcolumns.length, cnf = [];
        var defaultRenderer = function (v) { return ""; };
        var defaultVRenderer = function (v) { return ((Ext.isEmpty(v) || v == 0) ? '' : v); };
        for (i = 0; i < m; i++) {
            var renderer = defaultRenderer;
            if (typeof gridcolumns[i][this.summaryTypeField] !== 'undefined') {
                renderer = gridcolumns[i][this.rendererField] || defaultVRenderer;
            }



            var item = {
                text: gridcolumns[i].dataIndex,
                dataIndex: gridcolumns[i].dataIndex,
                align: gridcolumns[i].align,
                renderer: renderer,
                width: (typeof gridcolumns[i].getWidth === 'function') ? gridcolumns[i].getWidth() : 10
            };
            cnf.push(item);
        }
        return cnf;
    },

    onColumnResize: function (header, column, width, eoptions) {
        this.sumGrid.getView().getEl().setOpacity(0);
        clearTimeout(this._colResizeTimeOut);
        this._colResizeTimeOut = Ext.defer(this.syncColumnWidths, 50, this);
    },
    isScrollable: function (el) {
        var dom = el.dom;
        return {
            x: dom.scrollWidth > dom.clientWidth,
            y: dom.scrollHeight > dom.clientHeight
        };
    },
    syncColumnWidths: function () {
        this.configureAll();

        var columns = this.grid.columns,
            isGridScrollableY = this.isScrollable(this.grid.getView().getEl()).y,
            aCol;

        Ext.suspendLayouts();

        this.sumGrid.getView().getEl().dom.style.overflowY = (isGridScrollableY ? 'scroll' : 'hidden');
        var sumColumns = this.sumGrid.getColumns();
        for (var i = 0, j = columns.length; i < j; i++) {
            aCol = sumColumns[i];
            aCol.flex = null;
            aCol.setWidth((typeof columns[i].getWidth === 'function') ? columns[i].getWidth() : 10);
        }

        Ext.resumeLayouts(true);

        this.sumGrid.getView().getEl().setOpacity(1, true);
    },
    onColumnMove: function (header, column, fromIndex, toIndex, eoptions) {
        this.sumGrid.headerCt.move(fromIndex, toIndex);
        this.sumGrid.getView().refresh();
    },
    getColumnIndex: function (column) {
        var sumColumns = this.sumGrid.getColumns();
        for (var i = 0, j = sumColumns.length; i < j; i++) {
            if (sumColumns[i].dataIndex === column.dataIndex) {
                return i;
            }
        }
        return -1;
    },
    onColumnHide: function (header, column, eOpts) {
        var sumColumns = this.sumGrid.getColumns();
        var colIndex = this.getColumnIndex(column);
        if (colIndex === -1)
            return;
        sumColumns[colIndex].hide();
    },

    onColumnShow: function (header, column, eOpts) {
        var sumColumns = this.sumGrid.getColumns();
        var colIndex = this.getColumnIndex(column);

        if (colIndex === -1)
            return;

        sumColumns[colIndex].show();
    },
    onScroll: function (e, t, eoptions) {
        var scrollLeft = this.grid.view.el.getScroll().left,
            gridView = this.sumGrid.view;

        gridView.el.scrollTo('left', scrollLeft);
    }
});
