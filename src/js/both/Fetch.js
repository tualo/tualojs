Ext.define('Tualo.Fetch',{
    singleton: true,
    getFormData: function(object) {

        let formBody = [];
        for (let key in object) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        return formBody;
    },
    post: async function(data){

        let frmData = this.getFormData(data);
        let result = await fetch(
        Ext.getApplication().getAPIPath(),
        {
            method: "POST",
            body: frmData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        },
        ).then((response) => response.json())
        return result;
    }
});