Ext.define('Ext.tualo.form.field.TextTemplates',  {
    alias: 'widget.tualotexttemplates_{alias}',
    extend: 'Ext.form.field.TextArea',
    //extend: 'Ext.tualo.form.field.Quill',
    /*
    templatename: '{name}',
    templateid: '{id}',


    config: {
        values: ''
    },

    publishes: {
        values: true
    },
    */

    constructor: function(config) {
        config = config || {};
        Ext.apply(this,config);
        //config.readOnly=true,
        this.callParent([config]);
        //this.on('render',this.initContextMenu,this);
    },
    onItemClick: function(e){
        console.log('onItemClick',e);
        
        this.setValue(this.getValue()+"\n"+e.fulltext);
    },
    initContextMenu: function(){
        
        var contextMenu = new Ext.menu.Menu({items:[]});
    
        Tualo.Ajax.request({
            url: './ds/texttemplate/read',
            params: {
                filter: JSON.stringify([{
                    operator: 'eq',
                    property: 'klasse',
                    value: this.templateid
                }])
            },
            scope: this,
            json: function(o){
                if (o.success){

                    o.data.forEach(element => {

                        contextMenu.add({
                            text: element.text.substring(0,30)+'...', 
                            fulltext: element.text,
                            scope: this,
                            handler: this.onItemClick
                        })
                      
                    });
                }
            }
        });

        this.getEl().dom.oncontextmenu = function (e) {
            e.preventDefault();
            console.log(e);
            var xy = [e.x,e.y];
            contextMenu.showAt(xy);
        };

    }
});
