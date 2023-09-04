Ext.define('Ext.tualo.form.field.FileText',  {
    alias: 'widget.tualofiletext',
    extend: 'Ext.form.field.Text',
    /*
    ,
    */
    onChange: function(newVal, oldVal) {
        var me = this;
        document.getElementById(me.id+'-trigger-makeacall').setAttribute("href","file:"+me.getValue());
        if (me.getValue()==''){
            document.getElementById(me.id+'-trigger-makeacall').setAttribute("href","javascript: void(0)");
        }
        me.callParent([newVal, oldVal]);
    },
    triggers: {
        makeacall: {
            cls: 'fa-folder',
            renderTpl: [
                '<a href="javascript: void(0)" id="{triggerId}" class="{baseCls} {baseCls}-{ui} {cls} {cls}-{ui} {extraCls} ',
                        '{childElCls}" style="width: 32px;<tpl if="triggerStyle">{triggerStyle}</tpl>"',
                        '<tpl if="ariaRole"> role="{ariaRole}"<tpl else> role="presentation"</tpl>',
                    '>',
                    '{[values.$trigger.renderBody(values)]}',
                '</a>'
            ],
            
            handler: function(me) {
                
                
            }
        }
    }
});
