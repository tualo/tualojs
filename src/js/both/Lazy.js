
Ext.define('Tualo.js.LazyLoader', {
    singleton: true,
    requires: [
        'Ext.Loader'
    ],
    getLoaders: async function () {
        let json = await Tualo.Fetch.get('./tualojs-loaders');
        if (json.success) {
            for (let i = 0; i < json.data.length; i++) {
                let item = json.data[i];
                console.log('Loader', item);
                Ext.Loader.setPath(item.path, item.url);
            }
        }
        return json;
    },
    getRequires: async function () {
        let json = await Tualo.Fetch.get('./tualojs-requires');
        if (json.success) {
            let requires = [];
            for (let i = 0; i < json.data.length; i++) {
                let item = json.data[i];
                console.log('requires', item.type);
                requires.push(item.type);
            }
            return requires;
        }
        return [];
    }
});

