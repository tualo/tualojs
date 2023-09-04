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

/*
function callNumber(number) {

    $("#templink").attr("href", "tel:" + number);
 
    fakeClick(event, document.getElementById("templink"));
 
    setTimeout(function () {
       $('[data-role=popup]').popup('close');
    }, 1);
 }
 
 function fakeClick(event, anchorObj) {
    if (anchorObj.click) {
       anchorObj.click()
    } else if (document.createEvent) {
       if (event.target !== anchorObj) {
          var evt = document.createEvent("MouseEvents");
          evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          var allowDefault = anchorObj.dispatchEvent(evt);
       }
    }
 }
*/