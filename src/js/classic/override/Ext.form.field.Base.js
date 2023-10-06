
Ext.override('Ext.form.field.Base', {
    onDisable: function() {
        var a = this
          , b = a.inputEl;
        
        Ext.Component.prototype.onDisable.call(this);
        if (b) {
            try{
                b.dom.disabled = !0;
                if (a.hasActiveError()) {
                    a.clearInvalid();
                    a.hadErrorOnDisable = !0
                }
            }catch(e){
                console.log('onDisable',this.$className);
                console.error(e);
            }
        }
        if (a.wasValid === !1) {
            a.checkValidityChange(!0)
        }
    }
});
