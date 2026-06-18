Ext.define('Tualo.tualojs.Math', {
    constructor: function (data, session, skipStoreAddition) {
        let me = this;
        me._context = me.context();
    },

    context: function () {
        let me = this;
        if (me._context) return me._context;
        me._context = me.getContext();
        return me._context;
    },

    addRecord: function (record) {
        let me = this,
            fields = record.getFields();
        fields.forEach((field, index) => {
            me.context().def(field.name, record.get(field.name));
        });
    },

    parse: function (term, ctx) {
        if (typeof ctx === 'undefined')
            ctx = this.context();
        return Tualo.tualojs.Shunt.parse(term, ctx);
    },

    getContext: function () {
        var ctx = new Tualo.tualojs.Shunt.Context();
        return ctx;
    },


})
