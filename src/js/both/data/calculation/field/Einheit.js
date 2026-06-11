Ext.define('Tualo.tualojs.data.calculation.field.Einheit', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_einheit'
    ],
    lastQuery: null,
    convert: function (currentValue, record) {
        let me = this;
        let doQuery = true;

        console.log('Einheit convert start', record);
        if (me.lastQuery != record.get('artikel'))
            if (!Ext.isEmpty(record.get('artikel'))) {
                if (typeof record.modified == 'undefined') return currentValue;
                if (record.modified) {
                    let type = encodeURIComponent(record.get('artikel'));
                    let fn = async () => {
                        let request = await fetch('./ds/view_artikelgruppen_einheit/read/' + type);
                        if (!request.ok) {
                            Ext.toast({
                                html: 'Fehler beim Abrufen ' + type + ' Daten',
                                title: 'Fehler',
                                width: 200,
                                align: 't'
                            });
                            return;
                        }
                        let data = await request.json();
                        if (!data.success) {
                            let msg = data.msg;
                            if (!msg) msg = "Leider ist ein unbekannter Fehler aufgetreten.";
                            Ext.toast({
                                html: msg,
                                title: 'Fehler',
                                width: 200,
                                align: 't'
                            });
                            return;
                        }
                        if (!data.data || data.data.length == 0) {

                            return;
                        }
                        me.lastQuery = record.get('artikel');
                        record.set('einheit', data.data[0].einheit);
                    };
                    fn();
                }
            }
        return currentValue;
    },
    critical: true,
    persist: true,
    depends: ['artikel'],
});

