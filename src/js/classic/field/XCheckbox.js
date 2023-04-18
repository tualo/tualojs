Ext.define('Ext.tualo.form.field.XCheckbox', {
  extend: 'Ext.form.field.Checkbox',
  alias: ['widget.xcheckbox'],
  inputValue: 'X',
  getValue: function(){
    return (this.checked===true)?'X':'N'
  },
  setValue: function(v){
    console.log('setValue',v);
    if ( (v==this.inputValue) || (v===true) ){
      v=true;
    }else{
      v=false;
    }
    return this.callParent([v]);
  }
});
