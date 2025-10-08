Ext.define('Tualo.tualojs.Format.Renderer', {
  singleton: true,
  euroRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
    if (value === null || value === undefined) return '';
    return Ext.util.Format.number(value, '0,000.00 €');
  },
  deColoredMoneyRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
    if (value === null || value === undefined) return '';
    if (metaData === null || metaData === undefined) metaData = {};
    if (value > 0) {
      metaData.tdStyle = 'color: green;';
      // return '<span style="color:green;">'+Ext.util.Format.number(value,'0,000.00 €')+'</span>';
    }
    if (value < 0) {
      metaData.tdStyle = 'color: red;';
      // return '<span style="color:red;">'+Ext.util.Format.number(value,'0,000.00 €')+'</span>';
    }
    return Ext.util.Format.number(value, '0,000.00 €');
  },
  fullPercentRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
    if (value === null || value === undefined) return '';
    return Ext.util.Format.number(value, '0,000 %');
  },
  dePercentRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
    if (value === null || value === undefined) return '';
    return Ext.util.Format.number(value * 100, '0,000 %');
  },
  CSSMetaRenderer: function (val, meta, rec) {
    try {
      var key = 'cssstyle';
      /*
      if (rec.store.tablename){
        key='cssstyle';
      }*/

      if (typeof rec.get(key) == 'string') {
        meta.tdStyle = rec.get(key) + '';
      }
    } catch (e) {
      console.error(e);
    }
    return val;
  },
  backgroundColorMetaRenderer: function (val, meta, rec) {

    var key = 'hexcolor';
    if (rec.store.tablename) {
      key = 'hexcolor';
    }
    if (typeof rec.get(key) == 'string') {
      meta.tdStyle = 'background-color:' + rec.get(key) + ';';
    }
    return val;
  },
  deValueRenderer: function (val, meta, rec) {
    return Ext.util.Format.number(val, '0.000,00/i');
  },
  deNatualRenderer: function (val, meta, rec) {
    return Ext.util.Format.number(val, '0.000/i');
  },
  deDateTime: function (val, meta, rec) {
    return Ext.util.Format.date(val, 'd.m.Y H:i');
  },
  deTime: function (val, meta, rec) {
    return Ext.util.Format.date(val, 'H:i:s');
  },
  deDate: function (val, meta, rec) {
    return Ext.util.Format.date(val, 'd.m.Y');
  },
  deWeekday: function (val, meta, rec) {
    let dayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    if (val === null || val === undefined) return '';
    return dayNames[val];
  },
  deMonth: function (val, meta, rec) {
    let monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    if (val === null || val === undefined) return '';
    return monthNames[val - 1];
  },
  deShortDate: function (val, meta, rec) {
    return Ext.util.Format.date(val, 'd.m');
  },
  checkRenderer: function (val, meta, rec) {
    if (val) {
      return '<i class="fa fa-check"></i>';
    } else {
      return '<i class="fa fa-square-o"></i>';
    }
  }
});

Ext.merge(Ext.util.Format, {
  euroRenderer: Tualo.tualojs.Format.Renderer.euroRenderer,
  deMoneyRenderer: Tualo.tualojs.Format.Renderer.euroRenderer,
  deColoredMoneyRenderer: Tualo.tualojs.Format.Renderer.deColoredMoneyRenderer,
  fullPercentRenderer: Tualo.tualojs.Format.Renderer.fullPercentRenderer,
  dePercentRenderer: Tualo.tualojs.Format.Renderer.dePercentRenderer,
  CSSMetaRenderer: Tualo.tualojs.Format.Renderer.CSSMetaRenderer,
  BackgroundColorMetaRenderer: Tualo.tualojs.Format.Renderer.backgroundColorMetaRenderer,
  deValueRenderer: Tualo.tualojs.Format.Renderer.deValueRenderer,
  deNatualRenderer: Tualo.tualojs.Format.Renderer.deNatualRenderer,
  deDate: Tualo.tualojs.Format.Renderer.deDate,
  deMonth: Tualo.tualojs.Format.Renderer.deMonth,
  deWeekday: Tualo.tualojs.Format.Renderer.deWeekday,
  deShortDate: Tualo.tualojs.Format.Renderer.deShortDate,
  deDateTime: Tualo.tualojs.Format.Renderer.deDateTime,
  deTime: Tualo.tualojs.Format.Renderer.deTime,
  checkRenderer: Tualo.tualojs.Format.Renderer.checkRenderer
});