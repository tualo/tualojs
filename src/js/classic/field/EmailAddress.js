Ext.define('Ext.tualo.form.field.EmailAddress', {
    alias: 'widget.tualomailaddress',
    extend: 'Ext.form.field.Text',
    /*
    ,
    */
    onChange: function (newVal, oldVal) {
        var me = this;
        if (!document.getElementById(me.id + '-trigger-makeacall')) return;
        document.getElementById(me.id + '-trigger-makeacall').setAttribute("href", "mailto:" + me.getValue());
        if (me.getValue() == '') {
            document.getElementById(me.id + '-trigger-makeacall').setAttribute("href", "javascript: void(0)");
        }
        me.callParent([newVal, oldVal]);
    },
    triggers: {
        makeacall: {
            cls: 'fa-at',
            renderTpl: [
                '<a href="javascript: void(0)" id="{triggerId}" class="{baseCls} {baseCls}-{ui} {cls} {cls}-{ui} {extraCls} ',
                '{childElCls}" style="width: 32px;<tpl if="triggerStyle">{triggerStyle}</tpl>"',
                '<tpl if="ariaRole"> role="{ariaRole}"<tpl else> role="presentation"</tpl>',
                '>',
                '{[values.$trigger.renderBody(values)]}',
                '</a>'
            ],

            handler: function (me) {


            }
        }
    }
});

Ext.define('Ext.tualo.form.field.EmailAddressReadonly', {
    alias: 'widget.tualomailaddressreadonly',
    extend: 'Ext.form.field.Text',
    readOnly: true,
    onChange: function (newVal, oldVal) {
        var me = this;
        if (!document.getElementById(me.id + '-trigger-makeacall')) return;
        document.getElementById(me.id + '-trigger-makeacall').setAttribute("href", "mailto:" + me.getValue());
        if (me.getValue() == '') {
            document.getElementById(me.id + '-trigger-makeacall').setAttribute("href", "javascript: void(0)");
        }
        me.callParent([newVal, oldVal]);
    },
    triggers: {
        makeacall: {
            cls: 'fa-at',
            renderTpl: [
                '<a href="javascript: void(0)" id="{triggerId}" class="{baseCls} {baseCls}-{ui} {cls} {cls}-{ui} {extraCls} ',
                '{childElCls}" style="width: 32px;<tpl if="triggerStyle">{triggerStyle}</tpl>"',
                '<tpl if="ariaRole"> role="{ariaRole}"<tpl else> role="presentation"</tpl>',
                '>',
                '{[values.$trigger.renderBody(values)]}',
                '</a>'
            ],

            handler: function (me) {


            }
        }
    }
});



Ext.merge(Ext.util.Format, {
    emailLinkRenderer: function (val, meta, rec) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(val)) {
            return '<a href="mailto:' + val + '">' + val + '</a>';
        } else {
            return val;
        }
    }
})
