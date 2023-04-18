Ext.ns('Tualo.renderer');
Tualo.renderer.BackgroundColorMetaRenderer =function(val,meta,rec){

  var key = 'hexcolor';
  if (rec.store.tablename){
    key=rec.store.tablename+'__hexcolor';
  }
  if (typeof rec.get(key)=='string'){
    meta.tdStyle='background-color:'+rec.get(key)+';';
  }
  return val;
}


Tualo.renderer.CSSMetaRenderer =function(val,meta,rec){

  var key = 'cssstyle';
  if (rec.store.tablename){
    key=rec.store.tablename+'__cssstyle';
  }

  if (typeof rec.get(key)=='string'){
    meta.tdStyle=rec.get(key)+'';
  }
  return val;
};


Tualo.renderer.deMoneyRenderer = function(val,meta,rec){
  return Ext.util.Format.number(val,'0.000,00/i')+' €';
};

Tualo.renderer.deValueRenderer = function(val,meta,rec){
  return Ext.util.Format.number(val,'0.000,00/i');
};
