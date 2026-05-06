Ext.define('Tualo.tualojs.data.calculation.field.Einheit', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_einheit'
    ],
    lastQuery: null,
    convert: function (currentValue, record) {
        let doQuery = true;

        console.log('TualoSinglePrice convert start', record);
        if (!Ext.isEmpty(record.get('artikel'))) {
            if (typeof record.modified == 'undefined') return currentValue * 1;
            if (record.modified) {
                let type = record.get('artikel');
                let request = await fetch(`./ds/mengeneinheiten/read/${type}`);
                if (!request.ok) {
                    Ext.toast({
                        html: `Fehler beim Abrufen ${type} Daten`,
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
                record.set('einheit', data.data[0].faktor * 1.0);
            }
        }
    },
    critical: true,
    persist: true,
    depends: ['artikel'],
});

