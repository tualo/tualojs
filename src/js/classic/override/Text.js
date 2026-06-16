
Ext.define('Tualo.Ext.form.field.Text', {
    override: 'Ext.form.field.Text',
    onAfterRender: function () {
        var me = this;
        me.callParent(arguments);

        me.bodyEl.dom.addEventListener("drop", (ev) => {
            ev.preventDefault();

            if (me.config.allowDrop === false) {
                return;
            }
            const data = ev.dataTransfer.getData("text");
            // ev.target.append(data);
            me.setValue(data)
        });
        /*
        me.bodyEl.dom.addEventListener("dragover", (ev) => {
            ev.preventDefault();
        });
        */

    }
});