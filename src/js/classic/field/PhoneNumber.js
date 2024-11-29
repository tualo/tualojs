Ext.define('Ext.tualo.form.field.PhoneNumber',  {
    alias: 'widget.tualophonenumber',
    extend: 'Ext.form.field.Text',
    /*
    ,
    */
    onChange: function(newVal, oldVal) {
        var me = this;
        document.getElementById(me.id+'-trigger-makeacall').setAttribute("href","tel:"+me.getValue());
        if (me.getValue()==''){
            document.getElementById(me.id+'-trigger-makeacall').setAttribute("href","javascript: void(0)");
        }
        me.callParent([newVal, oldVal]);
    },
    triggers: {
        makeacall: {
            cls: 'fa-phone',
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
})


Ext.define('Ext.tualo.form.field.PhoneNumberReadonly',  {
    alias: 'widget.tualophonenumberreadonly',
    extend: 'Ext.form.field.Text',
    readOnly: true,
    onChange: function(newVal, oldVal) {
        var me = this;
        document.getElementById(me.id+'-trigger-makeacall').setAttribute("href","tel:"+me.getValue());
        if (me.getValue()==''){
            document.getElementById(me.id+'-trigger-makeacall').setAttribute("href","javascript: void(0)");
        }
        me.callParent([newVal, oldVal]);
    },
    triggers: {
        makeacall: {
            cls: 'fa-phone',
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
})

Ext.merge(Ext.util.Format, {
    phonenumberLinkRenderer: function(val,meta,rec){
        const validatePhoneNumberRegex = /^\+?[0-9][0-9]{7,14}$/;
        let simple = val.replace(/[^0-9\+]/g,'')
        if ( validatePhoneNumberRegex.test(simple) ){
            return '<a href="tel:'+simple+'">'+val+'</a>';
        }else{
            return val;
        }
    }
})