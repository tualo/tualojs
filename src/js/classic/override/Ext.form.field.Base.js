
Ext.define('Tualo.Ext.form.field.Base', {
    override :'Ext.form.field.Base',

    onDisable: function() {
        var a = this
          , b = a.inputEl;
        
        Ext.Component.prototype.onDisable.call(this);
        if (b) {
            try{
                b.dom.disabled = !0;
            }catch(e){
                console.log('onDisable',this.$className);
                console.error(e);
            }
            if (a.hasActiveError()) {
                a.clearInvalid();
                a.hadErrorOnDisable = !0
            }
            
        }
        if (a.wasValid === !1) {
            a.checkValidityChange(!0)
        }
    },
    onEnable: function() {
        var a = this, b = a.inputEl, d = a.preventMark, c;
        Ext.Component.prototype.onEnable.call(this);
        if (b) {
            try{
                b.dom.disabled = !1
            }catch(e){
                console.log('onEnable',this.$className);
                console.error(e);
            }
        }
        if (a.wasValid !== undefined) {
            a.forceValidation = !0;
            a.preventMark = !a.hadErrorOnDisable;
            c = a.isValid();
            a.forceValidation = !1;
            a.preventMark = d;
            a.checkValidityChange(c)
        }
        delete a.hadErrorOnDisable
    }
});