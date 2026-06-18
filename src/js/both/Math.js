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

    addRecord: function (record, filterFn = () => true) {
        let me = this,
            fields = record.getFields();
        fields.forEach((field, index) => {
            let value = record.get(field.name);
            if (!filterFn(field, value)) return;

            if (value === null || typeof value === 'undefined')
                return;


            if (typeof value == 'number') {
                me.context().def(field.name, value);
            } else if (typeof value == 'string') {
                let num = parseFloat(value);
                if (!isNaN(num)) {
                    me.context().def(field.name, num);
                }
            } else if (typeof value == 'boolean') {
                me.context().def(field.name, value ? 1 : 0);
            } else if (value instanceof Date) {
                me.context().def(field.name, value.getTime());
            } else {
                let fn = () => {
                    Ext.toast({
                        html: `Unsupported field type for formula: ${field.name} (${typeof value})`,
                        title: 'Fehler',
                        align: 't',
                        iconCls: 'fa fa-warning'
                    });
                }
                me.context().def(field.name, fn);
            }
            // me.context().def(field.name, record.get(field.name));
        });
    },

    parse: function (term, ctx) {
        if (typeof ctx === 'undefined')
            ctx = this.context();
        return Tualo.tualojs.Shunt.parse(term, ctx);
    },

    getContext: function () {
        var ctx = new Tualo.tualojs.Shunt.Context();
        ctx.def('PI', Math.PI);
        ctx.def('E', Math.E);
        ctx.def('LN2', Math.LN2);
        ctx.def('round', Math.round);
        ctx.def('floor', Math.floor);
        ctx.def('ceil', Math.ceil);
        ctx.def('abs', Math.abs);
        ctx.def('sqrt', Math.sqrt);
        ctx.def('pow', Math.pow);
        ctx.def('max', Math.max);
        ctx.def('min', Math.min);
        return ctx;
    },


})
