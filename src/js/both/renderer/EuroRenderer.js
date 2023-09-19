Ext.define('Tualo.tualojs.Format', {
    singleton: true,
    euroRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        if (value===null || value===undefined) return '';
        return Ext.util.Format.number(value,'0,000.00 €');
    },
    fullPercentRenderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        if (value===null || value===undefined) return '';
        return Ext.util.Format.number(value,'0,000 %');
    },
    CSSMetaRenderer: function(val,meta,rec){
        try{
          var key = 'cssstyle';
          if (rec.store.tablename){
            key='cssstyle';
          }
      
          if (typeof rec.get(key)=='string'){
            meta.tdStyle=rec.get(key)+'';
          }
        }catch(e){
          console.error(e);
        }
        return val;
    },
    backgroundColorMetaRenderer: function(val,meta,rec){

        var key = 'hexcolor';
        if (rec.store.tablename){
          key='hexcolor';
        }
        if (typeof rec.get(key)=='string'){
          meta.tdStyle='background-color:'+rec.get(key)+';';
        }
        return val;
    },
    deValueRenderer: function(val,meta,rec){
        return Ext.util.Format.number(val,'0.000,00/i');
    },
    deNatualRenderer: function(val,meta,rec){
        return Ext.util.Format.number(val,'0.000/i');
    },
    deDateTime: function(val,meta,rec){
        return Ext.util.Format.date(val,'d.m.Y H:i');
    },
    deDate: function(val,meta,rec){
        return Ext.util.Format.date(val,'d.m.Y');
    }
});

Ext.merge(Ext.util.Format, {
    euroRenderer: Tualo.tualojs.Format.euroRenderer,
    deMoneyRenderer: Tualo.tualojs.Format.euroRenderer,
    fullPercentRenderer: Tualo.tualojs.Format.fullPercentRenderer,
    CSSMetaRenderer: Tualo.tualojs.Format.CSSMetaRenderer,
    'Tualo.renderer.CSSMetaRenderer': Tualo.tualojs.Format.CSSMetaRenderer,
    BackgroundColorMetaRenderer: Tualo.tualojs.Format.backgroundColorMetaRenderer,
    deValueRenderer: Tualo.tualojs.Format.deValueRenderer,
    deNatualRenderer: Tualo.tualojs.Format.deNatualRenderer,
    deDate: Tualo.tualojs.Format.deDate,
    deDateTime: Tualo.tualojs.Format.deDateTime
});