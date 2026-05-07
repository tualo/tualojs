


insert into extjs_base_types (
        vendor, id, classname, xtype_long_classic,
        baseclass, xtype_long_modern, name, description,
        iscolumn,
        isformfield
    )
values
    (
        "Tualo",                              
        "Tualo.tualojs.data.calculation.field.EinheitFaktor",        
        "Tualo.tualojs.data.calculation.field.EinheitFaktor",  
        "data.field.tualo_calculation_einheit_faktor",
        "Ext.form.field.Number",              
        "data.field.tualo_calculation_einheit_faktor",          
        "Tualo.tualojs.data.calculation.field.EinheitFaktor",  
        "Report Unit Factor Field",
        0,
        0
    )
on duplicate key 
 update classname = values(classname), xtype_long_classic  = values(xtype_long_classic),
        baseclass  = values(baseclass), xtype_long_modern  = values(xtype_long_modern), name  = values(name), description  = values(description),
        iscolumn  = values(iscolumn),
        isformfield = values(isformfield)
;


insert into extjs_base_types (
        vendor, id, classname, xtype_long_classic,
        baseclass, xtype_long_modern, name, description,
        iscolumn,
        isformfield
    )
values
    (
        "Tualo",                              
        "Tualo.tualojs.data.calculation.field.Einheit",        
        "Tualo.tualojs.data.calculation.field.Einheit",  
        "data.field.tualo_calculation_einheit",
        "Ext.form.field.Number",              
        "data.field.tualo_calculation_einheit",          
        "Tualo.tualojs.data.calculation.field.Einheit",  
        "Report Unit Field",
        0,
        0
    )
on duplicate key 
 update classname = values(classname), xtype_long_classic  = values(xtype_long_classic),
        baseclass  = values(baseclass), xtype_long_modern  = values(xtype_long_modern), name  = values(name), description  = values(description),
        iscolumn  = values(iscolumn),
        isformfield = values(isformfield)
;


insert into extjs_base_types (
        vendor, id, classname, xtype_long_classic,
        baseclass, xtype_long_modern, name, description,
        iscolumn,
        isformfield
    )
values
    (
        "Tualo",                              
        "Tualo.tualojs.data.calculation.field.Net",        
        "Tualo.tualojs.data.calculation.field.Net",  
        "data.field.tualo_calculation_net",
        "Ext.form.field.Number",              
        "data.field.tualo_calculation_net",          
        "Tualo.tualojs.data.calculation.field.Net",  
        "Report Net Price Field with markup",
        0,
        0
    )
on duplicate key 
 update classname = values(classname), xtype_long_classic  = values(xtype_long_classic),
        baseclass  = values(baseclass), xtype_long_modern  = values(xtype_long_modern), name  = values(name), description  = values(description),
        iscolumn  = values(iscolumn),
        isformfield = values(isformfield)
;


insert into extjs_base_types (
        vendor, id, classname, xtype_long_classic,
        baseclass, xtype_long_modern, name, description,
        iscolumn,
        isformfield
    )
values
    (
        "Tualo",                              
        "Tualo.tualojs.data.calculation.field.NetSimple",        
        "Tualo.tualojs.data.calculation.field.NetSimple",  
        "data.field.tualo_calculation_net_simple",
        "Ext.form.field.Number",              
        "data.field.tualo_calculation_net_simple",          
        "Tualo.tualojs.data.calculation.field.NetSimple",  
        "Report Net Simple Price Field",
        0,
        0
    )
on duplicate key 
 update classname = values(classname), xtype_long_classic  = values(xtype_long_classic),
        baseclass  = values(baseclass), xtype_long_modern  = values(xtype_long_modern), name  = values(name), description  = values(description),
        iscolumn  = values(iscolumn),
        isformfield = values(isformfield)
;



insert into extjs_base_types (
        vendor, id, classname, xtype_long_classic,
        baseclass, xtype_long_modern, name, description,
        iscolumn,
        isformfield
    )
values
    (
        "Tualo",                              
        "Tualo.tualojs.data.calculation.field.SinglePriceMarkup",        
        "Tualo.tualojs.data.calculation.field.SinglePriceMarkup",  
        "data.field.tualo_calculation_single_price_markup",
        "Ext.form.field.Number",              
        "data.field.tualo_calculation_single_price_markup",          
        "Tualo.tualojs.data.calculation.field.SinglePriceMarkup",  
        "Report Single Price Markup Field",
        0,
        0
    )
on duplicate key 
 update classname = values(classname), xtype_long_classic  = values(xtype_long_classic),
        baseclass  = values(baseclass), xtype_long_modern  = values(xtype_long_modern), name  = values(name), description  = values(description),
        iscolumn  = values(iscolumn),
        isformfield = values(isformfield)
;