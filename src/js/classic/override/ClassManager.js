Ext.define('Override.Ext.ClassManager', {
    override: 'Ext.ClassManager',
    instantiateByAlias: function() {
      var alias = arguments[0],
          args = arraySlice.call(arguments),
          className = this.getNameByAlias(alias);
  
      if (!className) {
          console.error("[Ext.createByAlias] Unrecognized alias: " + alias);
      }
       
    //<debug>
    if (!className) {
        throw new Error("[Ext.createByAlias] Unrecognized alias: " + alias);
    }
    //</debug>
    
      args[0] = className;
      return Ext.create.apply(Ext, args);
  }
  });