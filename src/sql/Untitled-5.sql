


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
        "Report Single Price Field",
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
        "Report Single Price Field",
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
        "Report Single Price Field",
        0,
        0
    )
on duplicate key 
 update classname = values(classname), xtype_long_classic  = values(xtype_long_classic),
        baseclass  = values(baseclass), xtype_long_modern  = values(xtype_long_modern), name  = values(name), description  = values(description),
        iscolumn  = values(iscolumn),
        isformfield = values(isformfield)
;