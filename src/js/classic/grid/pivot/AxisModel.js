Ext.define('Ext.tualo.grid.pivot.AxisModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tualoremotepivotgridaxismodel',
    data: {
        text: 'Spalte',
        textFunction: 'Funktion',
        showFunction: false,
        textFilter: 'Filter',
        showFilter: false,
        showNumberFilter: false,

        selectText: 'ausw&auml;hlen',
        unselectText: 'aufheben',
        unfilteredText: '<span style="opacity:0.4">Ungefiltert</span>',
        applyFilterText: 'Anwenden',
        clearFilterText: 'nicht Filtern',
        cancelFilterText: 'Abbrechen',
    },
    formulas: {
        hiddenFilter: function(get){
            return !get('showFilter'); 
        },
        hiddenNumberFilter: function(get){
            return !get('showNumberFilter'); 
        },
        hiddenFunction: function(get){
            return !get('showFunction'); 
        }
    },
    stores: {
      aggregate:{
  
      }
    }
  });
  