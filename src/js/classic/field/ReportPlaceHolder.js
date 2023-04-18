Ext.define('Ext.tualo.form.field.ReportPlaceHolder', {
  extend: 'Ext.form.field.TextArea',
  alias: ['widget.tualoreportplaceholder'],

  extend: 'Ext.form.FieldContainer',
  mixins: {
    field: 'Ext.form.field.Field'
  },

  requires: [
    'Ext.tip.QuickTipManager',
    'Ext.picker.Color',
    'Ext.layout.container.VBox',
    'Ext.toolbar.Item',
    'Ext.toolbar.Toolbar',
    'Ext.util.Format',
    'Ext.util.TaskManager',
    'Ext.layout.container.boxOverflow.Menu'
  ],

  initComponent: function() {
    var me = this;
    // No value set, we must report empty string
    if (me.value == null) {
      me.value = '';
    }

    me.items = [ {
      xtype: 'toolbar',
      items: [
        {
          text: '123'
        },
        {
          text: '456'
        }
      ]
    } ,
    {
      xtype: 'textarea',
      value: me.value,
      name: me.name
    }
    ];

    me.callParent(arguments);

  },

  /*
  '<ul style="list-style-type: none; margin: 0; padding: 0;60px;">',
    '<li style="float: left;">faelligam</li>',
    '<li style="float: left;">skonto</li>',
    '<li style="float: left;">skontotage</li>',
    '<li style="float: left;">skontodatum</li>',
    '<li style="float: left;">steuernummer</li>',
    '<li style="float: left;">belegdatum</li>',
    '<li style="float: left;">buchungsdatum</li>',
    '<li style="float: left;">referenz</li>',
    '<li style="float: left;">iban</li>',
    '<li style="float: left;">bic</li>',
    '<li style="float: left;">mandatsreferenz</li>',
    '<li style="float: left;">glaeubigerid</li>',
  '</ul>',
*/
});
