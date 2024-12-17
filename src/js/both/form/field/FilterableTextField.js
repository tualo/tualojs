Ext.define('Tualo.from.fields.TextDSFilter', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.tualo_dsfilter_textfield',

    triggers: {
        dsfilter: {
            cls: 'fa-solid fa-filter',
            tooltip: "nach diesem Wert filtern",
            handler: function(btn) {
                try{
                    f = this.up('form')
                        .up()
                        .getComponent('list')
                        .getColumnManager()
                        .getColumns()
                        .filter(
                            (f) => f.dataIndex==this.getName() && (typeof f.filter=='object')
                        )
                        .pop();

                    f.filter.setValue(
                        this.getValue()+'%'
                    )
                    f.filter.setActive(true)
                }catch(e){
                    console.error(e)
                }
            }
        }
    }
})
