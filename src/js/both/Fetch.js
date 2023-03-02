Ext.define('Tualo.Fetch',{
    singleton: true,
    post: async (data)=>{

        let frmData = object => Object.keys(data).reduce((formData, key) => {
            formData.append(key, object[key]);
            return formData;
        }, new FormData());

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