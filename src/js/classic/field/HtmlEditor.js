Ext.define('Tualo.form.field.HtmlEditor', {
    extend: 'Ext.form.field.HtmlEditor',
    alias: 'widget.tualo_html_editor',

    removeFormat: function () {
        this.execCmd('removeFormat', false, null);
    },
    getToolbarCfg: function () {
        var me = this,
            id = 'clearformat',
            tipsEnabled = Ext.quickTipsActive && Ext.tip.QuickTipManager.isEnabled(),
            baseCSSPrefix = Ext.baseCSSPrefix,
            fontSelectItem, undef,
            toolbarConfig = me.callParent();

        toolbarConfig.items.push(
            '-',
            Ext.merge({
                itemId: id,
                cls: baseCSSPrefix + 'btn-icon',
                iconCls: baseCSSPrefix + 'edit-' + id + ' fa-solid fa-text-slash',
                enableToggle: false,
                scope: me,
                handler: me.removeFormat,
                clickEvent: 'mousedown',
                tooltip: tipsEnabled ? 'Clear Format' : undef,
                overflowText: 'Clear Format',
                tabIndex: -1
            }, me.buttonDefaults)
        );
        return toolbarConfig;

    },

});