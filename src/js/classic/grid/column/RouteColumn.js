Ext.define('Tualo.grid.column.Routes', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.tualo_route_column',
    align: 'left',
   
    
    requires: ['Ext.XTemplate'],
    preventUpdate: true,
    stopSelection: true,
    tpl: '{}',
    initComponent: function() {
        var me = this;

        let tpl = '';
        me.config.routes.forEach((elm)=>{
            let target='_self';
            if (elm.target){
                target=elm.target;
            }
            tpl+='<a href="'+elm.route+'" target="'+target+'"><i class="'+elm.iconCls+'"></i></a>&nbsp;';
        });
        me.tpl = tpl;

        me.width = (me.config.routes.length+1)*14 + 32;
        me.isFixedSize = true;
 
        me.tpl = (!Ext.isPrimitive(me.tpl) && me.tpl.compile) ? me.tpl : new Ext.XTemplate(me.tpl);
 
        // Set this here since the template may access any record values,
        // so we must always run the update for this column
        me.hasCustomRenderer = true;
        me.callParent();
    },
 
    defaultRenderer: function(value, meta, record) {
        var data = Ext.apply({}, record.data, record.getAssociatedData());
 
        return this.tpl.apply(data);
    },
 
    updater: function(cell, value) {
        Ext.fly(cell).down(this.getView().innerSelector, true).innerHTML =
            Ext.grid.column.CheckColumn.prototype.defaultRenderer.call(this, value);
    }
});