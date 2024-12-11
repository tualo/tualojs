Ext.define('Ext.tualo.form.field.IBAN', {
  extend: 'Ext.form.field.Text',
  alias: ['widget.iban'],
  enableKeyEvents: true,
  hideTrigger: true,
  triggerClass: 'x-form-search-trigger',
  validators: {
    EG:{len:27,validator: null },
    AL:{len:28,validator: null },
    DZ:{len:24,validator: null },
    AD:{len:24,validator: null },
    AO:{len:25,validator: null },
    AZ:{len:28,validator: null },
    BH:{len:22,validator: null },
    BE:{len:16,validator: null },
    BJ:{len:28,validator: null },
    BA:{len:20,validator: null },
    BR:{len:29,validator: null },
    VG:{len:24,validator: null },
    BG:{len:22,validator: null },
    BF:{len:27,validator: null },
    BI:{len:16,validator: null },
    CR:{len:21,validator: null },
    CI:{len:28,validator: null },
    DK:{len:18,validator: null },
    DE:{len:22,validator: null },
    DO:{len:28,validator: null },
    EE:{len:20,validator: null },
    FO:{len:18,validator: null },
    FI:{len:18,validator: null },
    FR:{len:27,validator: null },
    GA:{len:27,validator: null },
    GE:{len:22,validator: null },
    GI:{len:23,validator: null },
    GR:{len:27,validator: null },
    GL:{len:18,validator: null },
    GT:{len:28,validator: null },
    IR:{len:26,validator: null },
    IE:{len:22,validator: null },
    IS:{len:26,validator: null },
    IL:{len:23,validator: null },
    IT:{len:27,validator: null },
    JO:{len:30,validator: null },
    CM:{len:27,validator: null },
    CV:{len:25,validator: null },
    KZ:{len:20,validator: null },
    QA:{len:29,validator: null },
    CG:{len:27,validator: null },
    XK:{len:20,validator: null },
    HR:{len:21,validator: null },
    KW:{len:30,validator: null },
    LV:{len:21,validator: null },
    LB:{len:28,validator: null },
    LI:{len:21,validator: null },
    LT:{len:20,validator: null },
    LU:{len:20,validator: null },
    MG:{len:27,validator: null },
    ML:{len:28,validator: null },
    MT:{len:31,validator: null },
    MR:{len:27,validator: null },
    MU:{len:30,validator: null },
    MK:{len:19,validator: null },
    MD:{len:24,validator: null },
    MC:{len:27,validator: null },
    ME:{len:22,validator: null },
    MZ:{len:25,validator: null },
    NL:{len:18,validator: null },
    NO:{len:15,validator: null },
    AT:{len:20,validator: null },
    TL:{len:23,validator: null },
    PK:{len:24,validator: null },
    PS:{len:29,validator: null },
    PL:{len:28,validator: null },
    PT:{len:25,validator: null },
    RO:{len:24,validator: null },
    SM:{len:27,validator: null },
    ST:{len:25,validator: null },
    SA:{len:24,validator: null },
    SE:{len:24,validator: null },
    CH:{len:21,validator: null },
    SN:{len:28,validator: null },
    RS:{len:22,validator: null },
    SK:{len:24,validator: null },
    SI:{len:19,validator: null },
    ES:{len:24,validator: null },
    CZ:{len:24,validator: null },
    TN:{len:24,validator: null },
    TR:{len:26,validator: null },
    HU:{len:28,validator: null },
    AE:{len:23,validator: null },
    GB:{len:22,validator: null },
    CY:{len:28,validator: null },
    CF:{len:27,validator: null }
  },

  validator_pz: function(value,cb){
    var me = this;
    value = value.replace(/\s/g,'');
    var lc = value.substring(0,2);
    var vpz = value.substring(2,4);

    var ilc = '';
    for (var i = 0; i < lc.length; i++) {
      var num = (lc.charCodeAt(i)-64)+9;
      ilc += num.toString();
    }
    ilc += '00';
    var bban = value.substring(4) + ilc;

    //var pz_mod = BigInt()(new Big(bban+'')).mod(97).toFixed(0)+"";
    var pz_mod = parseInt(  BigInt(bban) % BigInt(97) );
    var pz = (98 - pz_mod).toString();
    while (pz.length < 2) {
      pz = '0' + pz;
    }
    return ( (vpz*1==pz*1) ? true :'Die Prüfziffer ist falsch.' );
  },

  validator: function(value){
    if(value===''){
      return true;
    }
    var vdr = this.validators[value.substring(0,2).toUpperCase()];
    if (typeof vdr === 'undefined'){
      return "Ländercode nicht erkannt.";
    }else{
      if (value.replace(/\s/g,'').length === vdr.len){
        return this.validator_pz(value);
      }else{
        return "Die  IBAN ist zu "+((value.replace(/\s/g,'').length < vdr.len)?'kurz':'lang')+".";
      }
    }
  },

  listeners: {
    keyup: function(f,e){

          var rawValue = f.getValue();
          var shortValue = rawValue.replace(/\s/g,'');
          var cPos = f.el.dom.selectionStart;
          var nPos = cPos;
          var v= "";

          if ( (e.getKey()>=47) && (e.getKey()<=128) && (cPos!==0) ){

              shortValue = shortValue.substring(0,2).toUpperCase() + shortValue.substring(2);
              v = (shortValue.match(/.{1,4}/g)).join(' ');
              f.setValue( v );
              if ( (cPos==rawValue.length) && (v.substring(cPos).length>0) ){
                nPos++;
              }

          }

          // maybe check/reset cursor pos! see ext3

    }
  }

});



