Ext.define('Tualo.tualojs.data.calculation.field.ListenpreisVK', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_listenpreis_vk'
    ],



    convert: function (currentValue, record) {
        let me = this;
        let doQuery = true;

        console.log('***ListenpreisVK convert start', currentValue, record);
        if (me.lastQuery != record.get('artikel'))
            if (!Ext.isEmpty(record.get('artikel'))) {
                if (typeof record.modified == 'undefined') return currentValue;
                if (record.modified) {

                    let artikel = record.get('artikel');
                    let postData = {
                        header: {},
                        position: record.getData({ serialize: true })
                    }
                    let fn = async () => {
                        let request = await fetch('./dr/calculation/listenpreis_vk', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(postData)
                        });
                        if (!request.ok) {
                            Ext.toast({
                                html: 'Fehler beim Abrufen ' + artikel + ' Daten',
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
                        me.lastQuery = artikel;


                        record.set('listenpreis_vk', responseData.value * 1.0);
                    };
                    fn();
                }
            }
        return currentValue;
    },

    critical: true,
    persist: true,
    depends: ['artikel', 'anzahl'],
});
