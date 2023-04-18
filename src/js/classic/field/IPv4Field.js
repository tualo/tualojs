Ext.define('Ext.tualo.form.field.IPv4Field',  {
    alias: 'widget.tualoip4field',
    extend: 'Ext.form.field.Text',
    //inputMask: '___.___.___.___',

    enableKeyEvents: true,
    //maskRe: /^([0-9]{1,3}\.){3}[0-9]{1,3}$/,

    validator: function (val) {
      var r = /^([0-9]{3}\.){3}[0-9]{3}$/;
      if (r.test(val)){
        var p = val.split('.');
        var check = true;
        p.forEach(function(x){

          if ((parseInt(x)>=0)&&(parseInt(x)<=255)){
            check=true && check;
          }else{
            check=false;
          }
        });
        if (check===false){
          return "Number out of Range";
        }
        return true;
      }else{
        return "Must be a IP Address";
      }
    },

    constructor: function(config) {
    	config = config || {};
      Ext.apply(this,config);
      this.callParent([config]);
    },

    onBlur: function(e) {
      var me = this,
          el = me.inputEl.dom,
          v = el.value;
      var p = v.split('.');
      var r = [];
      p.forEach(function(x){ r.push(  this.fixedLength(x) );}.bind(this));
      el.value = r.join('.');
    },

    onKeyDown: function(e) {

      var me = this,
          el = me.inputEl.dom,
          v = el.value;
      if (e.event.key && !e.ctrlKey && !e.altKey){
        var allowed=['.','0','1','2','3','4','5','6','7','8','9'];
        if (e.event.key.length>1){

        }else{
          if (allowed.indexOf(e.event.key)==-1){
            console.log('not allowed');
            e.stopPropagation();
            e.preventDefault();
            return false;
          }

          if ((v.substr(-1)=='.')&&(e.event.key=='.')){
            e.stopPropagation();
            e.preventDefault();
            return false;
          }

          if (v.length==15){
            e.stopPropagation();
            e.preventDefault();
            return false;
          }

          var p = (v+e.event.key).split('.');
          var r = [];
          p.forEach(function(x){ r.push(  this.fixedLength(x) );}.bind(this));
          if ((e.event.key=='.')){

            el.value = (r.slice(0,r.length-1)).join('.');
          }
        }
      }
      this.fireEvent('keydown', this, e);

    },

    fixedLength: function(v){
      while(v.length<3){
        v='0'+v;
      }
      if (v=='000'){
        v='';
      }
      return v;
    },

    // For now, this just strips everything that's not a number
    stripMask: function (maskedData) {
      return maskedData.split('').filter(this.isDigit);
    },

    isDigit: function (char) {
        return /\d/.test(char);
    },

    // Replace `_` characters with characters from `data`
    applyMask: function (data) {
      return this.fieldmask.map(function(char) {
        if (char != '_') return char;
        if (data.length == 0) return char;
        return data.shift();
      }).join('')
    },

    reapplyMask: function (data) {
      return this.applyMask(this.stripMask(data));
    }
});
