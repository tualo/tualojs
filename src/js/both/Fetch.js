Ext.define('Tualo.Fetch',{
    singleton: true,
    getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
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