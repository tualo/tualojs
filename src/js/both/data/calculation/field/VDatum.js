

Ext.define('Tualo.tualojs.data.calculation.field.VDatum', {
    extend: 'Ext.data.field.Date',
    alias: [
        'data.field.tualo_calculation_vdatum'
    ],
    lastQuery: null,
    dateReadFormat: 'Y-m-d',
    dateWriteFormat: 'Y-m-d',

    convert: function (currentValue, record) {
        let me = this;
        let doQuery = true;
        if (Ext.isEmpty(currentValue)) {


            if (Ext.isEmpty(record.get('__id'))) return currentValue;

            let fn = async () => {

                let postData = {
                    header: {},
                    position: record.getData({ serialize: true })
                }

                let request = await fetch('./dr/calculation/vdatum', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
                if (!request.ok) {
                    Ext.toast({
                        html: 'Fehler beim Abrufen der VDatum-Daten',
                        title: 'Fehler',
                        width: 200,
                        align: 't'
                    });
                    return;
                }
                let responseData = await request.json();
                if (!responseData.success) {
                    let msg = responseData.msg;
                    if (!msg) msg = "Leider ist ein unbekannter Fehler aufgetreten.";
                    Ext.toast({
                        html: msg,
                        title: 'Fehler',
                        width: 200,
                        align: 't'
                    });
                    return;
                }
                // me.lastQuery = artikel;


                record.set('vdatum', responseData.value);
            };
            fn();
            return new Date();

        }
        return currentValue;
    },
    critical: true,
    persist: true,
    depends: ['__id'],
});

