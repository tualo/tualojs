Ext.define('Ext.tualo.form.field.Base64Image', {
    extend:'Ext.form.field.Base',
    alias: 'widget.base64imagedisplayfield',
    requires: ['Ext.util.Format', 'Ext.XTemplate'],
    fieldSubTpl: [
        '<div id="{id}" data-ref="inputEl" tabindex="-1" role="textbox" aria-readonly="true"',
        ' aria-labelledby="{cmpId}-labelEl" {inputAttrTpl}',
        '<tpl if="fieldStyle"> style="width:100%;{fieldStyle}"</tpl>',
        ' class="{fieldCls} {fieldCls}-{ui}"></div>',
        {
            compiled: true,
            disableFormats: true
        }
    ],

    // We have the ARIA markup pre-rendered so we don't want it to be applied
    ariaRole: undefined,

    focusable: false,

    /**
     * @cfg {Boolean} readOnly
     * @private
     */
    readOnly: true,
    mimetype: 'image/png',

    /**
     * @cfg {String} [fieldCls="x-form-display-field"]
     * The default CSS class for the field.
     */
    fieldCls: Ext.baseCSSPrefix + 'form-display-field',

    fieldBodyCls: Ext.baseCSSPrefix + 'form-display-field-body',

    /**
     * @cfg {Boolean} htmlEncode
     * True to escape HTML in text when rendering it.
     */
    htmlEncode: false,

    /**
     * @cfg {Function} renderer
     * A function to transform the raw value for display in the field.
     *
     *     Ext.create('Ext.form.Panel', {
     *         renderTo: document.body,
     *         width: 175,
     *         bodyPadding: 10,
     *         title: 'Final Score',
     *         items: [{
     *             xtype: 'displayfield',
     *             fieldLabel: 'Grade',
     *             name: 'final_grade',
     *             value: 68,
     *             renderer: function (value, field) {
     *                 var color = (value < 70) ? 'red' : 'black';
     *                 return '<span style="color:' + color + ';">' + value + '</span>';
     *             }
     *         }]
     *     });
     *
     * @param {Object} value The raw field {@link #value}
     * @param {Ext.form.field.Display} field The display field
     * @return {String} displayValue The HTML string to be rendered
     */

    /**
     * @cfg {Object} scope
     * The scope to execute the {@link #renderer} function. Defaults to this.
     */

    noWrap: false,

    /**
     * @cfg {Boolean} validateOnChange
     * @private
     */
    validateOnChange: false,

    initEvents: Ext.emptyFn,

    submitValue: false,

    getValue: function() {
        return this.value;
    },

    valueToRaw: function(value) {
        if (value || value === 0 || value === false) {
            return value;
        } else {
            return '';
        }
    },

    isDirty: function(){
        return false;
    },

    isValid: Ext.returnTrue,

    validate: Ext.returnTrue,

    getRawValue: function() {
        return this.rawValue;
    },

    setRawValue: function(value) {

        var me = this;
        if (Ext.isEmpty(value)){
          value='';
        }
        if ((typeof value.indexOf=='function')&&(value.indexOf('#url')==0)){
          var url = value.substring(5,value.length-1);
          Tualo.Ajax.request({
            url: url,
            scope: this,
            json: function(o){
              try{
                if (o.success){
                  if (o.data){
                    if (o.data[0]){
                      if (o.data[0].report_images__filedata){
                        this.setRawValue(o.data[0].report_images__filedata);
                      }
                    }
                  }
                }
              }catch(e){

              }
            }
          })
          return;
        }
        value = Ext.valueFrom(value, '');
        me.rawValue = value;
        if (me.rendered) {
          var width= me.getWidth();
          if (width==27){
            width=me.up('form').getWidth()-10;
          }            
          var height=width*29.7/21;
          me.inputEl.dom.innerHTML = '<div style="background-image:'+'url(data:' + me.mimetype+';base64,'+ me.getDisplayValue()+')'+';background-size:cover;width:'+width+'px;height: '+height+'px;"></div>';
          me.updateLayout();
        }
        return value;
    },

    /**
     * @private
     * Format the value to display.
     */
    getDisplayValue: function() {
        var me = this,
            value = this.getRawValue(),
            display;
        if (me.renderer) {
             display = me.renderer.call(me.scope || me, value, me);
        } else {
             display = me.htmlEncode ? Ext.util.Format.htmlEncode(value) : value;
        }
        return display;
    },

    getSubTplData: function(fieldData) {
        var ret = this.callParent(arguments);

        ret.value = this.getDisplayValue();

        return ret;
    }

    /**
     * @cfg {String} inputType
     * @private
     */
    /**
     * @cfg {Boolean} disabled
     * @private
     */
    /**
     * @cfg {Number} checkChangeEvents
     * @private
     */
    /**
     * @cfg {Number} checkChangeBuffer
     * @private
     */
});
